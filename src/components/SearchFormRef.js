//@flow

import React, { Component } from 'react'
import './SearchForm.css'


type Props = {
	placeholder: string,
	onSend: (value: string) => void
};

/**
 * Form with an <input> and a <button> that
 * calls onSend(inputValue) when clicked.
 *
 * This class uses refs to get the form fields (just aninput here)
 */
class SearchFormRef extends Component<Props, void> {

	form: ?HTMLFormElement

	constructor(props: Props) {
		super(props)

		this.form = null // This is not necessary
	}

	sendValue() {
		// https://flow.org/en/docs/types/maybe/
		// I could use (this.form != null) but ESLint complains
		if (this.form instanceof HTMLFormElement) {
			const input = this.form.querySelector("[name=text]")
			if (input instanceof HTMLInputElement) {
				this.props.onSend(input.value)
			}
		}
	}

	render() {

		return (
			// Store form using refs -- https://flow.org/en/docs/react/refs/
			<form className="search-form"
						onSubmit={(event: Event) => {event.preventDefault(); this.sendValue()}}
						ref={ form => this.form = form }>
				<input name="text" placeholder={this.props.placeholder}  />
				<button>Search</button>
			</form>
		)
	}
}

export default SearchFormRef
