import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  border-radius: var(--br-12px);
  color: EFEDE8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 375px) {
    width: 271px;
    height: 762px;
  }

  @media screen and (${device.tablet}) {
    width: 630px;
    height: 454px;
  }
`;

export const Img = styled.img`
  border-radius: var(--br-12px);
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-right:6px;
  }
`;

export const Tmr = styled.div`
  margin-top: 22px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;
  width: 147px;
  height: 160px;
  padding-top: 10px;
  padding-left: 8px;
  padding-bottom: 4px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.1);
  border: 1px solid rgba(239, 237, 232, 0.25);
  color: white;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 16px;
  }


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

export const Btn = styled.img`
  width: 24px;
  height: 24px;
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
