import React, { useState } from 'react';
import './App.css';

function App() {
  const [meal, setMeal] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const handleInput = (event) => {
    setMeal(event.target.value);
  };

  const analyzeNutrition = async () => {
    // Send meal data to backend API for analysis
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ meal }),
    });
    const data = await response.json();
    setNutritionData(data);
  };

  return (
    <div className="App">
      <h1>Nutrition Tracker</h1>
      <textarea
        rows="5"
        cols="50"
        value={meal}
        onChange={handleInput}
        placeholder="Enter your meal here..."
      />
      <button onClick={analyzeNutrition}>Analyze</button>
      {nutritionData && (
        <div className="nutrition-info">
          <h2>Nutritional Analysis:</h2>
          <p>Calories: {nutritionData.calories}</p>
          <p>Protein: {nutritionData.protein}</p>
          <p>Carbohydrates: {nutritionData.carbohydrates}</p>
          <p>Fat: {nutritionData.fat}</p>
        </div>
      )}
    </div>
  );
}

export default App;
