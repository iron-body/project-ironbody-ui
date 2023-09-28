import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`


display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 

  @media screen and (min-width: 375px) {
     width: 303px;
     height: 858px;
     }

  @media screen and (${device.tablet}) {
    width: 630px;
    height: 454px;
  }
 
  
`;

export const Img = styled.img`
  border-radius: var(--br-12px);
  margin-left: auto;
  margin-right: auto;
`;


export const Btn = styled.img`
  width: 24px;
  height: 24px;
`;

export const ExitBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  opacity: 0;
  width: 26px;
  height: 26px;
  border: none;
  background: #10100f;
 
fill:red;
  @media screen and (min-width: 768px) {
    opacity: 1;
 
}
`;