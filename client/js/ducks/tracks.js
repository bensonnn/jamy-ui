// Actions
const LATEST_LOAD   = 'latest/LOAD';
const POPULAR_LOAD   = 'popular/LOAD';

import config from '../../../server/config';

const defaultState = {
  latest: {},
  popular: {}
}

// Reducer
export default function reducer(state = defaultState, action = {}) {

  switch (action.type) {

  case LATEST_LOAD: {
    return {...state,
      latest: {
        total: action.payload.total,
        tracks: action.payload.tracks
      }
    }
  }

  case POPULAR_LOAD: {
    return {...state,
      popular: {
        total: action.payload.total,
        tracks: action.payload.tracks
      }
    }
  }

  default: return state;
  }

}

// Action Creators
export function loadLatest(p = 1 ) {
  return { type: LATEST_LOAD,
           api: config.latestRoute,
           query: {
             p
           },
           method: 'GET'
         };
}

export function loadPopular(p = 1) {
  return { type: POPULAR_LOAD,
           api: config.popularRoute,
           query: {
             p
           },
           method: 'GET'
         };
}
