import _ from 'lodash';
import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Track from './Track';

import { play } from '../ducks/playing';

class TrackContainer extends React.Component {

  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object)
  };

  play = (track) => {
    this.props.play(this.props.tracks, track);
  }

  render() {
    if (_.isEmpty(this.props.tracks)) return <div>Loading</div>;
    return (
      <div className="track-container">
          { this.props.tracks.map((track) => {
            return <Track track={ track } play={ this.play } key={ track.id } />;
          }) }
      </div>
    );
  }
};

function actions(dispatch) {
  return bindActionCreators({
    play
  }, dispatch);
};

// function mapStateToProps(state, props) {
//   return {
//     track: state.playing.track,
//     isPlaying: state.playing.isPlaying,
//     playlist: state.playing.playlist
//   };
// }

export default connect(null, actions)(TrackContainer);
