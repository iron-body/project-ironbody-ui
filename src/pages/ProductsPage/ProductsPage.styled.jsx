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
    background-image: url('public/side-view-people-training-gym-2x.png');
    background-repeat: no-repeat;
    background-position: 981px 67px;
    background-size: 438px;
  }
`;

export const FilterTitle = styled.h1`
  color: #efede880;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 8px;

  text-align: end;
`;

export const Container = styled.div`
  max-width: 1440px;
  padding-left: 96px;
  padding-right: 96px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #efede8;
  margin: 0;
`;

export const HeaderProducts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  margin-top: 126px;
  align-items: center;
`;
