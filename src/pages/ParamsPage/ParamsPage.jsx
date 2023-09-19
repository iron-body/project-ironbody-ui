import { useState } from 'react';

import { TutorialBlock } from './../../components/TutorialBlock/TutorialBlock';
import { TutorialBlockForParamsPages } from './../../components/TutorialBlock/TutorialBlockForParamsPage';
import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import { CaloriesBlockStyledForParamsPages } from '../../components/CaloriesBlock/CaloriesBlockForParamsPage';
import StepBar from './../../components/StepBar/StepBar';
import ParamsForm from '../../components/ParamsForm/ParamsForm';

import {
  Wrapper,
  Wrapper2,
  Wrapper3,
  MainTitle,
  MainTitle2,
  Decription,
  Decription3,
  NextBtn,
  BackBtn,
} from './ParamsPage.styled';

const ParamsPage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <Wrapper>
          <MainTitle>Get closer to your goals!</MainTitle>
          <Decription>
            To ensure a personalized user experience and the proper functioning
            of our platform, we ask you to provide the following information
            about your weight, height and other relevant data:
          </Decription>

          <ParamsForm stepNumber={step} />

          <NextBtn type="button" onClick={() => setStep(step + 1)}>
            Next
          </NextBtn>

          <TutorialBlock />
          <CaloriesBlock />

          <StepBar stepNumber={step} />
        </Wrapper>
      )}

      {step === 2 && (
        <Wrapper2>
          <MainTitle2>Get closer to your goals!</MainTitle2>
          <ParamsForm stepNumber={step} />
          <BackBtn type="button" onClick={() => setStep(step - 1)}>
            Back
          </BackBtn>
          <NextBtn type="button" onClick={() => setStep(step + 1)}>
            Next
          </NextBtn>

          <TutorialBlockForParamsPages />
          <CaloriesBlockStyledForParamsPages />

          <StepBar stepNumber={step} />
        </Wrapper2>
      )}

      {step === 3 && (
        <Wrapper3>
          <MainTitle>Dear user</MainTitle>

          <Decription3>
            Thank you for filling in all the required data. We greatly
            appreciate your cooperation and commitment to a healthy lifestyle.
            The collected information will allow us to provide you with a more
            individual and personalized approach.
          </Decription3>

          <ParamsForm stepNumber={step} />

          <BackBtn type="button" onClick={() => setStep(step - 1)}>
            Back
          </BackBtn>

          <TutorialBlockForParamsPages />
          <CaloriesBlockStyledForParamsPages />

          <StepBar stepNumber={step} />
        </Wrapper3>
      )}
    </>
  );
};

export default ParamsPage;
