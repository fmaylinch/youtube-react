//@flow

import React from 'react'
import SearchForm from './SearchForm'
import './MenuBar.css'


type Props = {
	onSearch: (value: string) => void
}


/**
 * Menu bar with a search form that
 * calls onSearch(value) when search is performed.
 */
const MenuBar = (props: Props) => (

  <div className="menu-bar">
    <img className="logo" src="https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg" alt="logo"/>
    <SearchForm
      placeholder="Search videos"
      onSend={(value) => props.onSearch(value)} />
  </div>
)

export default MenuBar
