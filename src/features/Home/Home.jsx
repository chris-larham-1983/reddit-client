import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedList } from 'react-animated-list';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import getRandomNumber from '../../utils/getRandomNumber';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments
} from '../../store/redditSlice';
import './Home.css';
import Header from '../Header/Header';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if(selectedSubreddit !== '') {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [selectedSubreddit]);

  useEffect(() => { //whenever the 'posts' array changes, there is no error in state, and there is one or more posts in state, scroll the 'View Popular Subreddits' <button> into view
      if(!error && posts.length !== 0) {
          document.getElementsByTagName("BUTTON")[0].scrollIntoView();
      }
  }, [selectedSubreddit, posts.length]);

  const onToggleComments = (index) => {
      return (permalink) => {
          dispatch(fetchComments(index, permalink));
      };
  };

  if(isLoading) {
    return (
      <AnimatedList animation="zoom">
        {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
      </AnimatedList>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </button>
      </div>
    );
  }

  return (
    <>
      <nav>
        <button
            type='button'
            onClick={()=> {
              document.getElementsByTagName("H2")[0].scrollIntoView();
            }}>
          <span><u>View Popular Subreddits</u></span>
        </button>
      </nav>
        <h1><span className='headingText'>Posts for <span className='topic'>{selectedSubreddit}</span></span></h1>
      <Header selectedSubreddit={selectedSubreddit} />
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );
};

export default Home;
