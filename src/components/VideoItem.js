import React from 'react'

const VideoItem = function(props) {

  return (
    <div>
      <img src={props.video.image.url} alt={props.video.title} />
    </div>
  )
}

export default VideoItem
