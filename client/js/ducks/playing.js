import _ from 'lodash'
// Actions
const PLAY_TRACK   = 'PLAY_TRACK';
const PAUSE_TRACK   = 'PAUSE_TRACK';

const defaultState = {
  track: null,
  isPlaying: false,
  playlist: []
};

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
  case PLAY_TRACK: {
    return {
      track: action.payload.track,
      isPlaying: true,
      playlist: action.payload.playlist
    };
  }
  case PAUSE_TRACK: {
    return {
      ...state,
      isPlaying: false
    };
  }
  default: return state;
  }
}

// Action Creators
export function play(playlist, track) {
  return { type: PLAY_TRACK,
           payload: {
             track,
             playlist
           }
         };
}

export function pause() {
  return { type: PAUSE_TRACK
         };
}
