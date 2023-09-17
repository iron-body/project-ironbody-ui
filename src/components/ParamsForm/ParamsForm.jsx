import {
  Input,
  Label,
  LabelBox,
  Form,
  Wrapper,
  RadioContainer,
  RadioInput,
  RadioLabel,
  Title,
  RadioInputWrapper,
} from './ParamsForm.styled';

const ParamsForm = stepNumber => {
  const step = stepNumber.stepNumber;

  return (
    <Form>
      {step === 1 && (
        <>
          <Wrapper>
            <Input type="text" required />
            <LabelBox>
              <Label>Height</Label>
            </LabelBox>
          </Wrapper>

          <Wrapper>
            <Input type="text" required />
            <LabelBox>
              <Label>Current Weight</Label>
            </LabelBox>
          </Wrapper>

          <Wrapper>
            <Input type="text" required />
            <LabelBox>
              <Label>Desired Weight</Label>
            </LabelBox>
          </Wrapper>

          <Wrapper>
            <Input type="text" required />
            <LabelBox>
              <Label>Birthday</Label>
            </LabelBox>
          </Wrapper>
        </>
      )}

      {step === 2 && (
        <>
          <RadioInputWrapper>
            <Title>Blood:</Title>
            <RadioContainer>
              <RadioInput id="blood-1" name="radio" type="radio" />
              <RadioLabel htmlFor="blood-1">1</RadioLabel>

              <RadioInput id="blood-2" name="radio" type="radio" />
              <RadioLabel htmlFor="blood-2">2</RadioLabel>

              <RadioInput id="blood-3" name="radio" type="radio" />
              <RadioLabel htmlFor="blood-3">3</RadioLabel>

              <RadioInput id="blood-4" name="radio" type="radio" />
              <RadioLabel htmlFor="blood-4">4</RadioLabel>
            </RadioContainer>
          </RadioInputWrapper>

          <RadioInputWrapper>
            <Title>Sex:</Title>
            <RadioContainer>
              <RadioInput id="sex-male" name="radio" type="radio" />
              <RadioLabel htmlFor="sex-male">Male</RadioLabel>

              <RadioInput id="sex-female" name="radio" type="radio" />
              <RadioLabel htmlFor="sex-female">Female</RadioLabel>
            </RadioContainer>
          </RadioInputWrapper>

          {/* <RadioContainer></RadioContainer>

          <RadioContainer></RadioContainer> */}
        </>
      )}
    </Form>
  );
};

export default ParamsForm;
