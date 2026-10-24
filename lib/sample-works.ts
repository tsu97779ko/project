export type Novel = {
  id: string
  title: string
  author: string
  genre: string
  excerpt: string
  chapters: number
  likes: number
  updatedAt: string
}

export type Manga = {
  id: string
  title: string
  author: string
  genre: string
  cover: string
  episodes: number
  likes: number
}

export const latestNovels: Novel[] = [
  {
    id: 'n1',
    title: '月曜日の図書室で',
    author: 'しろくま文庫',
    genre: '青春',
    excerpt:
      '放課後の図書室には、いつも同じ席で本を読む先輩がいた。返却期限の過ぎた一冊が、ふたりの距離を少しだけ近づける。',
    chapters: 12,
    likes: 248,
    updatedAt: '2時間前',
  },
  {
    id: 'n2',
    title: '星屑ポストの配達人',
    author: '宵待ちこ',
    genre: 'ファンタジー',
    excerpt:
      '流れ星に願いを書いて届ける、空の郵便屋さん。今日の宛先は、地上でいちばん小さな町の、いちばん寂しい女の子。',
    chapters: 8,
    likes: 512,
    updatedAt: '5時間前',
  },
  {
    id: 'n3',
    title: '喫茶ひだまりの事件簿',
    author: '紅茶ねこ',
    genre: 'ミステリー',
    excerpt:
      '常連さんのカップから消えた角砂糖ひとつ。マスターの何気ない一言が、思いもよらない真相へとつながっていく。',
    chapters: 21,
    likes: 389,
    updatedAt: '昨日',
  },
]

export const popularManga: Manga[] = [
  {
    id: 'm1',
    title: 'まどべのミケ',
    author: 'はるのそら',
    genre: '日常',
    cover: '/images/manga-1.png',
    episodes: 34,
    likes: 1820,
  },
  {
    id: 'm2',
    title: 'ほしふる魔法使い',
    author: '水無月りん',
    genre: 'ファンタジー',
    cover: '/images/manga-2.png',
    episodes: 18,
    likes: 1544,
  },
  {
    id: 'm3',
    title: 'さくら並木で待ってる',
    author: 'こもれび',
    genre: '青春',
    cover: '/images/manga-3.png',
    episodes: 27,
    likes: 1302,
  },
  {
    id: 'm4',
    title: 'ドラゴンとパン屋さん',
    author: 'もちこ',
    genre: 'ほのぼの',
    cover: '/images/manga-4.png',
    episodes: 15,
    likes: 1176,
  },
]

export const ranking = [
  { id: 'r1', title: '星屑ポストの配達人', author: '宵待ちこ', type: '小説' },
  { id: 'r2', title: 'まどべのミケ', author: 'はるのそら', type: '漫画' },
  { id: 'r3', title: '喫茶ひだまりの事件簿', author: '紅茶ねこ', type: '小説' },
  { id: 'r4', title: 'ほしふる魔法使い', author: '水無月りん', type: '漫画' },
  { id: 'r5', title: '月曜日の図書室で', author: 'しろくま文庫', type: '小説' },
] as const

export const genres = ['恋愛', 'ファンタジー', '青春', 'ミステリー', '日常', 'ほのぼの', 'SF', 'ホラー']
