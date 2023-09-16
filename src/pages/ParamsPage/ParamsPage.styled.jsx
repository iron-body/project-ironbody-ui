import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  padding: 20px;
  position: relative;
  background-image: url('../../../public/params-page1-2x.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 50px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 14px;

  color: white;
  /* font-family: Roboto; */
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
`;

export const Decription = styled.h2`
  margin-bottom: 30px;
  color: rgba(239, 237, 232, 0.3);
  /* font-family: Roboto; */
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
`;

//!------------------------------------------------------------

export const Form = styled.form`
  display: flex;
  gap: 14px;
  /*flex-direction: row; */
  flex-wrap: wrap;
  margin-bottom: 30px;
  /* max-width: 1170px; */
  /* min-width: 320px; */
  /* width: 100%; */
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const InputText = styled.input`
  /* flex-basis: calc((100% - 14px) / 2); */
  background-color: #040404;
  width: 145px;
  padding: 14px 0px 14px 14px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus
  /* &:valid  */ {
    border-color: #e6533c;
  }

  &:focus ~ span
  /* &:valid ~ span  */ {
    transform: translate(0, -220%);
    color: rgba(239, 237, 232, 0.6);
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const FloatingLabel = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  pointer-events: none;
  transition:
    transform 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    color 0.2s ease-in-out;
`;

export const NextBtn = styled.button`
  background-color: #040404;
  border-color: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;
`;
