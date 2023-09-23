import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TimerCircle = styled.circle`
  transition: stroke-dashoffset 1s linear;
`;

export const TimerText = styled.h1`
  font-size: 2rem;
  margin-top: 16px;
`;

export const TimerButton = styled.button`
  font-size: 1rem;
  margin-top: 16px;
`;
