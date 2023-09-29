import { useState } from 'react';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import { AddExerciseForm } from '../AddExerciseForm/AddExerciseForm';
import {
  Container,
  P,
  Button,
  TitleCard,
  NavCard,
  RecomendedMarker,
  RecomendedInfo,
  ButtonItem,
  ButtonIcon,
  ExerciseName,
  ExerciseParams,
  NameParams,
  ParamsValue,
  ExerciseIcon,
} from './ExercisesItem.styled';
import  AddExerciseSucces  from '../AddExerciseSuccess/AddExerciseSucces';



export const ExercisesItem = ({
  exerciseName,
  exercImg,
  calories,
  bodyPart,
  muscles,
  time,
  equipment,
  id
}) => {
  const [addExerciseFormOpen, setAddExerciseFormOpen] = useState(false);
  const [addExerciseSuccessOpen, setAddExerciseSuccessOpen] = useState(false);

  // Функція для відкриття модального вікна AddExerciseForm
  const openAddExerciseForm = () => {
    setAddExerciseFormOpen(true);
  };

  // Функція для закриття модального вікна AddExerciseForm та відкриття AddExerciseSuccess
  const closeAddExerciseFormAndOpenSuccess = () => {
    setAddExerciseFormOpen(false);
    setAddExerciseSuccessOpen(true);
  };

  // Функція для закриття модального вікна AddExerciseForm 
  const closeAddExerciseForm = () => {
    setAddExerciseFormOpen(false);
    
  };

  // Функція для закриття модального вікна AddExerciseSuccess
  const closeAddExerciseSuccess = () => {
    setAddExerciseSuccessOpen(false);
  };



  return (
    
   
    <Container key={exerciseName}>
      
      <NavCard>
        <TitleCard>WORKOUT</TitleCard>
        <RecomendedInfo>
          <ButtonItem onClick={openAddExerciseForm} >
            Start
            <ButtonIcon alt="" src="/next-array.svg" />
          </ButtonItem>
        </RecomendedInfo>
      </NavCard>

        <BasicModalWindow active={addExerciseFormOpen} setActive={closeAddExerciseForm}>
        <AddExerciseForm
          exercImg={`${exercImg}`}
          exerciseName={`${exerciseName}`}
          bodyPart={`${bodyPart}`}
          muscles={`${muscles}`}
          time={`${time}`}
          equipment={`${equipment}`}
          active={closeAddExerciseFormAndOpenSuccess}
          id={`${id}`}
          calories={calories}
          setActive={closeAddExerciseForm}
        />
      </BasicModalWindow>
      
      <BasicModalWindow active={addExerciseSuccessOpen} setActive={closeAddExerciseSuccess}>
        <AddExerciseSucces time={time} calories={calories} active={closeAddExerciseSuccess} />
      </BasicModalWindow>
      
      
      
      <ExerciseName>
      <ExerciseIcon alt="" src="/product-icon.svg"/> {exerciseName.charAt(0).toUpperCase() + exerciseName.slice(1)}
      </ExerciseName>
      <ExerciseParams>
        <NameParams>
          Burned calories: <ParamsValue>{calories}</ParamsValue>
        </NameParams>
        <NameParams>
          Body part: <ParamsValue>{bodyPart}</ParamsValue>
        </NameParams>
        <NameParams>
          Target: <ParamsValue>{muscles}</ParamsValue>{' '}
        </NameParams>
      </ExerciseParams>
    </Container>
  );
};
