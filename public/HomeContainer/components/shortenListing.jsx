import React from 'react';
import PropTypes from 'prop-types';

const ShortenListing = props => (
  <section className="ShortenListing">
    <header>
      <h2>Previously shortened by you</h2>
      <span className="ShortenListing-clear">Clear history</span>
    </header>
    <table>
      <thead>
        <tr>
          <th>LINK</th>
          <th>VISITS</th>
          <th>LAST VISITED</th>
        </tr>
      </thead>
      <tbody>
        {
          props.shortens.map(short => (
            <tr>
              <td onClick={e => props.onClickUrlActions(short)}>
                <span className="ShortenListing-shortLink">shooooort.com/
                  <span>{short.shortcode}</span>
                </span>
                <span className="ShortenListing-fullLink">{short.url}</span>
              </td>
              <td>{short.visits}</td>
              <td>{short.lastVisited}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
)

export default ShortenListing