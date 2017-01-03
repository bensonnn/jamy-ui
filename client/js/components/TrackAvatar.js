import React, { PropTypes } from "react";
import _ from 'lodash';

export default class TrackAvatar extends React.Component {

  static propTypes = {
    track: PropTypes.object.isRequired
  };

  render() {

    let track = this.props.track;

    let avatar = _.get(track, 'artwork_url')
    if (!avatar) avatar = _.get(track, 'user.avatar_url');
    // if (!avatar) =
    return (
      <div className="avatar">
        <img src={ avatar } />
      </div>
    );
  }
};
