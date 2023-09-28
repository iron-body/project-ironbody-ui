import {
  ExitBtn,
  IconExitBtn,
  SeccessIcon,
  Status,
  CalcContainer,
  CalcCalories,
  CalcVelueCalories,
  AddProductBtn,
  SuccessModalContainer,
  ButtonLink,
  ButtonIcon,
} from './AddProductSuccess.styled';

export default function AddProductSuccess({ onClose, calories }) {
  const handleClose = () => {
    onClose();
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
        <Status>Will done</Status>

        <CalcContainer>
          <CalcCalories>Calories</CalcCalories>
          <CalcVelueCalories>{calories}</CalcVelueCalories>
        </CalcContainer>
        <AddProductBtn onClick={handleClose}>Next product</AddProductBtn>
        <ButtonLink to="/diary">
          To the diary
          <ButtonIcon
            alt=""
            src="/project-ironbody-ui/arrow.svg"
            style={{ fill: 'grey' }}
          />
        </ButtonLink>
      </SuccessModalContainer>
    </>
  );
}
