import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Btn, ExitBtn } from './AddExerciseSuccess.styled';
import { BtnTamplate } from '../Buttons/BtnExercises';

export const AddExerciseSuccess = ({ time, calories }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.exercises);

  return (
    <Container>
      {/* <Img src={`${exercImg}`} alt="" width={270} height={226} /> */}
      <ExitBtn>
        <Btn src="/project-ironbody-ui/ExitIcon.svg" />
      </ExitBtn>
 <p>івріекркеоцкно</p>
<p>вовеоленлоен</p> 
      {/* <BtnTamplate name={'Add to diary'} onClick={() => active()} /> */}
      
    </Container>
  );
};
