//@flow

import React from 'react'
import type { ContextRouter } from 'react-router-dom'
import './VideoDetail.css'

const VideoDetail = function(props: ContextRouter) {

  return (
    <div className="video-detail">
      <iframe title="video" src={`https://www.youtube.com/embed/` + props.match.params.id}
              width="560" height="315"
              frameBorder="0" allowFullScreen />
    </div>
  )
}

export default VideoDetail
