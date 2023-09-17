import styled from 'styled-components';
export const Form = styled.form`
  max-width: var(--width-mobile);
  display: flex;
  gap: 19px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  width: calc(50% - 10px);
`;

export const Input = styled.input`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: var(--black);
  border: 1px solid var(--color-whitesmoke-200);
  color: var(--color-whitesmoke-200);
  border-radius: 12px;
  outline: none;

  font-family: Roboto;
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;

  &:focus ~ div > label,
  &:valid ~ div > label {
    font-size: 14px;
    transform: translate(-12px, -32px);
  }

  &:focus,
  &:valid {
    border-color: var(--orange);
  }
`;

export const LabelBox = styled.div`
  position: relative;
  width: 270px;

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -32px;
  left: 14px;

  color: #757575;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.3;

  pointer-events: none;
  transition: 0.2s ease all;
`;
