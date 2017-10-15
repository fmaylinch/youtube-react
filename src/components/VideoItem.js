import React from 'react'

const VideoItem = function(props) {

  const src = "https://www.youtube.com/embed/" + props.videoId;

  return (
    <div>
      <iframe title={props.title} src={src}
        width="320" height="180"
        frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VideoItem
