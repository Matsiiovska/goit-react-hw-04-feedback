
import { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statictics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (state) => {
    switch (state) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
        case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
  const feedbackValues =  [good, neutral, bad ];
  const totalFeedback = feedbackValues.reduce((total, value) => total + value, 0);
  return totalFeedback;
  }
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  }
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = countTotalFeedback();
   return (
      <Container>
        <Section title="Please leave feedback">
<FeedbackOptions
          options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>  
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />) : (
            <Notification message="There is no feedback" />)}
        </Section> 
      </Container>
    );
  }
