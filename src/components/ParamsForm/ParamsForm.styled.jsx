import styled from 'styled-components';
import { device } from '../../Constants';

export const MainForm = styled.form``;

export const FormContainer = styled.div`
  width: 100%;
  max-width: var(--width-mobile);
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 22px;
  margin-bottom: 10px;
  margin-right: 0px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 32px;
  }
`;

export const RadioBtnsForm = styled.div`
  width: 106%;
  display: flex;
  gap: 19px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-right: 0px;

  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 24px;
  }

  @media ${device.desktop} {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const Wrapper = styled.div`
  display: inline;
  max-width: 100%;
  width: 155px;
`;

export const Container = styled.div`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
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

  &[id='error'] {
    border: 1px solid #d80027;
  }
`;

export const Input = styled.input`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
  border: 1px solid var(--color-whitesmoke-200);
  color: var(--color-whitesmoke-100);
  border-radius: 12px;
  outline: none;

  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;

  transition: border-color 220ms cubic-bezier(0.4, 0, 0.2, 1);

  &[id='error'] {
    border: 1px solid #d80027;
  }

  &:focus ~ div > label,
  &:valid ~ div > label {
    font-size: 12px;
    transform: translate(-12px, -32px);
  }

  &:focus,
  &:valid,
  &:hover {
    border-color: var(--orange);
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

  @media ${device.tablet} {
    font-size: var(--font-size-base);
    top: -33.5px;
  }
`;

export const BirthdayLabel = styled.label`
  position: absolute;
  top: -18px;
  left: 2px;

  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: 12px;
  line-height: 1.3;

  pointer-events: none;
  transition: 0.2s ease all;

  @media ${device.tablet} {
    font-size: 12px;
    top: -18px;
    left: 4px;
  }
`;

export const LabelBox = styled.div`
  position: relative;

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const RadioLabel = styled.label`
  margin-bottom: 10px;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: 14px;
  line-height: 1.3;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;

  transition: color 220ms cubic-bezier(0.4, 0, 0.2, 1);

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
        margin-right: 10px;
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
    &:focus,
    &:hover {
      + label {
        &:before {
          outline: none;
          border-color: var(--color-lightsalmon);
        }
      }
    }
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const RadioInput = styled.input``;

export const Title = styled.h2`
  margin-bottom: 30px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3px;

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;

export const ActivityTitle = styled.h2`
  margin-bottom: 30px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3px;

  @media ${device.tablet} {
    margin-bottom: 30px;
    font-size: var(--font-size-base);
  }
`;

export const RadioInputWrapper = styled.div`
  &:first-child {
    margin-right: 64px;
    margin-bottom: 28px;

    @media ${device.tablet} {
      margin-bottom: 32px;
    }
  }

  &:last-child {
    margin-right: 64px;
  }
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  padding: 12px 40px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--orange);
  border: 0px solid transparent;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.1;

  transition: background 220ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #d74b35;
  }

  @media ${device.tablet} {
    padding: 16px 75px;
    gap: 10px;

    font-size: var(--font-size-xl);
  }
`;

export const BackBtn = styled.button`
  margin-right: 16px;
  padding: 8px 0px 8px 26px;
  background-color: var(--black);
  background: url('back-array.svg') no-repeat left;
  border-color: transparent;
  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  line-height: 1.3;

  transition: color 220ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--color-whitesmoke-200);
  }

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;

export const NextBtn = styled.button`
  padding: 8px 26px 8px 0px;
  background-color: var(--black);
  background: url('next-array.svg') no-repeat right;
  border-color: transparent;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  line-height: 1.3;

  transition: color 220ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(239, 237, 232, 0.493);
  }

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;
