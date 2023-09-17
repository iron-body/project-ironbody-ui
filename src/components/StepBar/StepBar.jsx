import {
  StepList,
  StepItemActive,
  StepItemNotPassed,
  // StepItemPassed,
} from './StepBar.styled';

// (step)
const StepBar = () => {
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
