import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  padding: 128px 20px 20px 20px;
  position: relative;
  background-image: url('/src/assets/params-page1-2x.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom -30px right 0px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 14px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 700;
  font-size: var(--font-size-5xl);
  line-height: 1.2;
`;

export const Decription = styled.h2`
  margin-bottom: 30px;
  color: var(--color-whitesmoke-200);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 400;
  font-size: var(--font-size-xm);
  line-height: 1.3;
`;

//!------------------------------------------------------------

export const Form = styled.form`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 24px;
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
  background-color: var(--black);
  width: 145px;
  padding: 14px 0px 14px 14px;
  border: 1px solid var(--color-whitesmoke-200);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus
  /* &:valid  */ {
    border-color: var(--orange);
  }

  &:focus ~ span
  /* &:valid ~ span  */ {
    transform: translate(0, -220%);
    color: var(--color-whitesmoke-100);
    font-size: var(--font-size-xs);
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
  /* padding-right: 26px; */
  padding: 8px 26px 8px 0px;
  /* width: 80px; */
  background-color: var(--black);
  background: url('/src/assets/next-array.svg') no-repeat right;
  border-color: transparent;
  color: var(--white);
  font-size: var(--font-size-xm);
  line-height: 1.3;
  margin-bottom: 56vh;
`;
