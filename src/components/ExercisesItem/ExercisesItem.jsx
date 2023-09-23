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

export const ExercisesItem = ({
  exerciseName,
  exercImg,
  calories,
  bodyPart,
  muscles,
  time,
  equipment,
}) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Container key={exerciseName}>
      <NavCard>
        <TitleCard>WORKOUT</TitleCard>
        <RecomendedInfo>
          <ButtonItem onClick={() => setModalActive(true)}>
            Start
            <ButtonIcon alt="" src="/next-array.svg" />
          </ButtonItem>
        </RecomendedInfo>
      </NavCard>

      {/* <Button onClick={() => setModalActive(true)}>Я кнопка</Button> */}
      <BasicModalWindow active={modalActive} setActive={setModalActive}>
        <AddExerciseForm
          exercImg={`${exercImg}`}
          exerciseName={`${exerciseName}`}
          bodyPart={`${bodyPart}`}
          muscles={`${muscles}`}
          time={`${time}`}
          equipment={`${equipment}`}
          active={setModalActive}
        />
      </BasicModalWindow>
      <ExerciseName>
        <ExerciseIcon alt="" src="/product-icon.svg" />{' '}
        {exerciseName.charAt(0).toUpperCase() + exerciseName.slice(1)}
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
