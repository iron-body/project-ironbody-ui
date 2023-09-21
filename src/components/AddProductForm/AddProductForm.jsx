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
  const { foodName, caloriesValue = 155 } = productCalc;

  const handleClose = () => {
    onClose(); 
  };

  return (
    <>
      <ExitBtn onClick={handleClose}>
        <IconExitBtn alt="" src="/project-ironbody-ui/ExitIcon.svg"></IconExitBtn>
      </ExitBtn>
      <CalcContainer>
        <FoodName> {foodName}</FoodName>
        <CaloriesValue />
      </CalcContainer>
      <CalcCalories>
        Calories: <CalcVelueCalories>{caloriesValue}</CalcVelueCalories>{' '}
      </CalcCalories>
      <BtnFormContainer>
        <AddProductBtn>Add to diary</AddProductBtn>
        <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
      </BtnFormContainer>
    </>
  );
}
