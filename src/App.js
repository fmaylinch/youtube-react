import React from 'react'
import VideoItem from './components/VideoItem'
import youtubeApiSample from './youtube-api-sample.json'

const App = () => {

  const videos = youtubeApiSample.items

  const videoItems = videos
    .filter(v => v.id.kind === "youtube#video")
    .map(v => <VideoItem key={v.id.videoId} videoId={v.id.videoId} title={v.snippet.title}/>)

  return (
    <div>{videoItems}</div>
  )
}

export default App
