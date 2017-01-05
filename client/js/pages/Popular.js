import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadPopular } from '../ducks/tracks';

import TrackContainer from '../components/TrackContainer';

class PopularPage extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.loadPopular(1);
  }

  componentWillReceiveProps = (np) => {
    if (np.location.query.p !== this.props.location.query.p) {
      this.props.loadPopular(np.location.query.p);
    }
  }

  loadPage = (p) => {
    this.context.router.push({
      query: {
        p
      }
    });
  };


  render() {
    return (
			<div>
			  <div className="page">
			    <TrackContainer
            tracks={ this.props.tracks }
            pageNumber={ this.props.location.query.p || 1 }
            total={ this.props.total / 20 }
            loadPage={ this.loadPage } />
	      </div>
      </div>
    );
  };
};

function actions(dispatch) {
  return bindActionCreators({
    loadPopular
  }, dispatch);
};

function mapStateToProps(state, props) {
  return {
    tracks: state.tracks.popular.tracks,
    total: state.tracks.popular.total
  };
}

export default connect(mapStateToProps, actions)(PopularPage);
