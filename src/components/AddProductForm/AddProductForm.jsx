import React, { useState } from 'react';

import {
  FoodName,
  CalcContainer,
  CaloriesValue,
  CalcCalories,
  CalcVelueCalories,
  BtnFormContainer,
  AddProductBtn,
  ExitBtn,
  IconExitBtn,
  CancelBtn,
} from './AddProductForm.styled';

export default function AddProductForm({ productCalc, onClose }) {
  const { foodName, calories } = productCalc;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <ExitBtn onClick={handleClose}>
        <IconExitBtn
          alt=""
          src="/project-ironbody-ui/ExitIcon.svg"
        ></IconExitBtn>
      </ExitBtn>
      <CalcContainer>
        <FoodName>
          {' '}
          {foodName.length > 20 ? ` ${foodName.slice(0, 20)}... ` : foodName}
        </FoodName>
        <CaloriesValue />
      </CalcContainer>
      <CalcCalories>
        Calories: <CalcVelueCalories>{calories}</CalcVelueCalories>{' '}
      </CalcCalories>
      <BtnFormContainer>
        <AddProductBtn>Add to diary</AddProductBtn>
        <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
      </BtnFormContainer>
    </>
  );
}
