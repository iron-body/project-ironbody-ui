import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { device } from '../../Constants';



export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 64px;

  @media screen and (${device.mobile}) {
    width: 335px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-x: hidden;
  }
  @media screen and (${device.tablet}) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px; 
   
  }
  @media screen and (${device.desktop}) {
    width: var(--width-desktop);
   
    padding: 0px;
    ${(props) =>
      props.selectedSubcategory &&
      css`
      background-image: url('/project-ironbody-ui/side-view-people-training-gym-desktop@1x.jpg');
      background-repeat: no-repeat;
      background-position: 981px 37px;
      background-size: 638px;
      `}
  
  }
`;

export const NameExercise = styled.div`
  color: var(--white);
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: 15px;
    font-size: 32px;
  }
`;

export const StyledNavLink = styled.button`
  background: inherit;
  border: none;
  display: flex;
  justify-content: flex-start;
  color: rgba(239, 237, 232, 0.4);
  font-size: 16px;
  line-height: 1.5;
  background: inherit;
  border: none;
  opacity: 0;
  display: flex;
  align-items: center;
  
  

  ${(props) =>
    props.selectedSubcategory &&
    css`
    opacity: 1;
    `}
  @media ${device.tablet} {
    padding-left: 32px;

  }
`;

export const ButtonIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  @media ${device.tablet} {

  }
  @media ${device.desktop} {
   
    margin-left: 8px;
  }
`;

export const Title = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const NavigateContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  
  @media ${device.tablet} {
    flex-direction: row;
    width: ${768 - 64}px;
    margin-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${device.desktop} {
    width: 1240px;
    padding: 0 96px 0 96px;
    margin-bottom: 10px;
  }
`;
