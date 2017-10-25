// @flow

import type { Video } from './../components/types'

export default class YoutubeUtil {

  // Extracts videos from Youtube response data
  static extractVideos(data: any) : Array<Video> {

    return data.items
      .filter(v => v.id.kind === "youtube#video")
      .map(v => ({
        id: v.id.videoId,
        title: v.snippet.title,
        image: v.snippet.thumbnails.medium}))
  }
}
