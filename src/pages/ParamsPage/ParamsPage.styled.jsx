import styled from 'styled-components';
import { device } from '../../Constants';

export const Wrapper = styled.section`
  height: 94vh;
  width: var(--width-mobile);
  padding: 128px 20px 20px 20px;
  position: relative;
  background: linear-gradient(168deg, #040404 12.66%, rgba(4, 4, 4, 0) 20.98%),
    linear-gradient(91deg, #040404 -10.38%, rgba(4, 4, 4, 0) 42.83%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url('/params-page1-2x.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom 105px right 0px;

  @media ${device.tablet} {
    height: 125vh;
    width: var(--width-tablet);
    padding: 189px 32px 32px 32px;

    background-image: url('/params-page-1-tablet-2x.jpg');
    background-position: bottom -100px right 0px;
  }

  @media ${device.desktop} {
    height: 64vh;
    width: var(--width-desktop);
    padding: 200px 96px 96px 96px;

    /* background-size: contain; */
    background-image: url('/params-page-1-desktop-2x.jpg');
    background-position: bottom 0px right 100px;
  }
`;

export const Wrapper2 = styled.section`
  height: 98vh;
  width: var(--width-mobile);
  padding: 128px 20px 20px 20px;
  position: relative;
  background-image: url('/params-page2-2x.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom -30px right 0px;

  @media ${device.tablet} {
    height: 125vh;
    width: var(--width-tablet);
    padding: 189px 32px 32px 32px;

    background-image: url('/params-page-2-tablet-2x.jpg');
    background-position: bottom -120px right 0px;
  }

  @media ${device.desktop} {
    height: 64vh;
    width: var(--width-desktop);
    padding: 200px 96px 96px 96px;

    background-image: url('/params-page-2-desktop-2x.jpg');
    background-position: bottom 0px right 100px;
  }
`;

export const Wrapper3 = styled.section`
  height: 100vh;
  width: var(--width-mobile);
  padding: 128px 20px 20px 20px;
  position: relative;
  background-image: url('/params-page3-2x.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom -30px right 0px;

  @media ${device.tablet} {
    height: 125vh;
    width: var(--width-tablet);
    padding: 189px 32px 32px 32px;

    background-image: url('/params-page-3-tablet-2x.jpg');
    background-position: bottom -120px right 0px;
  }

  @media ${device.desktop} {
    height: 64vh;
    width: var(--width-desktop);
    padding: 200px 96px 96px 96px;

    background-image: url('/params-page-3-desktop-2x.jpg');
    background-position: bottom 0px right 100px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 14px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 700;
  font-size: var(--font-size-5xl);
  line-height: 1.2;

  @media ${device.tablet} {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

export const MainTitle2 = styled.h1`
  margin-bottom: 28px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 700;
  font-size: var(--font-size-5xl);
  line-height: 1.2;

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

export const Decription = styled.h2`
  margin-bottom: 50px;
  color: var(--color-whitesmoke-200);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 400;
  font-size: var(--font-size-xm);
  line-height: 1.3;

  @media ${device.tablet} {
    font-size: var(--font-size-base);
    width: 496px;
  }
`;

export const Decription3 = styled.h2`
  margin-bottom: 28px;
  color: var(--color-whitesmoke-200);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 400;
  font-size: var(--font-size-xm);
  line-height: 1.3;

  @media ${device.tablet} {
    font-size: var(--font-size-base);
    width: 496px;
    margin-bottom: 64px;
  }
`;

export const BackBtn = styled.button`
  margin-right: 16px;
  padding: 8px 0px 8px 26px;
  background-color: var(--black);
  background: url('/back-array.svg') no-repeat left;
  border-color: transparent;
  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  line-height: 1.3;

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;

export const NextBtn = styled.button`
  padding: 8px 26px 8px 0px;
  background-color: var(--black);
  background: url('/next-array.svg') no-repeat right;
  border-color: transparent;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  line-height: 1.3;

  @media ${device.tablet} {
    font-size: var(--font-size-base);
  }
`;
