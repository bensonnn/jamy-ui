import _ from 'lodash';
import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FA from 'react-fontawesome'

import { play, pause, next, prev } from '../ducks/playing';

class Controls extends React.Component {

  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    track: PropTypes.object,
    isPlaying: PropTypes.boolean
  };

  play = () => {
    this.props.play();
  }

  render() {
    if (_.isEmpty(this.props.playlist)) return null;
    return (
      <div className="controls container">
          <FA name='backward' onClick={ this.props.prev } size='2x' />
          { this.props.isPlaying &&
            <FA name='pause' onClick={ this.props.pause } size='2x' />
          }
          { !this.props.isPlaying &&
            <FA name='play' onClick={ this.play } size='2x' />
          }
          <FA name='forward' onClick={ this.props.next } size='2x' />

          <div><b>{ this.props.track.user.username }</b> - { this.props.track.title }</div>
      </div>
    );
  }
};

function actions(dispatch) {
  return bindActionCreators({
    play,
    pause,
    next,
    prev
  }, dispatch);
};

function mapStateToProps(state, props) {
  return {
    playlist: state.playing.playlist,
    track: state.playing.track,
    isPlaying: state.playing.isPlaying
  };
}

export default connect(mapStateToProps, actions)(Controls);
