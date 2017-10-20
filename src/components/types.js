
export type Video = {
  id: string,
  image: { url: string },
  title: string
}

export type VideosObject = {
  videos: Array<Video>
}
