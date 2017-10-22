//@flow

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoDetail'
import type { VideosObject } from './components/types'
import MenuBar from './components/MenuBar'
import axios from 'axios'
import apiKey from './youtube-api-key.json'

class App extends Component<void, VideosObject> {

  constructor(props: void) {
    super(props)

    this.state = {
      videos: []
    }
  }

  /** Searches videos using state.searchTerm */
  searchVideos(searchTerm: string) {

    if (apiKey.indexOf("get your Youtube API key") >= 0) {
      alert("Put a Youtube API key in youtube-api-key.json")
      return
    }

    console.log("Searching videos: " + searchTerm)

    const searchApi = "https://www.googleapis.com/youtube/v3/search"
    const queryTerm = encodeURIComponent(searchTerm)
    const url = searchApi + "?q=" + queryTerm + "&key=" + apiKey + "&maxResults=10&part=snippet"

    axios.get(url)
      .then((response) => {

        const videos = response.data.items
          .filter(v => v.id.kind === "youtube#video")
          .map(v => ({
            id: v.id.videoId,
            title: v.snippet.title,
            image: v.snippet.thumbnails.medium}))

        this.setState({ videos: videos })

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <div className="app">
        <MenuBar
          onSearch={(value: string) => this.searchVideos(value)} />

        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => {
              return <VideoList videos={this.state.videos}/>
            }} />
            <Route path='/detail/:id' component={VideoPlayer} />

            <Redirect from="*" to="/" />
            {/* remove the Redirect to display the "not found" route */}
            <Route component={() => <h1>Page not found, sorry!</h1>} />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
