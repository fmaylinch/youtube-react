//@flow

import React, { Component } from 'react'
import './SearchForm.css'


type Props = {
	placeholder: string,
	onSend: (value: string) => void
};

type State = {
	inputValue: string
};


/**
 * Form with an <input> and a <button> that
 * calls onSend(inputValue) when clicked
 */
class SearchForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      inputValue: ""
    }
  }

  sendValue(event: Event) {
    event.preventDefault();
    this.props.onSend(this.state.inputValue)
  }

  /** Updates the state.inputValue */
  updateInputValue(value: string) {
    this.setState({inputValue: value})
  }

  render() {

    return (
      <form className="search-form" onSubmit={(event: Event) => this.sendValue(event)}>
        <input
          value={this.state.inputValue}
          placeholder={this.props.placeholder}
          onChange={(event: SyntheticEvent<HTMLInputElement>) => this.updateInputValue(event.currentTarget.value)}
        />
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm
