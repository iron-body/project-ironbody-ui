import { Input, Label, LabelBox, Form, Wrapper } from './ParamsForm.styled';

const ParamsForm = () => {
  return (
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
        {' '}
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
  );
};

export default ParamsForm;
