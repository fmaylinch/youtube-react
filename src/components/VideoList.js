import React from 'react'
import VideoItem from './VideoItem'

const VideoList = function(props) {

  const videoItems = props.videos
    .map(video => <VideoItem key={video.id} video={video} />)

  return (
    <div>{videoItems}</div>
  )
}

export default VideoList
