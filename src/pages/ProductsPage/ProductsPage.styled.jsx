import { device } from '../../Constants';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: relative;
  width: var(--width-mobile);
  height: 812px;
  overflow: hidden;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);

  @media ${device.tablet} {
    width: var(--width-tablet);
    height: 1024px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
  }
  @media ${device.desktop} {
    width: var(--width-desktop);
    height: 800px;
    overflow: hidden;
    color: var(--white);
    font-family: var(--headline-style-mobile-h1);
    background-image: url('/project-ironbody-ui/side-view-people-training-gym-2x.png');
    background-repeat: no-repeat;
    background-position: 981px 67px;
    background-size: 438px;
  }
`;

export const Container = styled.div`
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-height: 100%;
  overflow: auto;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    margin: 0 auto;
    max-height: 100%;
    overflow: hidden;
  }

  @media ${device.desktop} {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 40px;
  margin-top: 101px;

  @media ${device.tablet} {
    margin-bottom: 32px;
  }

  @media ${device.desktop} {
    color: #efede8;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.37;
    margin: 0;
  }
`;

export const HeaderProducts = styled.div`
  @media ${device.tablet} {
    display: block;
    margin-bottom: 32px;
    margin-top: 156px;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    margin-top: 126px;
    align-items: center;
  }
`;
