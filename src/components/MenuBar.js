import React from 'react'
import SearchForm from './SearchForm'

/**
 * Menu bar with a search form that
 * calls onSearch(value) when search is performed.
 */
const MenuBar = (props) => (

  <div>
    <SearchForm
      placeholder="Search videos"
      onSend={(value) => props.onSearch(value)} />
  </div>
)

export default MenuBar
