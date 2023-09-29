import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { Root } from '../../components/CommonStyled/Common.styled';
import { SignupForm } from '../../components/Forms/SignUpForm/SignUpForm';
import { TutorialBlock } from '../../components/TutorialBlock/TutorialBlock';

export const SignUpPage = () => {
  return (
    <div>
      <Root>
        <SignupForm />
        <TutorialBlock />
        <CaloriesBlock />
      </Root>
    </div>
  );
};
