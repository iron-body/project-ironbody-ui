import styled from 'styled-components';
import { device } from '../../Constants';
// export const ModalContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: rgba(0, 0, 0, 0.4);
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   opacity: 0;
//   pointer-events: none;
//   transition: 0.5s;

//   &.active {
//     opacity: 1;
//     pointer-events: all;
//   }
// `;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  padding: 19px 20px 21px 20px;
  background-color: #e6533c;
  z-index: 9;

  @media ${device.tablet} {
    width: 350px;
    padding: 26px 32px 32px 32px;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

export const ModalContent = styled.div`
  position: relative;

  padding: 48px 32px;
  border-radius: 12px;
  // background-color: black;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  transform: scale(0.5);
  transition: 0.4s all;
  /* width: 50vw; */

  &.active {
    transform: scale(1);
  }
`;
