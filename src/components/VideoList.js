//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import VideoItem from './VideoItem'
import type { Video } from './types'
import './VideoList.css'

type Props = {
  videos: Array<Video>,
  loading: boolean
};

const VideoList = function(props: Props) {

  let loadingOrVideos;

  if (props.loading) {
    loadingOrVideos = <div>Loading...</div>
  } else {
    loadingOrVideos = props.videos
      .map(video => (
        <Link to={'/detail/' + video.id} key={video.id}>
          <VideoItem video={video} />
        </Link>
      ))
  }

  return (
    <div className="video-list">{loadingOrVideos}</div>
  )
}

export default VideoList
