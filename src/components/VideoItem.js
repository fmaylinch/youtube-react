//@flow

import React from 'react'
import type { Video } from './types'

const VideoItem = function(props: {video: Video}) {

  return (
    <div>
      <img src={props.video.image.url} alt={props.video.title} />
    </div>
  )
}

export default VideoItem
