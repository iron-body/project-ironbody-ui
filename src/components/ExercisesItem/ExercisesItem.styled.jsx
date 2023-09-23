import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  width: 335px;
  max-height: 141px;
  // margin-left: auto;
  // margin-right: auto;
  padding: 16px;
  border-radius: var(--br-12px);
  background-color: #10100f;
  box-sizing: border-box;

  border: 1px solid rgba(239, 237, 232, 0.25);
  display: block;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.img});

  // @media screen and (min-width: 375px) {
  //   width: 335px;
  //   height: 141px;

  //   // overflow-x: hidden;
  // }

  @media screen and (${device.tablet}) {
    width: 335px;
    height: 141px;
    box-sizing: border-box;
  

  }
  @media screen and (${device.desktop}) {
    width: 405px;
    height: 141px;
  }
`;

export const P = styled.p`
  width: 167;
  heihght: 62px;
`;

export const ContainerSmall = styled.div`
  width: 167;
  heihght: 62px;
`;

export const Button = styled.button`
  width: 167;
  heihght: 62px;
  color: red;
`;

// ______________________________________

export const NavCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const RecomendedMarker = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: #419b09;
  margin-right: 8px;
`;
export const RecomendedTitle = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.5;
  margin-right: 16px;
`;

export const RecomendedInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonItem = styled.button`
  color: #e6533c;
  font-size: 16px;
  line-height: 1.5;
  background: inherit;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const TitleCard = styled.h2`
  color: white;
  width: 81px;
  height: 24px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;

  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  display: block;

  border-radius: var(--br-1px);
  width: 24px;
  height: 24px;
  @media ${device.tablet} {
  
    border-radius: var(--br-1px);
    width: 36px;
    height: 24px;
  }
  @media ${device.desktop} {
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
`;

export const ExerciseIcon = styled.img`
  display: block;
  
  border-radius: var(--br-1px);
  width: 24px;
  height: 24px;
  margin-right: 16px;
  @media screen and ${device.tablet} {
    
  
  }
  @media screen and ${device.desktop} {
   
    margin-right: 16px;
  }
`;

export const ExerciseName = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #efede8;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
`;
export const ExerciseParams = styled.div`
  display: flex;
`;
export const NameParams = styled.p`
  margin-right: 16px;
  display: flex;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const ParamsValue = styled.span`
  margin-left: 4px;
  color: #efede8;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
