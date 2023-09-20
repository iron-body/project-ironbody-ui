import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { Root } from '../../components/CommonStyled/Common.styled';
import { SignupForm } from '../../components/Forms/SignUpForm/SignUpForm';
import { TutorialBlock } from '../../components/TutorialBlock/TutorialBlock';

export const SignUpPage = () => {
  return (
    <div style={{ outline: '1px solid rgba(239, 237, 232, 0.3)' }}>
      <Root>
        <SignupForm />
        <TutorialBlock />
        <CaloriesBlock />
      </Root>
    </div>
  );
};
