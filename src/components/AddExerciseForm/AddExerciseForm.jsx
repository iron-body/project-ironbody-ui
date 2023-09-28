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
  ExitBtn,
} from './AddExerciseForm.styled';
import { BtnTamplate } from '../Buttons/BtnExercises';

export const AddExerciseForm = ({
  exercImg,
  exerciseName,
  bodyPart,
  muscles,
  time,
  equipment,
  active,
}) => {
  return (
    <Container>
      <Img src={`${exercImg}`} alt="" width={270} height={226} />
      <ExitBtn onClick={() => active()}>
        <Btn src="/project-ironbody-ui/ExitIcon.svg" />
      </ExitBtn>
      <Tmr> Timer </Tmr>
      <ExercseBoxInf
        name={exerciseName.charAt(0).toUpperCase() + exerciseName.slice(1)}
        bodyPart={bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
        target={muscles.charAt(0).toUpperCase() + muscles.slice(1)}
        time={time}
        equipment={equipment.charAt(0).toUpperCase() + equipment.slice(1)}
      />
      <BtnTamplate name={'Add to diary'} />
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
