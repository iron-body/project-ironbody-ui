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
  const [timeExercise, setTimeExercise] = useState();
  const [burnedCalories, setBurnedCalories] = useState();


  const openAddExerciseForm = () => {
    setAddExerciseFormOpen(true);
  };


  const closeAddExerciseFormAndOpenSuccess = () => {
    setAddExerciseFormOpen(false);
    setAddExerciseSuccessOpen(true);
  };


  const closeAddExerciseForm = () => {
    setAddExerciseFormOpen(false);
    
  };


  const closeAddExerciseSuccess = () => {
    setAddExerciseSuccessOpen(false);
  };

const setTimeCalories=(timeExercise, burnedCalories )=>{
  setTimeExercise(((time*60-(timeExercise))/60).toFixed(1));
  setBurnedCalories(burnedCalories);

  }

  return (
    
   
    <Container key={exerciseName}>
      
      <NavCard>
        <TitleCard>WORKOUT</TitleCard>
        <RecomendedInfo>
          <ButtonItem onClick={openAddExerciseForm} >
            Start
            <ButtonIcon alt="" src="/project-ironbody-ui/next-array.svg" />
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
          setTimeCalories={setTimeCalories}
        />
      </BasicModalWindow>
      
      <BasicModalWindow active={addExerciseSuccessOpen} setActive={closeAddExerciseSuccess}>
        <AddExerciseSucces time={timeExercise} calories={burnedCalories} active={closeAddExerciseSuccess} />
      </BasicModalWindow>
      
      
      
      <ExerciseName>
      <ExerciseIcon alt="" src="/project-ironbody-ui/product-icon.svg"/> {exerciseName.charAt(0).toUpperCase() + exerciseName.slice(1)}
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
