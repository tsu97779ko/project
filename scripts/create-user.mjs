// Usage: node --env-file-if-exists=/vercel/share/.env.project scripts/create-user.mjs <email> <password> <name>
import { randomUUID } from 'node:crypto'
import { hashPassword } from 'better-auth/crypto'
import pg from 'pg'

const [email, password, name] = process.argv.slice(2)
if (!email || !password || !name) {
  console.error('Usage: create-user.mjs <email> <password> <name>')
  process.exit(1)
}
if (password.length < 8) {
  console.error('Password must be at least 8 characters.')
  process.exit(1)
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const client = await pool.connect()

try {
  await client.query('BEGIN')
  const userId = randomUUID()
  await client.query(
    'INSERT INTO "user" ("id", "name", "email", "emailVerified") VALUES ($1, $2, $3, true)',
    [userId, name, email.toLowerCase()],
  )
  await client.query(
    'INSERT INTO "account" ("id", "accountId", "providerId", "userId", "password") VALUES ($1, $2, $3, $4, $5)',
    [randomUUID(), userId, 'credential', userId, await hashPassword(password)],
  )
  await client.query('COMMIT')
  console.log(`Created member: ${email}`)
} catch (error) {
  await client.query('ROLLBACK')
  console.error('Failed to create member:', error.message)
  process.exitCode = 1
} finally {
  client.release()
  await pool.end()
}
