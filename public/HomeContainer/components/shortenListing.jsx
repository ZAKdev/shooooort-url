import React from 'react';
import PropTypes from 'prop-types';

const ShortenListing = props => (
  <section className="ShortenListing">
    <header>
      <h2>Previously shortened by you</h2>
      <span>Clear history</span>
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
              <td>
                <span className="ShortenListing-shortLink">{short.shortcode}</span>
                <span className="ShortenListing-fullLink">{short.url}</span>
              </td>
              <td>1140</td>
              <td>2 days ago</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
)

export default ShortenListing