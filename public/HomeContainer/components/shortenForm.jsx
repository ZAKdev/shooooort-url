import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShortenForm extends Component {
  constructor(props) {
    super(props)
  }

  typingLink({ urlField, submit }) {
    if(urlField.value.length > 0) {
      submit.classList.add("typing")
      submit.removeAttribute("disabled")
    } else {
      submit.classList.remove("typing")
      submit.addAttribute("disabled")
    }
  }

  render() {
    return (
      <section className="ShortenForm">
        <form>
          <input
            type="text"
            className="ShortenForm-field"
            placeholder="Paste the link you want to shorten here"
            ref="urlField"
            onChange={e => this.typingLink(this.refs)}
          />
          <button
            type="submit"
            className="ShortenForm-button"
            disabled="disabled"
            ref="submit">
            Shorten this link
          </button>
        </form>
      </section>
    )
  }
}