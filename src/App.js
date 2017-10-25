//@flow

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import type { ContextRouter } from 'react-router-dom'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoDetail'
import type { Video } from './components/types'
import MenuBar from './components/MenuBar'
import YoutubeUtil from './util/YoutubeUtil'
import axios from 'axios'
import apiKey from './youtube-api-key.json'

type State = {
  videos: Array<Video>,
  loading: boolean
};

class App extends Component<void, State> {

  constructor(props: void) {
    super(props)

    this.state = {
      videos: [],
      loading: false
    }
  }

  /** Searches videos using state.searchTerm */
  searchVideos(searchTerm: string) {

    if (apiKey.indexOf("get your Youtube API key") >= 0) {
      alert("Put a Youtube API key in youtube-api-key.json")
      return
    }

    console.log("Searching videos: " + searchTerm)
    this.setState({ loading: true })

    const searchApi = "https://www.googleapis.com/youtube/v3/search"
    const queryTerm = encodeURIComponent(searchTerm)
    const url = searchApi + "?q=" + queryTerm + "&key=" + apiKey + "&maxResults=10&part=snippet"

    axios.get(url)
      .then((response) => {

        const videos = YoutubeUtil.extractVideos(response.data)

				console.log(`Displaying ${videos.length} videos`)

				this.setState({ videos: videos, loading: false })

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <div className="app">
        <BrowserRouter>
        <div>

          <Route render={(props: ContextRouter) => (
            <MenuBar
              onSearch={(value: string) => {
                this.searchVideos(value)
                props.history.push('/')
							}}
            />
          )}/>

          <Switch>

            <Route exact path='/' render={() => (
                <VideoList videos={this.state.videos} loading={this.state.loading} />
            )} />

            <Route path='/detail/:id' component={VideoPlayer} />

            <Redirect from="*" to="/" />
            {/* remove the Redirect to display the "not found" route */}
            <Route component={() => <h1>Page not found, sorry!</h1>} />

          </Switch>

        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
