import React from 'react';
import {
  StepList,
  StepItemActive,
  StepItemNotPassed,
  StepItemPassed,
} from './StepBar.styled';

const StepBar = step => {
  return (
    <StepList>
      <StepItemActive></StepItemActive>
      <StepItemNotPassed></StepItemNotPassed>
      <StepItemNotPassed></StepItemNotPassed>
    </StepList>
  );
};

export default StepBar;

// 3 StepItem design
