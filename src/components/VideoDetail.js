//@flow

import React, { Component } from 'react'
import type { ContextRouter } from 'react-router-dom'
import type { Video } from './types'
import axios from 'axios'
import apiKey from './../youtube-api-key.json'
import './VideoDetail.css'

type State = {
	video: Video,
	loading: boolean
};

class VideoDetail extends Component<ContextRouter, State> {

	constructor(props: ContextRouter) {
		super(props)

		this.state = {
			video: null,
			loading: true
		}
	}

	componentDidMount() {
		this.loadVideo(this.props.match.params.id)
	}

	loadVideo(videoId: string) {

		const videosApi = "https://www.googleapis.com/youtube/v3/videos"
		const url = videosApi + "?id=" + videoId + "&part=snippet&key=" + apiKey

		axios.get(url)
			.then((response) => {

		    const items = response.data.items
        if (items.length > 0) {
		      const v = items[0]
		      const video = {
						id: v.id.videoId,
						title: v.snippet.title,
						description: v.snippet.description,
						image: v.snippet.thumbnails.medium
		      }
		      this.setState({video: video, loading: false})
        }
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {

    let loadingOrData;

    if (this.state.loading) {
      loadingOrData = "loading data..."
    } else {
      loadingOrData = (
        <div>
          <h2>{this.state.video.title}</h2>
          <p dangerouslySetInnerHTML={{__html: linkify(this.state.video.description)}}/>
        </div>
      )
    }

		return (
      <div className="video-detail">
        <iframe title="video" src={`https://www.youtube.com/embed/` + this.props.match.params.id}
                frameBorder="0" allowFullScreen />
        <div>{loadingOrData}</div>
      </div>
		)
  }
}

// TODO: improve, maybe using https://www.npmjs.com/package/react-linkify
function linkify(text) {
	return text.replace(/((http|https):[^\s]+)/g, "<a target='_blank' href=\"$1\">$1</a>")
}

export default VideoDetail
