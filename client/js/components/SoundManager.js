import React, { PropTypes } from "react";
import _ from 'lodash';
import soundManger from '../../../node_modules/soundmanager2/script/soundmanager2-nodebug-jsmin';

import config from '../../../server/config';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SoundManager extends React.Component {

  static propTypes = {
    track: PropTypes.object,
    isPlaying: PropTypes.bool.isRequired,
    playlist: PropTypes.arrayOf(PropTypes.object)
  };

  onready = () => {
    this.soundManager = soundManager;
  }

  componentWillMount = () => {
    soundManager.onready(this.onready);
  }

  createSound = (track) => {
    this.soundManager.createSound({
      id: track.id,
      url: `${track.stream_url}?client_id=${config.soundcloud}`,
      autoLoad: true,
      autoPlay: false,
      onload: function() {
      },
      volume: 50
    }).play();
  }

  componentWillUpdate(np){
    console.log(_.get(this, 'props.track.id'),  _.get(np, 'track.id'));
    if (!this.soundManager) return;
    if (np.isPlaying && !_.get(this, 'props.track.id')) {
      console.log('play new track');
      this.createSound(np.track);
      return;
    }

    if (np.isPlaying && _.get(this, 'props.track.id') === _.get(np, 'track.id')) {
      console.log('resuming');
      this.soundManager.resume(np.track.id);
    }

    if (!np.isPlaying && _.get(this, 'props.track.id') === _.get(np, 'track.id')) {
      console.log('pausing track');
      this.soundManager.pause(np.track.id);
    }

    if (_.get(this, 'props.track.id') !== _.get(np, 'track.id')) {
      console.log('new track!', np.track);
      soundManager.destroySound(this.props.track.id);
      this.createSound(np.track)
    }
  }



  render() {
    return null
  }
}

// function actions(dispatch) {
//   return bindActionCreators({
//     loadLatest
//   }, dispatch);
// };

function mapStateToProps(state, props) {
  return {
    track: state.playing.track,
    isPlaying: state.playing.isPlaying,
    playlist: state.playing.playlist
  };
}

export default connect(mapStateToProps)(SoundManager);
