import { Component } from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback';
import { Statistics } from './statistics/statistics';
import { Notification } from './notification/notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (feedbackType) => {
      this.setState((prevState) => ({
          [feedbackType]: prevState[feedbackType] + 1
      }));
  }

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage = () => {
    return Math.round(this.state.good / this.total() * 100) || 0;
  }

  render() {
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
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
          {this.total()
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()} />
            : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
};
