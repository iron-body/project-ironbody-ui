import styled from '@emotion/styled';
import { device } from '../../Constants';

export const ExitBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 26px;
  height: 26px;
  border: none;
  background: inherit;
  padding: 0;
`;

export const IconExitBtn = styled.img`
  width: 26px;
  height: 26px;
`;

export const CalcContainer = styled.div`
  display: block;
  margin-bottom: 26px;

  @media ${device.tablet} {
    display: flex;
    margin-bottom: 16px;
  }
`;

export const FoodName = styled.p`
  display: flex;
  align-items: center;
  color: rgba(239, 237, 232, 0.4);
  height: 16px;

  width: 272px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  margin-bottom: 16px;
  padding-left: 14px;
  padding-top: 8px;
  padding-bottom: 8px;

  font-size: 14px;

  line-height: 1.28;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.5; /* 150% */

    display: flex;
    align-items: center;
    padding-left: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: rgba(239, 237, 232, 0.4);
    width: 210px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid #e6533c;
    margin-bottom: 0;

    margin-right: 16px;
  }
`;

export const CaloriesValue = styled.input`
  color: #efede8;
  padding: 8px 14px;
  width: 258px;
  height: 16px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  background: inherit;

  font-size: 14px;
  line-height: 1.28;

  @media ${device.tablet} {
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;
    width: 126px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid #e6533c;
    background: inherit;
  }
`;

export const Unit = styled.p`

  position: absolute;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
  right: 48px;
  top: 106px;

  @media ${device.tablet} {
    position: absolute;
    color: rgba(239, 237, 232, 0.4);
    font-size: 12px;
    line-height: 1.5;
    right: 48px;
    top: 59px;
  }
`;

export const CalcCalories = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 64px;
`;

export const CalcVelueCalories = styled.span`
  color: #fff;
  font-size: 12px;
  line-height: 1.5; /* 150% */
`;

export const BtnFormContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddProductBtn = styled.button`
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  border: none;
  border-radius: 12px;
  background: #e6533c;
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 151px;

  @media ${device.tablet} {
    padding: 14px 32px;
    color: #efede8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    border-radius: 12px;
    background: #e6533c;
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
  }
`;

export const CancelBtn = styled.button`
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  height: 42px;
  width: 121px;
  background: inherit;
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media ${device.tablet} {
    padding: 14px 32px;
    color: #efede8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    border-radius: 12px;
    background: #e6533c;
    display: flex;
    padding: 14px 32px;
    justify-content: center;
    align-items: center;
  }
`;
