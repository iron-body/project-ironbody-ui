import styled from '@emotion/styled';
import { device } from '../../Constants';


export const Container = styled.div`
border-radius: var(--br-12px);
  color: EFEDE8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-left: 16px;
  border-color: red;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 858px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (${device.tablet}) {
    width: 694px;
    height: 550px;
    padding-left: 16px;
    padding-right: 16px;
  }

 
`;

export const Img = styled.img`
 margin-left: auto;
 margin-right: auto;
 border-radius: var(--br-12px);
  @media screen and (min-width: 375px) {
    
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const Tmr = styled.div`
  margin-top: 22px;
  margin-left: auto;
  margin-right: auto;
  width: 147px;
  height: 214px;
  padding-top: 10px;
  padding-left: 8px;
  padding-bottom: 4px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.1);
  border: 1px solid rgba(239, 237, 232, 0.25);
  color: white;
`;

export const Btn = styled.button`
  width: 1px;
  heihgt: 1px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 358px;
  color: white;
  background-color: inherit;
  @media screen and (max-width: 768px) {
    opacity: 0;
    
  }
  @media screen and (min-width: 768px) {
    margin:4px;
    padding-left: 350px;
    
  }
  //  background-image:url('../../../public/close_icon.png');
`;

export const ExercseBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
 
  height: 240px;
  
`;

export const SmallBox = styled.div`
  width: 147px;
  height: 62px;
  
  border-radius: var(--br-12px);
  background-color: rgba(239, 237, 232, 0.1);
  border: 1px solid rgba(239, 237, 232, 0.25);

  @media screen and (${device.tablet}) {
    width: 168px;
    height: 70px;
  }
`;

export const Name = styled.p`
padding-top: 12px;
  padding-left: 18px;
font-size: 12px;
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
 
`;

export const Info = styled.div`
  color: #efede8;
  font-size: 14px;
  padding-left: 18px;

  @media screen and ${device.tablet} {
    font-size: 16px;
  }
`;
