//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import VideoItem from './VideoItem'
import type { VideosObject } from './types'
import './VideoList.css'

const VideoList = function(props: VideosObject) {

  const videoItems = props.videos
    .map(video => (
      <Link to={'/detail/' + video.id} key={video.id}>
        <VideoItem video={video} />
      </Link>
    ))

  return (
    <div className="video-list">{videoItems}</div>
  )
}

export default VideoList
