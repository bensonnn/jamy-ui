import { combineReducers } from 'redux';

import tracks from './tracks';
import playing from './playing';

export default combineReducers({
  tracks,
  playing
});
