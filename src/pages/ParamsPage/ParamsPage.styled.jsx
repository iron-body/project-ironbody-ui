import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: var(--width-mobile);
  padding: 128px 20px 20px 20px;
  position: relative;
  background-image: url('/public/params-page1-2x.jpg');
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

export const MainTitle2 = styled.h1`
  margin-bottom: 28px;

  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 700;
  font-size: var(--font-size-5xl);
  line-height: 1.2;
`;

export const Decription = styled.h2`
  margin-bottom: 50px;
  color: var(--color-whitesmoke-200);
  font-family: var(--headline-style-mobile-h1);
  font-weight: 400;
  font-size: var(--font-size-xm);
  line-height: 1.3;
`;

export const NextBtn = styled.button`
  /* padding-right: 26px; */
  padding: 8px 26px 8px 0px;
  /* width: 80px; */
  background-color: var(--black);
  background: url('/public/next-array.svg') no-repeat right;
  border-color: transparent;
  color: var(--white);
  font-size: var(--font-size-xm);
  line-height: 1.3;
  margin-bottom: 52vh;
`;
