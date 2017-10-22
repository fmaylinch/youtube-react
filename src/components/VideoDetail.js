//@flow

import React from 'react'
import type { ContextRouter } from 'react-router-dom'

const VideoDetail = function(props: ContextRouter) {

  return (
    <div>Show video player for video with id: {props.match.params.id}</div>
  )
}

export default VideoDetail
