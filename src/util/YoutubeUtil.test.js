
import YoutubeUtil from './YoutubeUtil'
import data from './api-search-sample.json'

describe('YoutubeUtil', () => {

  it('extracts videos correctly', () => {

    const videos = YoutubeUtil.extractVideos(data)

    expect(videos.length).toEqual(9)

    const expectedFirstVideo = {
      id: "4TPqUvy1vYU",
      image: {
        width: 320,
        height: 180,
        url: "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg"
      },
      title: "St. Vincent - New York (Official Video)"
    }

    expect(videos[0]).toEqual(expectedFirstVideo)
  })
})
