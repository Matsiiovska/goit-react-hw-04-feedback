import React from 'react';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    ); 
}
