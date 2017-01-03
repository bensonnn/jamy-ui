import _ from 'lodash';
import React, { PropTypes } from "react";

import TrackAvatar from './TrackAvatar';

export default class Track extends React.Component {

  static propTypes = {
    track: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired
  };

  render() {
    let track = this.props.track;
    return (
      <div className="track">
        <TrackAvatar track={ track } />
        <div>
          <span className="username">{ _.get(track, 'user.username') } </span>
          <br/>
          <span className="title">{ track.title }</span>
        </div>
        <button className="play" onClick={ () => { this.props.play(track) } }>Play</button>
      </div>
    );
  }
};
