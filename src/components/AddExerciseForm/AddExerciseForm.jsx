import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { fetchUserExercise } from '../../redux/operations';
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
import { AddExerciseSuccess } from '../AddExerciseSuccess/AddExerciseSuccess';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';

export const AddExerciseForm = ({
  exercImg,
  exerciseName,
  bodyPart,
  muscles,
  time,
  equipment,
  active,
  id,
  calories,
}) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.exercises);
  const [modalSuccessActive, setModalSuccessActive] = useState(false);

  
  const handleAddToDiaryClick = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // +1, оскільки місяці в JavaScript індексуються з 0
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const parsedTime = parseInt(time, 10);

    const requestData = {
      "exercise": `${id}`, // ID вправи
      "date": `${formattedDate}`, // Дата
      "time": parsedTime, // Час
      "calories": calories, // Калорії
    };

      //   dispatch(fetchUserExercise(requestData))
      // .unwrap()
      // .then(response => {
      //   // Handle successful response
      //   console.log('Success:', response)
            // })
      // .catch(err => {
      //   // Handle error
      //   console.error('Error:', err);
      // });
    console.log('post user exercise');

    active();
               };

           

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
      <BtnTamplate name={'Add to diary'} onClick={handleAddToDiaryClick} />
  
   

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
