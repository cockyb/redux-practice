import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// Middleware written as ES5 functions

// Outer function:
function logger(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here
      console.log(action.type, action.payload);
      return next(action);
    };
  };
}

const middlewareEnhancer = applyMiddleware(logger);

export default createStore(rootReducer, middlewareEnhancer);
