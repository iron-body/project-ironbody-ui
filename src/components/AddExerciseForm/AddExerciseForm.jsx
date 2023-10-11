import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { fetchUserExercise } from '../../redux/exercises/operations';
import CircleTimer from '../Timer/Timer'
import {
  Container,
  Img,
  ExercseBox,
  SmallBox,
  Name,
  Info,
  Btn,
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
  id,
  calories,
  setActive,
  setTimeCalories
}) => {
  const dispatch = useDispatch();
  const [timeExercise, setTimeExercise] = useState();
  const [burnedCalories, setBurnedCalories] = useState();
  const { loading, error } = useSelector(state => state.exercises);

  const handleAddToDiaryClick = () => {

    const parsedTime = Number(((time * 60 - timeExercise) / 60).toFixed(1));
if(!parsedTime || parsedTime<1){
  Notify.failure(`Sorry, you've done too little work to add an exercise`);
  return
}

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

   

    setTimeCalories(timeExercise, burnedCalories);

    const requestData = {
      exercise: `${id}`, 
      date: `${formattedDate}`, 
      time: parsedTime, 
      calories: burnedCalories,
    };
        dispatch(fetchUserExercise(requestData))
      .unwrap()
      .then(response => {
        // console.log('Success:', response);
        active();
      })
      .catch(err => {
        //  console.error('Error:', err);
        return;
      });
    
    
  };

  const closeAddExerciseForm = () => {
    setActive(false);
  };

  const onStop=(timeExercise, burnedCalories)=>{
    setTimeExercise(timeExercise);
    setBurnedCalories(burnedCalories);
  }

  return (
    <Container>
      <Img src={`${exercImg}`} alt="" width={270} height={226} />
      <ExitBtn onClick={() => closeAddExerciseForm()}>
        <Btn src="/project-ironbody-ui/ExitIcon.svg" />
      </ExitBtn>
     < CircleTimer initialTime={time} calories={calories} onStop={onStop}/>
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
