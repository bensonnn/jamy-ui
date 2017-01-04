import _ from 'lodash'
// Actions
const PLAY_TRACK   = 'PLAY_TRACK';
const PAUSE_TRACK   = 'PAUSE_TRACK';
const NEXT_TRACK   = 'NEXT_TRACK';
const PREV_TRACK   = 'PREV_TRACK';

const defaultState = {
  track: null,
  isPlaying: false,
  playlist: []
};

// Reducer
export default function reducer(state = defaultState, action = {}) {
  console.log(action.type);
  switch (action.type) {
  case PLAY_TRACK: {
    return {
      track: action.payload.track || state.track,
      isPlaying: true,
      playlist: action.payload.playlist || state.playlist
    };
  }

  case PAUSE_TRACK: {
    return {
      ...state,
      isPlaying: false
    };
  }

  case NEXT_TRACK: {
    let index = _.findIndex(state.playlist, { id: state.track.id });

    if (index >= 0 && index + 1 !== state.playlist.length) {
      return {
        ...state,
        isPlaying: true,
        track: state.playlist[index + 1]
      }
    } else {
      return {
        ...state,
        isPlaying: false
      }
    }
  }

  case PREV_TRACK: {
    let index = _.findIndex(state.playlist, { id: state.track.id });

    if (index <= 0) {
      return {
        ...state,
        isPlaying: false
      }
    } else {
      return {
        ...state,
        isPlaying: true,
        track: state.playlist[index - 1]
      }
    }
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

export function next() {
  return { type: NEXT_TRACK
         };
}

export function prev() {
  return { type: PREV_TRACK
         };
}
