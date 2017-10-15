import React from 'react'
import VideoItem from './VideoItem'

const VideoList = function(props) {

  const videoItems = props.videos
    .map(v => <VideoItem key={v.id} videoId={v.id} title={v.title}/>)

  return (
    <div>{videoItems}</div>
  )
}

export default VideoList
