import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { device } from '../../Constants';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import{StyledLink} from './ExercisesList.styled'
import exercises from '../../exercises.json';

export const ExercisesList = () => {
  const { name } = useParams();
  const { subCategories } = useParams();

//   const exercises = useSelector(state => state.exercises.items);
// console.log(exercises);
  let exercise;

  switch (subCategories) {
    case 'Body parts':
      exercise = exercises.filter(item => item.bodyPart === name);
      break;
    case 'Muscles':
      exercise = exercises.filter(item => item.target === name);
      break;
    case 'Equipment':
      exercise = exercises.filter(item => item.equipment === name);
      break;

    default:
      break;
  }

  return (
    <StyledLink>
      {exercise.map(item => (
        <ExercisesItem
         key={item.name}
          exerciseName={item.name}
          exercImg={item.gifUrl}
          calories={item.burnedCalories}
          bodyPart={item.bodyPart}
          muscles={item.target}
          time={item.time}
          equipment={item.equipment}
        />
      ))}
    </StyledLink>
  );
};