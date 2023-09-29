import styled from '@emotion/styled';
import { device } from '../../Constants';

export const ProductWrapper = styled.div`
  padding: 16px;
`;

export const NavCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 27px;
`;
export const RecomendedMarker = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  // background: #419b09;
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
  font-size: 14px;
  line-height: 1.28;
  background: inherit;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;

  @media ${device.tablet} {
    color: #e6533c;
    font-size: 16px;
    line-height: 1.5;
    background: inherit;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
  }
`;

export const TitleCard = styled.h2`
  width: 41px;
  height: 24px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;

  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const FoodIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const FoodName = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #efede8;
  font-size: 20px;
  line-height: 1.2;

  @media ${device.tablet} {
    background: inherit;
    top: 17px;
    right: 16px;
    padding: 0;
  }

  @media ${device.desktop} {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #efede8;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.33;
  }
`;


export const FoodParams = styled.div`
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







