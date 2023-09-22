import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { Root } from '../../components/CommonStyled/Common.styled';
import { SignInForm } from '../../components/Forms/SignInForm/SignInForm';
import { TutorialBlock } from '../../components/TutorialBlock/TutorialBlock';

export const SignInPage = () => {
  return (
    <div style={{ outline: '1px solid rgba(239, 237, 232, 0.3)' }}>
      <Root>
        <SignInForm />
        <TutorialBlock />
        <CaloriesBlock />
      </Root>
    </div>
  );
};
