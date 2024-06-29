import React, {useState} from 'react';
import StarRating from './components/star-rating'
import './App.css';

const App = () => {
  const [currentRating, setCurrentRating]=useState(3);
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  }
  return (
    <div>
    <h1>Star Rating</h1>
    <StarRating
    size={5}
    rating={currentRating}
    onChange={handleRatingChange}
    />
    <p>Current Rating:{currentRating}</p>
    </div>
  )
}

export default App
