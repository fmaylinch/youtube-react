//@flow

import React from 'react'
import { shallow } from 'enzyme'
import VideoItem from '../components/VideoItem'
import type { Video } from '../components/types.js'

describe('VideoItem', () => {

	const video: Video = {
		id: "4TPqUvy1vYU",
		image: {
			width: 320,
			height: 180,
			url: "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg"
		},
		title: "St. Vincent - New York (Official Video)"
	}

	it('renders component correctly', () => {

    const component = shallow(<VideoItem video={video}/>)
		expect(component).toMatchSnapshot()
	})

	it('renders image correctly', () => {

    const component = shallow(<VideoItem video={video}/>)
		const image = <img src={video.image.url} alt={video.title} />
		expect(component.contains(image)).toBeTruthy()
	})
})
