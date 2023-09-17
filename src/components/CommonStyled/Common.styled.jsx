import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Root = styled.div`
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  @media ${device.mobile} {
    position: relative;
    width: var(--width-mobile);
    height: 812px;
    overflow: hidden;

    color: var(--white);
    font-family: var(--headline-style-mobile-h1);

    background-image: url('public/sideviewpeopletraininggym-1@2x.png');
    background-repeat: no-repeat;
    background-position: 77px 241px;
    background-size: 446px;
  }
  @media ${device.tablet} {
    max-width: var(--width-tablet);
    width: var(--width-tablet);
    height: 1024px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: url('public/sideviewpeopletraininggym-1@2x.png');
    background-repeat: no-repeat;
    background-position: 331px 130px;
    background-size: 670px;
  }
  @media ${device.desktop} {
    max-width: var(--width-desktop);
    width: var(--width-desktop);
    height: 800px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: url('public/sideviewpeopletraininggym-1@2x.png');
    background-repeat: no-repeat;
    background-position: 770px -151px;
    background-size: 670px;
  }
`;
