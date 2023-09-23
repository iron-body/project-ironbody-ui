import React from 'react';

import {
  Container,
  Img,
  ExercseBox,
  SmallBox,
  Name,
  Info,
  Btn,
  Tmr,
} from './AddExerciseForm.styled';
import { BtnTamplate } from '../Buttons/BtnExercises';
// import i from '../../../public'



export const AddExerciseForm = ({
  exercImg,
  exerciseName,
  bodyPart,
  muscles,
  time,
  equipment,
  active,
}) => {
  const closeModal = () => {
    console.log('Hello!');
  };

  return (
    <Container>
      <Img src={`${exercImg}`} alt="" width={270} height={226} />
      <Tmr>Timer</Tmr>
      <Btn onClick={() => active() } src="../../../public/ExitIcon.svg"/>
      
      
      <ExercseBoxInf
        name={exerciseName.charAt(0).toUpperCase() + exerciseName.slice(1)}
        bodyPart={bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
        target={muscles.charAt(0).toUpperCase() + muscles.slice(1)}
        time={time}
        equipment={equipment.charAt(0).toUpperCase() + equipment.slice(1)}
      />
      <BtnTamplate onClick={() => active()} name={'Add to diary'} />
    </Container>
  );
};

export const ExercseBoxInf = ({ name, bodyPart, time, target, equipment }) => {
  return (
    <ExercseBox>
      <SmallBox>
        <Name>Name</Name>
        <Info>{name}</Info>
      </SmallBox>

      <SmallBox width={160}>
        <Name>Body part</Name>
        <Info>{bodyPart}</Info>
      </SmallBox>

      <SmallBox>
        <Name>Time</Name>
        <Info>{time} minutes</Info>
      </SmallBox>

      <SmallBox>
        <Name>Target</Name>
        <Info>{target}</Info>
      </SmallBox>

      <SmallBox>
        <Name>Equipment</Name>
        <Info>{equipment}</Info>
      </SmallBox>
    </ExercseBox>
  );
};

export const Timer = () => {
  return (
    <>
      <p>Hello</p>
    </>
  );
};
