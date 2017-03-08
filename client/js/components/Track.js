import _ from 'lodash';
import React, { PropTypes } from "react";
import FA from 'react-fontawesome'


import TrackAvatar from './TrackAvatar';

export default class Track extends React.Component {

  static propTypes = {
    track: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool
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
        { !this.props.isPlaying &&
          <FA name='play'size='2x'
              className={`right ${this.props.isActive ? 'active' : null}`}
              onClick={ () => { this.props.play(track) } } />
        }
        { this.props.isPlaying &&
          <FA name='pause active' size='2x' className='right' onClick={ this.props.pause } />
        }
      </div>
    );
  }
};
