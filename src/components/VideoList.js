import React from 'react'
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = function(props) {

  const videoItems = props.videos
    .map(video => <VideoItem key={video.id} video={video} />)

  return (
    <div className="video-list">{videoItems}</div>
  )
}

export default VideoList
