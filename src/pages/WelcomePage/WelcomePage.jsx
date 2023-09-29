import { BtnSignIn } from '../../components/Buttons/BtnSignIn';
import { BtnSignUp } from '../../components/Buttons/BtnSignUp';
import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { Root } from '../../components/CommonStyled/Common.styled';
import { TutorialBlock } from '../../components/TutorialBlock/TutorialBlock';
import { Btns, LineIcon, TransformingYourBody } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <Root>
      <LineIcon alt="" src="/project-ironbody-ui/line.svg" />
      <TransformingYourBody>Transforming your body shape with Power Pulse</TransformingYourBody>
      <Btns>
        <BtnSignUp />
        <BtnSignIn />
      </Btns>
      <TutorialBlock />
      <CaloriesBlock />
    </Root>
  );
};
