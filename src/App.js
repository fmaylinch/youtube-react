import React from 'react'
import VideoItem from './components/VideoItem'

const App = function() {

  const videos = [
    { videoId: "6KxtgS2lU94", title: "Björk - Army Of Me" },
    { videoId: "1uYWYWPc9HU", title: "Radiohead - Karma Police" },
    { videoId: "3mbBbFH9fAg", title: "Soundgarden - Black Hole Sun" }
  ]

  const videoItems = videos.map(function(v) {
    return <VideoItem key={v.videoId} videoId={v.videoId} title={v.title}/>
  })

  return (
    <div>{videoItems}</div>
  )
}

export default App
