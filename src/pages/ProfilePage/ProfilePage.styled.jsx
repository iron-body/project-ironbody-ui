import styled from 'styled-components';
import { device } from '../../Constants';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  border-top: 1px solid rgba(239, 237, 232, 0.2);
  padding-left: 20px;
  padding-right: 20px;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  @media ${device.mobile} {
    width: 335px;
  }
  @media ${device.tablet} {
    margin-top: 60px;
    width: 704px;
    padding-left: 36px;
    padding-right: 36px;
  }
  @media ${device.desktop} {
    width: 1248px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export const ProfileWrapper = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
`;
