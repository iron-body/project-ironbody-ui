import styled from 'styled-components';
export const Form = styled.form`
  /* min-width: var(--width-mobile); */
  width: 100%;
  display: flex;
  gap: 19px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  margin-right: 0px;
`;

export const Wrapper = styled.div`
  display: inline;
  max-width: 155px;
`;

export const Input = styled.input`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: var(--black);
  border: 1px solid var(--color-whitesmoke-200);
  color: var(--color-whitesmoke-100);
  border-radius: 12px;
  outline: none;

  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;

  &:focus ~ div > label,
  &:valid ~ div > label {
    font-size: 12px;
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

  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: 14px;
  line-height: 1.3;

  pointer-events: none;
  transition: 0.2s ease all;
`;

export const RadioLabel = styled.label`
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: 14px;
  line-height: 1.3;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    + label {
      &:before {
        content: '';
        background: var(--black);
        border-radius: 100%;
        border: 2px solid var(--color-lightsalmon);
        display: inline-block;
        width: 18px;
        height: 18px;
        position: relative;
        top: -3.2px;
        margin-right: 8px;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + label {
        &:before {
          background-color: var(--color-lightsalmon);
          box-shadow: inset 0 0 0 4px var(--black);
        }
      }
    }
    &:not(:checked) {
      + label {
        &:before {
          border: 2px solid var(--color-whitesmoke-200);
        }
      }
    }
    &:focus {
      + label {
        &:before {
          outline: none;
          border-color: var(--color-lightsalmon);
        }
      }
    }
  }
`;

export const RadioInput = styled.input``;

export const Title = styled.h2`
  margin-bottom: 30px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3px;
`;

export const RadioInputWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 64px;
  }
`;
