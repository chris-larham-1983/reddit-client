import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <main>
          <Home />
          <Subreddits />
      </main>
    </>
  );
}

export default App;
