import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';


const App = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [minRating, setMinRating] = useState('');
  const [withReviews, setWithReviews] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (minRating) params.append('min_rating', minRating);
    if (withReviews) params.append('with_reviews', true);
    if (keyword) params.append('keywords', keyword);

    fetch(`http://localhost:3000/food_trucks?${params.toString()}`)
      .then(response => response.json())
      .then(data => setFoodTrucks(data))
      .catch(error => console.error('Error fetching food trucks:', error));
  }, [minRating, withReviews, keyword]);

  return (
    <div>
      <div>
        <label>
          Min Rating:
          <select value={minRating} onChange={e => setMinRating(e.target.value)}>
            <option value="">All</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <label>
          With Reviews:
          <input
            type="checkbox"
            checked={withReviews}
            onChange={e => setWithReviews(e.target.checked)}
          />
        </label>
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search for food items..."
          />
        </label>
      </div>
      <MapComponent foodTrucks={foodTrucks} />
    </div>
  );
};

export default App;


