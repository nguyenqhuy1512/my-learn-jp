import React from 'react';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="button-group">
        <button className="big-btn">Button 1</button>
        <button className="big-btn">Button 2</button>
        <button className="big-btn">Button 3</button>
      </div>
    </div>
  );
};

export default Home;
