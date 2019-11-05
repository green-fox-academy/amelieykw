import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'

import {reducer as mainPostListReducer} from './MainPostList';
// import {reducer as rightSidebarReducer} from './RightSidebar';

// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf

const reducer = combineReducers({
  mainPostList: mainPostListReducer,
  // rightSidebar: rightSidebarReducer
});

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    // (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
  );

export default createStore(reducer, {}, storeEnhancers);


