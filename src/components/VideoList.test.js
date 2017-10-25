//@flow

import React from 'react'
import { shallow } from 'enzyme'
import VideoList from '../components/VideoList'
import VideoItem from '../components/VideoItem'
import type { Video } from '../components/types.js'
import YoutubeUtil from '../util/YoutubeUtil'
import data from '../util/api-search-sample.json'

describe('VideoList', () => {

	const videos: Array<Video> = YoutubeUtil.extractVideos(data)

	it('renders component correctly', () => {

    const component = shallow(<VideoList videos={videos} loading={false} />)
		expect(component).toMatchSnapshot()
	})

	it('renders VideoItems correctly', () => {

    const component = shallow(<VideoList videos={videos} loading={false} />)
		const videoItems = component.find(VideoItem) // finds by component
		expect(videoItems.length).toEqual(videos.length);
	})


})
