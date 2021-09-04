import { put, takeEvery } from "@redux-saga/core/effects";
import { ActionAsyncTypes, ActionTypes } from "../actions/postActions";

function* getPostsAsync() {
  yield put({ type: ActionAsyncTypes.GET_POSTS });
}

export function* watchGetPosts() {
  yield takeEvery(ActionTypes.GET_POSTS, getPostsAsync);
}

function* getPostsSuccessAsync(action) {
  yield put({
    type: ActionAsyncTypes.GET_POSTS_SUCCESS,
    payload: action.payload,
  });
}

export function* watchGetPostsSuccess() {
  yield takeEvery(ActionTypes.GET_POSTS_SUCCESS, getPostsSuccessAsync);
}

function* getPostsFailureAsync() {
  yield put({ type: ActionAsyncTypes.GET_POSTS_FAILURE });
}

export function* watchGetPostsFailure() {
  yield takeEvery(ActionTypes.GET_POSTS_FAILURE, getPostsFailureAsync);
}
