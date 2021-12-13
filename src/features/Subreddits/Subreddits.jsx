import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import './Subreddits.css';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit
} from '../../store/redditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, []);

  return (
    <Card className="subreddit-card">
        <h2><span>Popular Subreddits</span></h2>
        <button
            className='blockDisplay'
            onClick={()=> {
                document.getElementsByTagName("BUTTON")[0].scrollIntoView();
            }}>View Posts for <span>{selectedSubreddit}</span></button>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => {
                  dispatch(setSelectedSubreddit(subreddit.url));
                  localStorage.setItem("selectedSubreddit", subreddit.url);
              }}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://avatars.dicebear.com/api/avataaars/${subreddit.display_name}.svg`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
        <li
            key='coding'
            className={`${selectedSubreddit === '/r/Coding/' && `selected-subreddit`}`}
        >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/Coding/'));
                      localStorage.setItem("selectedSubreddit", "/r/Coding/");
                  }}
                  className='topic1'
              >
                  <span>Coding Discussion</span>
              </button>
        </li>
        <li
            key='conspiracy'
            className={`${selectedSubreddit === '/r/Conspiracy/' && `selected-subreddit`}`}
        >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/Conspiracy/'));
                      localStorage.setItem("selectedSubreddit", "/r/Conspiracy/");
                  }}
                  className='topic2'
              >
                  <span>Conspiracy Theories</span>
              </button>
        </li>
          <li
              key='coronavirus'
              className={`${selectedSubreddit === '/r/Coronavirus/' && `selected-subreddit`}`}
          >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/Coronavirus/'));
                      localStorage.setItem("selectedSubreddit", "/r/Coronavirus/");
                  }}
                  className='topic3'
              >
                  <span>Coronavirus Discussion</span>
              </button>
          </li>
          <li
            key='debateEvolution'
            className={`${selectedSubreddit === '/r/DebateEvolution/' && `selected-subreddit`}`}
          >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/DebateEvolution/'));
                      localStorage.setItem("selectedSubreddit", "/r/DebateEvolution/")
                  }}
                  className='topic4'
              >
                  <span>Evolutionary Debate</span>
              </button>
          </li>
          <li
              key='debateReligion'
              className={`${selectedSubreddit === '/r/DebateReligion/' && `selected-subreddit`}`}
          >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/DebateReligion/'));
                      localStorage.setItem("selectedSubreddit", "/r/DebateReligion/");
                  }}
                  className='topic5'
              >
                  <span>Religious Debate</span>
              </button>
          </li>
          <li
              key='soccer'
              className={`${selectedSubreddit === '/r/Soccer/' && `selected-subreddit`}`}
          >
              <button
                  type="button"
                  onClick={() => {
                      dispatch(setSelectedSubreddit('/r/Soccer/'));
                      localStorage.setItem("selectedSubreddit", "/r/Soccer/");
                  }}
                  className='topic6'
              >
                  <span>Soccer Chat</span>
              </button>
          </li>
      </ul>
    </Card>
  );
};

export default Subreddits;
