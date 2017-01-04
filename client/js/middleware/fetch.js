import request from 'superagent';

export default function fetch(store) {
  return (next) => (action) => {

    if (!action.api) return next(action);
    return new Promise((res, rej) => {
      request(action.method, action.api)
      .query(action.query)
      .end((err, res) => {
        if (err) console.error(err);
        next({...action, payload: res.body});
      });
    })
  };
};
