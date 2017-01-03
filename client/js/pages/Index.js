import React, { Proptypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadLatest } from '../ducks/tracks';

import TrackContainer from '../components/TrackContainer';

class IndexPage extends React.Component {

  componentWillMount() {
    this.props.loadLatest();
  }
  render() {
    return (
			<div>
			  <div className="row">
			    <TrackContainer tracks={ this.props.tracks } />
	      </div>
      </div>
    );
  };
};

function actions(dispatch) {
  return bindActionCreators({
    loadLatest
  }, dispatch);
};

function mapStateToProps(state, props) {
  return {
    tracks: state.tracks.latest
  };
}

export default connect(mapStateToProps, actions)(IndexPage);
