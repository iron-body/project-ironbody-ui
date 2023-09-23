import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top:40px;
  padding:20px;
  // background-color:blue;

  @media screen and (min-width: 375px) {
    width: 375px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-x: hidden;
  }
;
  @media screen and (min-width: 768px) {
    margin-top:72px;
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
;
  @media screen and ${device.desktop} {
  width: var(--width-desktop);
  height: 800px;
  overflow: hidden;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  background-image: url('/project-ironbody-ui/side-view-people-training-gym-2x.png');
  background-repeat: no-repeat;
  background-position: 981px 67px;
  background-size: 438px;
  };
}


`;
