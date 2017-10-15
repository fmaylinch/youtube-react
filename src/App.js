import React from 'react'
import VideoList from './components/VideoList'
import youtubeApiSample from './youtube-api-sample.json'

const App = () => {

  const videos = youtubeApiSample.items
    .filter(v => v.id.kind === "youtube#video")
    .map(v => ({id: v.id.videoId, title: v.snippet.title}))

  return (
    <VideoList videos={videos}></VideoList>
  )
}

export default App
