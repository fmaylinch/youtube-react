import React, { Component } from 'react'
import VideoList from './components/VideoList'
import youtubeApiSample from './youtube-api-sample.json'

class App extends Component {

  constructor(props) {
    super(props)

    const videos = youtubeApiSample.items
      .filter(v => v.id.kind === "youtube#video")
      .map(v => ({id: v.id.videoId, title: v.snippet.title}))

    this.state = { videos: videos }
  }

  render() {

    return (
      <VideoList videos={this.state.videos}></VideoList>
    )
  }
}

export default App
