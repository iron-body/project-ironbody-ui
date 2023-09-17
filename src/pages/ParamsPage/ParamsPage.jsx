import { useState } from 'react';

import { TutorialBlock } from './../../components/TutorialBlock/TutorialBlock';
import { CaloriesBlock } from '../../components/CaloriesBlock/CaloriesBlock';
import StepBar from './../../components/StepBar/StepBar';
import ParamsForm from '../../components/ParamsForm/ParamsForm';

import { Wrapper, MainTitle, MainTitle2, Decription, NextBtn } from './ParamsPage.styled';

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
        <Wrapper>
          <MainTitle2>Get closer to your goals!</MainTitle2>

          <ParamsForm stepNumber={step} />

          <NextBtn type="button" onClick={() => setStep(step - 1)}>
            Back
          </NextBtn>
          <NextBtn type="button" onClick={() => setStep(step + 1)}>
            Next
          </NextBtn>

          <TutorialBlock />
          <CaloriesBlock />

          <StepBar stepNumber={step} />
        </Wrapper>
      )}
    </>
  );
};

export default ParamsPage;
