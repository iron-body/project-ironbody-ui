import { BtnStyled, Styled } from './BtnExercises.styled';

export const BtnTamplate = ({onClick, name}) => {
  
  return (
    <BtnStyled to="/signin" onClick={onClick}>
      <Styled>{name}</Styled>
    </BtnStyled>
  );
};