import { Component } from 'react';
import {
  TimerContainer,
  TimerCircle,
  TimerText,
  TimerButton,
} from './Timer.styled';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timeRemaining: 180,
    }; // Додав закриваючу фігурну дужку тут
    this.timerInterval = null;
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  toggleTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerInterval);
    } else {
      this.timerInterval = setInterval(() => {
        if (this.state.timeRemaining > 0) {
          this.setState(prevState => ({
            timeRemaining: prevState.timeRemaining - 1,
          }));
        } else {
          clearInterval(this.timerInterval);
          this.setState({ isRunning: false });
        }
      }, 1000);
    }
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
    }));
  };

  calculateRingDashArray = () => {
    const { timeRemaining } = this.state;
    const circumference = 100 * 2 * Math.PI;
    const remainingPercentage = (timeRemaining / 180) * 100;
    const dashArray = (circumference * remainingPercentage) / 100;
    return `${dashArray} ${circumference}`;
  };

  render() {
    return (
      <TimerContainer>
        <svg width="200" height="200">
          <TimerCircle
            cx="100"
            cy="100"
            r="90"
            stroke="#ccc"
            strokeWidth="15"
            fill="transparent"
          />
          <TimerCircle
            cx="100"
            cy="100"
            r="90"
            stroke="red"
            strokeWidth="15"
            fill="transparent"
            strokeDasharray={this.calculateRingDashArray()}
            strokeDashoffset="0"
          />
        </svg>
        <TimerText>{this.formatTime(this.state.timeRemaining)}</TimerText>
        <TimerButton onClick={this.toggleTimer}>
          {this.state.isRunning ? 'PAUSE' : 'PLAY'}
        </TimerButton>
      </TimerContainer>
    );
  }
}

export default Timer;
