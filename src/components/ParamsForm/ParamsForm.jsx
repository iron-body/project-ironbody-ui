import {
  Input,
  Label,
  LabelBox,
  Form,
  FormContainer,
  RadioBtnsForm,
  Wrapper,
  RadioContainer,
  RadioInput,
  RadioLabel,
  Title,
  ActivityTitle,
  RadioInputWrapper,
  SubmitBtn,
} from './ParamsForm.styled';

const ParamsForm = stepNumber => {
  const step = stepNumber.stepNumber;

  return (
    <>
      {step === 1 && (
        <FormContainer>
          <Form>
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
          </Form>
        </FormContainer>
      )}
      ;
      {step === 2 && (
        <>
          <RadioBtnsForm>
            <RadioInputWrapper>
              <Title>Blood:</Title>
              <RadioContainer>
                <RadioInput id="blood-1" name="radio-blood" type="radio" />
                <RadioLabel htmlFor="blood-1">1</RadioLabel>

                <RadioInput id="blood-2" name="radio-blood" type="radio" />
                <RadioLabel htmlFor="blood-2">2</RadioLabel>

                <RadioInput id="blood-3" name="radio-blood" type="radio" />
                <RadioLabel htmlFor="blood-3">3</RadioLabel>

                <RadioInput id="blood-4" name="radio-blood" type="radio" />
                <RadioLabel htmlFor="blood-4">4</RadioLabel>
              </RadioContainer>
            </RadioInputWrapper>

            <RadioInputWrapper>
              <Title>Sex:</Title>
              <RadioContainer>
                <RadioInput id="sex-male" name="radio-sex" type="radio" />
                <RadioLabel htmlFor="sex-male">Male</RadioLabel>

                <RadioInput id="sex-female" name="radio-sex" type="radio" />
                <RadioLabel htmlFor="sex-female">Female</RadioLabel>
              </RadioContainer>
            </RadioInputWrapper>

            <RadioContainer>
              <ActivityTitle>Level Activity:</ActivityTitle>
              <div>
                <RadioInput
                  id="level-activity-1"
                  name="radio-activity"
                  type="radio"
                />
                <RadioLabel htmlFor="level-activity-1">
                  Sedentary lifestyle (little or no physical activity)
                </RadioLabel>
              </div>

              <div>
                <RadioInput
                  id="level-activity-2"
                  name="radio-activity"
                  type="radio"
                />
                <RadioLabel htmlFor="level-activity-2">
                  Light activity (light exercises/sports 1-3 days per week)
                </RadioLabel>
              </div>

              <div>
                <RadioInput
                  id="level-activity-3"
                  name="radio-activity"
                  type="radio"
                />
                <RadioLabel htmlFor="level-activity-3">
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
                </RadioLabel>
              </div>

              <RadioInput
                id="level-activity-4"
                name="radio-activity"
                type="radio"
              />
              <RadioLabel htmlFor="level-activity-4">
                Very active (intense exercises/sports 6-7 days per week)
              </RadioLabel>

              <RadioInput
                id="level-activity-5"
                name="radio-activity"
                type="radio"
              />
              <RadioLabel htmlFor="level-activity-5">
                Extremely active (very strenuous exercises/sports and physical
                work)
              </RadioLabel>
            </RadioContainer>
          </RadioBtnsForm>
        </>
      )}
      ;
      {step === 3 && (
        <>
          <SubmitBtn type="submit">Go</SubmitBtn>
        </>
      )}
    </>
  );
};

export default ParamsForm;
