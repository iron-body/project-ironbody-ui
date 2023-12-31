import {
  StepList,
  StepItemActive,
  StepItemNotPassed,
  StepItemPassed,
} from './StepBar.styled';

const StepBar = stepNumber => {
  const step = stepNumber.stepNumber;

  return (
    <>
      {step === 1 && (
        <StepList>
          <StepItemActive></StepItemActive>
          <StepItemNotPassed></StepItemNotPassed>
          <StepItemNotPassed></StepItemNotPassed>
        </StepList>
      )}

      {step === 2 && (
        <StepList>
          <StepItemPassed></StepItemPassed>
          <StepItemActive></StepItemActive>
          <StepItemNotPassed></StepItemNotPassed>
        </StepList>
      )}

      {step === 3 && (
        <StepList>
          <StepItemPassed></StepItemPassed>
          <StepItemPassed></StepItemPassed>
          <StepItemActive></StepItemActive>
        </StepList>
      )}
    </>
  );
};

export default StepBar;
