import styled from '@emotion/styled';
import { device } from '../../Constants';
export const BtnSignInStyled = styled.div`
  border-radius: var(--br-12px);
  border: 1px solid var(--color-whitesmoke-200);
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-21xl);
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    border-radius: var(--br-12px);
    border: 1px solid var(--color-whitesmoke-200);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-41xl);
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    border-radius: var(--br-12px);
    border: 1px solid var(--color-whitesmoke-200);
    display: flex;
    flex-direction: row;
    padding: var(--padding-base) var(--padding-41xl);
    align-items: center;
    justify-content: center;
  }
`;
export const SignInStyled = styled.div`
  position: relative;
  line-height: 18px;
  font-weight: 500;
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
