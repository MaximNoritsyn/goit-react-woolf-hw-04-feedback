import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';
import { useState } from "react";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setOptions = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad
  }

  const onLeaveFeedback = (feedbackType) => {
    setOptions[feedbackType]((prev) => prev + 1);
  }

  const total = () => {
    return good + neutral + bad;
  }

  const positivePercentage = () => {
    return Math.round(good / total() * 100) || 0;
  }
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f0f0f0'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={setOptions} onLeaveFeedback={onLeaveFeedback} />
        {total()
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()} />
          : <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
};
