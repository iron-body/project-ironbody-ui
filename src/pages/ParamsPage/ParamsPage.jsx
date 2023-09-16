import React from 'react';
import {
  Wrapper,
  MainTitle,
  Decription,
  InputText,
  FloatingLabel,
  InputContainer,
  Form,
  NextBtn,
} from './ParamsPage.styled';

const ParamsPage = () => {
  return (
    <Wrapper>
      <MainTitle>Get closer to your goals!</MainTitle>
      <Decription>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </Decription>

      <Form>
        <InputContainer>
          <InputText type="text" />
          <FloatingLabel>Height</FloatingLabel>
        </InputContainer>

        <InputContainer>
          <InputText type="text" />
          <FloatingLabel>Current Weight</FloatingLabel>
        </InputContainer>

        <InputContainer>
          <InputText type="text" />
          <FloatingLabel>Desired Weight</FloatingLabel>
        </InputContainer>

        <InputContainer>
          <InputText type="text" />
          <FloatingLabel>Birthday</FloatingLabel>
        </InputContainer>
      </Form>

          <NextBtn>Next</NextBtn>
    </Wrapper>
  );
};

export default ParamsPage;
