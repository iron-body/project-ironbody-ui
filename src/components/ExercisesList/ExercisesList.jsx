import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import{StyledLink, Container } from './ExercisesList.styled'

export const ExercisesList = ({subcategory, nameExercise}) => {
  const { name } = useParams();


 

   
  let exercise;
  const exercises = useSelector(state => state.exercises.items);
  if (typeof exercises !== 'object') {
    console.log('problem with data uploading');
    return
  }
  switch (subcategory) {
    case 'Body parts':
      exercise = exercises.dataList.filter(item => item.bodyPart === name);
      break;
    case 'Muscles':
      exercise = exercises.dataList.filter(item => item.target === name);
      break;
    case 'Equipment':
      exercise = exercises.dataList.filter(item => item.equipment === name);
      break;

    default:
      break;
      
  }

 
  return (
  <Container><StyledLink>
    {exercise.map(item => (
      
      <ExercisesItem
      onClick={() => active(item.name)}
       key={item._id}
        exerciseName={item.name}
        exercImg={item.gifUrl}
        calories={item.burnedCalories}
        bodyPart={item.bodyPart}
        muscles={item.target}
        time={item.time}
        equipment={item.equipment}
        id={item._id}
        />
    ))}
    </StyledLink></Container>
  
   
  );
};