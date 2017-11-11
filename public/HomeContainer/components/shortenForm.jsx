import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShortenForm extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    submitShorten: PropTypes.func.isRequired,
  }

  typingLink({ urlField, submit }) {
    if(urlField.value.length > 0) {
      submit.classList.add("typing")
      submit.removeAttribute("disabled", "disabled")
    } else {
      submit.classList.remove("typing")
      submit.setAttribute("disabled", "disabled")
    }
  }

  submitUrl(e, { refs, props }) {
    e.preventDefault();
    return props.submitShorten(refs.urlField.value)
  }

  render() {
    return (
      <section className="ShortenForm">
        <form onSubmit={e => this.submitUrl(e, this)}>
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