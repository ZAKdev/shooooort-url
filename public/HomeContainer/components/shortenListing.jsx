import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ShortenListing = props => (
  <section className="ShortenListing">
    {
      props.error &&
        <div className="ShortenListing-error">
          Please try again later :)
        </div>
    }
    <header>
      <h2>Previously shortened by you</h2>
      <span className="ShortenListing-clear" onClick={props.onClickClearHistory}>Clear history</span>
    </header>
    <table>
      <thead>
        <tr>
          <th>LINK</th>
          <th className="text-center">VISITS</th>
          <th className="text-center">LAST VISITED</th>
        </tr>
      </thead>
      <tbody>
        {
          props.shortens.map(short => (
            <tr key={short.shortcode}>
              <td onClick={() => props.onClickUrlActions(short)} className="ShortenGroup" width="40%">
                <a href={`https://impraise-shorty.herokuapp.com/${short.shortcode}`} target="_blank">
                  <div className="ShortenGroup-row">
                    <span className="ShortenGroup-shortLink">shooooort.com/
                      <span>{short.shortcode}</span>
                    </span>
                    <span className="ShortenGroup-copyLink">Click to open this link</span>
                  </div>
                  <span className="ShortenGroup-fullLink">{short.url}</span>
                </a>
              </td>
              <td width="20%" className="text-center">{short.visits}</td>
              <td width="40%" className="text-center">
                {
                  short.lastVisited !== "none" ?
                    moment(short.lastVisited).fromNow()
                  :
                    short.lastVisited
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </section>
)

ShortenListing.propTypes = {
  shortens: PropTypes.array.isRequired,
  onClickClearHistory: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ShortenListing