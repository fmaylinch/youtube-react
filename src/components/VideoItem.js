import React from 'react'

const VideoItem = function(props) {

  const src = "https://www.youtube.com/embed/" + props.videoId;

  return (
    <div>
      <h3>{props.title}</h3>
      <iframe title={props.title} src={src}
        width="560" height="315"
        frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VideoItem
