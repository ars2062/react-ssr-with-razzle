import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../Store/actions/postActions";
import { Post } from "../Components/Post";

const PostsPage = ({ dispatch, loading, posts, hasError }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasError) return <p>Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};
const mapStateToProps = (state) => state.posts;

export default connect(mapStateToProps)(PostsPage);