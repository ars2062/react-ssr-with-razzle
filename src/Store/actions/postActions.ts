export enum ActionTypes {
  GET_POSTS = "GET_POSTS",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAILURE = "GET_POSTS_FAILURE",
}
export enum ActionAsyncTypes {
  GET_POSTS = "GET_POSTS_ASYNC",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS_ASYNC",
  GET_POSTS_FAILURE = "GET_POSTS_FAILURE_ASYNC",
}

export const getPosts = () => ({
  type: ActionTypes.GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: ActionTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: ActionTypes.GET_POSTS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch({type: 'GET_POSTS'});

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
