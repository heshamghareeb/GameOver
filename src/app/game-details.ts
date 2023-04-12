export interface GameDetails {
  id: number
  title: string
  thumbnail: string
  status: string
  short_description: string
  description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
  screenshots: Screenshot[]
}

export interface Screenshot {
  id: number
  image: string
}
