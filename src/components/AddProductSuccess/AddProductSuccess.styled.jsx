import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';

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

export const SeccessIcon = styled.img`
  width: 123px;
  height: 97px;
  margin-bottom: 19px;
`;

export const Status = styled.p`
  text-transform: uppercase;
  color: #efede8;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;

  @media ${device.tablet} {
    color: #efede8;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
    margin-bottom: 16px;
  }
`;

export const CalcContainer = styled.div`
  display: block;
  margin-bottom: 26px;

  @media ${device.tablet} {
    display: flex;
    margin-bottom: 16px;
  }
`;

export const CalcCalories = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;

export const CalcVelueCalories = styled.span`
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
`;

export const AddProductBtn = styled.button`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  display: flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  border: none;
  border-radius: 12px;
  background: #e6533c;
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

export const SuccessModalContainer = styled.div`
  padding: 16px 102px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const ButtonLink = styled(Link)`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-style: normal;
  line-height: 1.28;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    color: rgba(239, 237, 232, 0.3);
    font-size: 14px;
    font-style: normal;
    line-height: 1.28;
  }
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
