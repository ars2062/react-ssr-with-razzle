import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import {
  watchGetPosts,
  watchGetPostsFailure,
  watchGetPostsSuccess,
} from "./sagas/post.saga";

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(watchGetPosts);
  sagaMiddleware.run(watchGetPostsFailure);
  sagaMiddleware.run(watchGetPostsSuccess);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
