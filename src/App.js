import React, { Component } from 'react'
import VideoList from './components/VideoList'
import axios from 'axios'
import apiKey from './youtube-api-key.json'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { videos: [] }

    const searchApi = "https://www.googleapis.com/youtube/v3/search"
    const queryTerm = encodeURIComponent("st vincent")
    const url = searchApi + "?q=" + queryTerm + "&key=" + apiKey + "&maxResults=10&part=snippet"

    axios.get(url)
      .then((response) => {

        const videos = response.data.items
          .filter(v => v.id.kind === "youtube#video")
          .map(v => ({id: v.id.videoId, title: v.snippet.title}))

        this.setState({ videos: videos })

      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {

    return (
      <VideoList videos={this.state.videos}></VideoList>
    )
  }
}

export default App
