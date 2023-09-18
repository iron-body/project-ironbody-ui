import styled from '@emotion/styled';
import { device } from '../../Constants';

export const BtnSignUpFormStyled = styled.button`
  text-decoration: none;
  border: none;
  color: var(--white);
  border-radius: var(--br-12px);
  background-color: var(--orange);
  width: 136px;
  &:hover,
  &:focus {
    background-color: var(--color-lightsalmon);
  }
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-21xl);
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    position: absolute;
    top: 202px;
  }
  @media ${device.tablet} {
    position: absolute;
    border-radius: var(--br-12px);
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-41xl);
    width: 190px;
    align-items: center;
    justify-content: center;
    top: 260px;
  }
  @media ${device.desktop} {
    border-radius: var(--br-12px);
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-41xl);
    align-items: center;
    justify-content: center;
  }
`;
export const SignUpFormSTexttyled = styled.div`
  position: relative;
  line-height: 18px;
  font-weight: 500;
  font-family: var(--headline-style-mobile-h1);
  font-size: 16px;
  font-style: normal;
  @media ${device.tablet} {
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
  @media ${device.desktop} {
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
`;
