import {
  ExitBtn,
  IconExitBtn,
  SeccessIcon,
  Status,
  CalcContainer,
  CalcCalories,
  CalcCaloriesOrang,
  CalcVelueCalories,
  AddProductBtn,
  SuccessModalContainer,
  ButtonLink,
  ButtonIcon,
} from './AddExerciseSucces.styled';

export default function AddExercisesSucces({ active, calories, time }) {
  const handleClose = () => {
    active();
  };

  return (
    <>
      <SuccessModalContainer>
        <ExitBtn onClick={handleClose}>
          <IconExitBtn
            alt=""
            src="/project-ironbody-ui/ExitIcon.svg"
          ></IconExitBtn>
        </ExitBtn>

        <SeccessIcon
          alt=""
          src="/project-ironbody-ui/success-icon-prod.png"
        ></SeccessIcon>
        <Status>Well done</Status>

        <CalcContainer>
          <CalcCalories>Your time:</CalcCalories>
          <CalcVelueCalories>{time}</CalcVelueCalories>
          <CalcCaloriesOrang>minutes</CalcCaloriesOrang>
        </CalcContainer>

        <CalcContainer>
          <CalcCalories>Burned calories:</CalcCalories>
          <CalcVelueCalories>{calories}</CalcVelueCalories>
        </CalcContainer>

        <AddProductBtn onClick={handleClose}>Next exercise</AddProductBtn>
        <ButtonLink to="/diary">
          To the diary
          <ButtonIcon
            alt=""
            src="/project-ironbody-ui/arrow-grey.svg"
            style={{ fill: 'grey' }}
          />
        </ButtonLink>
      </SuccessModalContainer>
    </>
  );
}