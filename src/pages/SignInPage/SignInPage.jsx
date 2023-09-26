import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { Root } from '../../components/CommonStyled/Common.styled';
import { SignInForm } from '../../components/Forms/SignInForm/SignInForm';
import { TutorialBlock } from '../../components/TutorialBlock/TutorialBlock';

export const SignInPage = () => {
  return (
    <Root>
      <SignInForm />
      <TutorialBlock />
      <CaloriesBlock />
    </Root>
  );
};
