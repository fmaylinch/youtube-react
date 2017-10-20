//@flow

import React from 'react'
import VideoItem from './VideoItem'
import type { VideosObject } from './types'
import './VideoList.css'

const VideoList = function(props: VideosObject) {

  const videoItems = props.videos
    .map(video => <VideoItem key={video.id} video={video} />)

  return (
    <div className="video-list">{videoItems}</div>
  )
}

export default VideoList
