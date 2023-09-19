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

export default function AddProductForm({ productCalc }) {

    const { foodName, caloriesValue = 155 } = productCalc;

    console.log(foodName)
  return (
    <>
      <ExitBtn>
        <IconExitBtn alt="" src="/ExitIcon.svg"></IconExitBtn>
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
        <CancelBtn>Cancel</CancelBtn>
      </BtnFormContainer>
    </>
  );
}
