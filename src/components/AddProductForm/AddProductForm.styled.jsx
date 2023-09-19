import styled from '@emotion/styled';

export const ExitBtn = styled.button`
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
  display: flex;
  margin-bottom: 16px;
`;

export const FoodName = styled.p`
  display: flex;
  align-items: center;
  padding-left: 14px;
  color: rgba(239, 237, 232, 0.4);
  width: 244px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  margin-right: 16px;
`;

export const CaloriesValue = styled.input`
  width: 155px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #e6533c;
  background: inherit;
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
`;

export const CancelBtn = styled.button`
  color: #efede8;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  background: inherit;
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
`;
