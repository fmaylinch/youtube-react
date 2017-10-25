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
        <div className="item" key={video.id}>
          <Link to={'/detail/' + video.id}>
            <VideoItem video={video} />
            <div className="video-title">{video.title}</div>
          </Link>
        </div>
      ))
  }

  return (
    <div className="video-list">{loadingOrVideos}</div>
  )
}

export default VideoList
