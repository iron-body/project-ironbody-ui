import styled from 'styled-components';
import { device } from '../../Constants';

export const UserCardWrapper = styled.div`
  margin-bottom: 19px;
  @media ${device.tablet} {
    width: 439px;
    margin-bottom: 38px;
  }
`;

export const AvatarCircle = styled.div`
  position: relative;
  background-color: rgba(239, 237, 232, 0.1);
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin-bottom: 32px;
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

export const AvatarSvg = styled.svg`
  fill: transparent;
  stroke: rgba(48, 48, 48, 0.3);
  width: 61px;
  height: 62px;
  @media ${device.tablet} {
    width: 102px;
    height: 102px;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const AvatarBtn = styled.button`
  position: absolute;
  top: 76px;
  left: 28px;
  background: rgba(151, 151, 151, 0);
  border: none;
  @media ${device.tablet} {
    top: 131px;
    left: 53.4px;
  }
`;

export const AvatarBtnSvg = styled.svg`
  fill: rgba(230, 83, 60, 1);
  border: none;
  width: 24px;
  height: 24px;
  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media ${device.tablet} {
    margin-top: 64px;
  }
`;

export const NameWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 0.9;
  padding-bottom: 4px;
  color: #efede8;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 1.17;
    padding-bottom: 8px;
  }
`;

export const User = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.5);
`;

export const DailyList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  @media ${device.tablet} {
    margin-bottom: 32px;
  }
`;

export const DailyItem = styled.li`
  &:not(:last-child) {
    padding-right: 14px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const DailyBox = styled.div`
  background: rgba(230, 83, 60, 1);
  padding: 14px;
  border-radius: 12px;
  @media ${device.tablet} {
    paddin-bottom: 18px;
    paddin-top: 18px;
    padding-right: 14px;
    padding-left: 14px;
  }
`;

export const DailyWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 28px;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const DailySvg = styled.svg`
  fill: rgba(239, 137, 100, 1);
  border: none;
  width: 20px;
  height: 20px;
  padding-right: 8px;
`;

export const DailyText = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-size: 12px;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.8);
`;
export const DailyNumber = styled.p`
  color: #efede8;
  font-size: 18px;
  line-height: 0.9;
  font-weight: 700;
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 41px;
`;

export const WarningWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const WarningSvg = styled.svg`
  fill: rgba(239, 237, 232, 1);
  background: rgba(239, 160, 130, 1);
  border-radius: 50%;
  max-width: 20px;
  max-height: 20px;
  margin-right: 8px;
  @media ${device.tablet} {
    max-width: 24px;
    max-height: 24px;
  }
`;

export const WarningText = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.3);
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogoutBtnSvg = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 0.3);
  display: block;
  max-width: 20px;
  max-height: 20px;
  margin-left: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1248px) {
    padding-left: 49px;
  }
`;
