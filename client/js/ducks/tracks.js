// Actions
const LATEST_LOAD   = 'latest/LOAD';
const POPULAR_LOAD   = 'popular/LOAD';

import config from '../../../server/config';

const defaultState = {
  latest: [],
  popular: []
}

// Reducer
export default function reducer(state = defaultState, action = {}) {

  switch (action.type) {
    case LATEST_LOAD: {
      return {...state, latest: action.payload.tracks};
    }
  default: return state;
  }
}

// Action Creators
export function loadLatest() {
  return { type: LATEST_LOAD,
           api: config.latestRoute,
           method: 'GET'
         };
}

export function loadPopular() {
  return { type: POPULAR_LOAD };
}
