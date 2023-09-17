import { Wrapper, MainTitle, Decription, NextBtn } from './ParamsPage.styled';

import { TutorialBlock } from './../../components/TutorialBlock/TutorialBlock';
import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import StepBar from './../../components/StepBar/StepBar';
import ParamsForm from '../../components/ParamsForm/ParamsForm';

const ParamsPage = () => {
  return (
    <Wrapper>
      <MainTitle>Get closer to your goals!</MainTitle>
      <Decription>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </Decription>

      <ParamsForm />

      <NextBtn>Next</NextBtn>

      <TutorialBlock />
      <CaloriesBlock />

      <StepBar />
    </Wrapper>
  );
};

export default ParamsPage;
