//@flow

import React from 'react'

type Video = {
  image: { url: string },
  title: string
};

const VideoItem = function(props: {video: Video}) {

  return (
    <div>
      <img src={props.video.image.url} alt={props.video.title} />
    </div>
  )
}

export default VideoItem
