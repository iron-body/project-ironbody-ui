import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {
  Container,
  Name,
  BurnedText,
  ButtonBlock,
  Button,
  BtnImg,
  BurnedBlock,
  BurnedQuantity,
} from './Timer.styled';

const CircleTimer = ({ initialTime, onStop, calories }) => {
  const initialTimeNumber = parseInt(initialTime, 10) * 60;

  const [time, setTime] = useState(initialTimeNumber);
  const [isRunning, setIsRunning] = useState(false);
  const [burnedCalories, setBurnedCalories] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (time === 0) {
          setIsRunning(false);
          onStop(0);
        } else {
          setTime(time - 1);

          const elapsedMinutes = initialTimeNumber - time;
          const caloriesBurned = Math.floor(
            (elapsedMinutes / initialTimeNumber) * calories,
          );
          setBurnedCalories(caloriesBurned);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, onStop, calories]);

  useEffect(() => {
    const caloriesInterval = setInterval(() => {
      const elapsedMinutes = initialTimeNumber - time;
      const caloriesBurned = Math.floor(
        (elapsedMinutes / initialTimeNumber) * calories,
      );
      setBurnedCalories(caloriesBurned);
    }, 4000);

    return () => clearInterval(caloriesInterval); // Clear the interval on unmount
  }, [time, initialTimeNumber, calories]);

  // function setInfoBurned(){
  //   const caloriesInterval = setInterval(() => {
  //     console.log(burnedCalories);

  //       }, 4000);
  // }

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    onStop(time, burnedCalories);
  };

  return (
    <Container>
      <Name className="time">Time</Name>
      <CountdownCircleTimer
        rotation="counterclockwise"
        size={124}
        isPlaying={isRunning}
        duration={initialTime * 60}
        colors={'#E6533C'}
        colorsTime={'#E6533C'}
        strokeWidth={4}
        trailColor={'rgba(239, 237, 232, 0.1)'}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          const formattedMinutes = String(minutes).padStart(2, '0');
          const formattedSeconds = String(seconds).padStart(2, '0');

          const textStyle = {
            fontSize: '16px',
            color: '#EFEDE8',
          };

          return (
            <div style={textStyle}>
              {' '}
              {formattedMinutes}:{formattedSeconds}
            </div>
          );
        }}
      </CountdownCircleTimer>

      <ButtonBlock className="controls">
        {!isRunning ? (
          <Button onClick={startTimer}>
            <BtnImg src="/project-ironbody-ui/play.svg" />
          </Button>
        ) : (
          <Button onClick={stopTimer}>
            <BtnImg src="/project-ironbody-ui/pause-square.svg" />
          </Button>
        )}
      </ButtonBlock>
      <BurnedBlock>
        <BurnedText>Burned calories:</BurnedText>
        <BurnedQuantity>{burnedCalories}</BurnedQuantity>
      </BurnedBlock>
    </Container>
  );
};

export default CircleTimer;
