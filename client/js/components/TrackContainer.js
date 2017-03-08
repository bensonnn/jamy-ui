import _ from 'lodash';
import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';

import Track from './Track';

import { play, pause } from '../ducks/playing';

class TrackContainer extends React.Component {

  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    track: PropTypes.object,
    isPlaying: PropTypes.bool
  };

  play = (track) => {
    this.props.play(this.props.tracks, track);
  }

  handlePageClick = (page) => {
    this.props.loadPage(page.selected + 1);
  }

  render() {
    if (_.isEmpty(this.props.tracks)) return <div>Loading</div>;
    return (
      <div className="track-container">
          { this.props.tracks.map((track) => {
            return <Track track={ track }
                          play={ this.play }
                          pause={ this.props.pause }
                          isPlaying={ this.props.isPlaying && _.get(this.props, 'track.id') === track.id } key={ track.id }
                          isActive={ _.get(this.props, 'track.id') === track.id }
                          />;
          }) }

          <ReactPaginate
            pageCount={this.props.total }
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            forcePage={ parseInt(this.props.pageNumber,10) - 1 }
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"} />
      </div>
    );
  }
};

function actions(dispatch) {
  return bindActionCreators({
    play,
    pause
  }, dispatch);
};

function mapStateToProps(state, props) {
  return {
    track: state.playing.track,
    isPlaying: state.playing.isPlaying
  };
}

export default connect(mapStateToProps, actions)(TrackContainer);
