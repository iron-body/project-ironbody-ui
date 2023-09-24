/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';

// import StyledDatepicker from './../StyledDatepicker/StyledDatepicker';
// import { CalendarIcon } from './../DaySwitch/DaySwitch.styled';
import ParamsFormDaySwitch from './../ParamsFormDaySwitch/ParamsFormDaySwitch';

import {
  MainForm,
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
  BirthdayLabel,
  ActivityTitle,
  RadioInputWrapper,
  SubmitBtn,
  BackBtn,
  NextBtn,
} from './ParamsForm.styled';

import { selectParamsValues, updateAll } from '../../redux/params/paramsSlice';

const ParamsFormSchema = yup.object().shape({
  height: yup.number().min(150, 'Height should be higher than 150cm').required('Required'),
  currentWeight: yup.number().min(35, 'Weight should be more than 35kg').required('Required'),
  desiredWeight: yup
    .number()
    .min(35, 'Desire weight should be more than 35kg')
    .required('Required'),
  birthday: yup.date().required('Date is required'),
  // .test('is-over-18', 'Дата повинна бути старше 18 років', function (value) {
  //   const currentDate = new Date();
  //   const minDate = new Date();
  //   minDate.setFullYear(currentDate.getFullYear() - 18);
  //   return value <= minDate;
  // }),
});

const ParamsForm = props => {
  const paramsState = useSelector(selectParamsValues);
  const dispatch = useDispatch();
  const onStepChange = props.onStepChange;
  const currentStep = props.currentStep;
  // const [formattedDate, setFormattedDate] = useState('');

  let savedValues = {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: paramsState,

      validationSchema: ParamsFormSchema,
      validateOnChange: false,
      validateOnBlur: false,
      // onSubmit: () => {
      // alert('Fill all fields');
      // },
    });

  const handleDateChange = date => {
    const newFormatedDate = moment(date).format();
    // setFormattedDate(newFormatedDate);
    setFieldValue('birthday', newFormatedDate);
    // console.log('newFormatedDate :>> ', newFormatedDate);
    // console.log('values.birthday :>> ', values.birthday);
  };

  const handleNextSetStep = () => {
    onStepChange(currentStep + 1);

    console.log(values);
    savedValues = values;

    console.log(savedValues);
  };

  const handleBackSetStep = () => {
    onStepChange(currentStep - 1);
  };

  const canClickNext =
    Object.keys(errors).length === 0 &&
    Object.values(values)
      .slice(0, 3)
      .every(value => value !== undefined);

  useEffect(() => {
    dispatch(updateAll(values));
  }, [dispatch, values]);

  return (
    <MainForm>
      {currentStep === 1 && (
        <FormContainer>
          <Form>
            <Wrapper>
              <Input
                name="height"
                id={errors.height && touched.height ? 'error' : 'height'}
                value={values.height || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
              />
              <LabelBox>
                <Label>Height</Label>
              </LabelBox>
            </Wrapper>

            <Wrapper>
              <Input
                name="currentWeight"
                id={errors.currentWeight && touched.currentWeight ? 'error' : 'currentWeight'}
                value={values.currentWeight || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
              />
              <LabelBox>
                <Label>Current Weight</Label>
              </LabelBox>
            </Wrapper>

            <Wrapper>
              <Input
                name="desiredWeight"
                id={errors.desiredWeight && touched.desiredWeight ? 'error' : 'desiredWeight'}
                value={values.desiredWeight || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                required
              />
              <LabelBox>
                <Label>Desired Weight</Label>
              </LabelBox>
            </Wrapper>

            <Wrapper>
              <LabelBox>
                <BirthdayLabel
                  value={values.birthday}
                  // onChange={() => setFieldValue('birthday', formattedDate)}
                >
                  Birthday
                </BirthdayLabel>
              </LabelBox>
              <ParamsFormDaySwitch onDateChange={handleDateChange} />
            </Wrapper>
          </Form>

          <NextBtn
            type="button"
            onClick={canClickNext ? handleNextSetStep : handleSubmit}
            // onClick={errors === {} ? handleNextSetStep : handleSubmit}
          >
            Next
          </NextBtn>
        </FormContainer>
      )}
      ;
      {currentStep === 2 && (
        <>
          <RadioBtnsForm>
            <RadioInputWrapper>
              <Title>Blood:</Title>
              <RadioContainer>
                <RadioInput
                  id="blood-1"
                  name="radio-blood"
                  type="radio"
                  value={1}
                  checked={values.blood === 1}
                  onChange={() => setFieldValue('blood', 1)}
                />
                <RadioLabel htmlFor="blood-1">1</RadioLabel>

                <RadioInput
                  id="blood-2"
                  name="radio-blood"
                  type="radio"
                  value={2}
                  checked={values.blood === 2}
                  onChange={() => setFieldValue('blood', 2)}
                />
                <RadioLabel htmlFor="blood-2">2</RadioLabel>

                <RadioInput
                  id="blood-3"
                  name="radio-blood"
                  type="radio"
                  value={3}
                  checked={values.blood === 3}
                  onChange={() => setFieldValue('blood', 3)}
                />
                <RadioLabel htmlFor="blood-3">3</RadioLabel>

                <RadioInput
                  id="blood-4"
                  name="radio-blood"
                  type="radio"
                  value={4}
                  checked={values.blood === 4}
                  onChange={() => setFieldValue('blood', 4)}
                />
                <RadioLabel htmlFor="blood-4">4</RadioLabel>
              </RadioContainer>
            </RadioInputWrapper>

            <RadioInputWrapper>
              <Title>Sex:</Title>
              <RadioContainer>
                <RadioInput
                  id="sex-male"
                  name="radio-sex"
                  type="radio"
                  value="male"
                  checked={values.sex === 'male'}
                  onChange={() => setFieldValue('sex', 'male')}
                />
                <RadioLabel htmlFor="sex-male">Male</RadioLabel>

                <RadioInput
                  id="sex-female"
                  name="radio-sex"
                  type="radio"
                  value="female"
                  checked={values.sex === 'female'}
                  onChange={() => setFieldValue('sex', 'female')}
                />
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
                  value={1}
                  checked={values.levelActivity === 1}
                  onChange={() => setFieldValue('levelActivity', 1)}
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
                  value={2}
                  checked={values.levelActivity === 2}
                  onChange={() => setFieldValue('levelActivity', 2)}
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
                  value={3}
                  checked={values.levelActivity === 3}
                  onChange={() => setFieldValue('levelActivity', 3)}
                />
                <RadioLabel htmlFor="level-activity-3">
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </RadioLabel>
              </div>

              <RadioInput
                id="level-activity-4"
                name="radio-activity"
                type="radio"
                value={4}
                checked={values.levelActivity === 4}
                onChange={() => setFieldValue('levelActivity', 4)}
              />
              <RadioLabel htmlFor="level-activity-4">
                Very active (intense exercises/sports 6-7 days per week)
              </RadioLabel>

              <RadioInput
                id="level-activity-5"
                name="radio-activity"
                type="radio"
                value={5}
                checked={values.levelActivity === 5}
                onChange={() => setFieldValue('levelActivity', 5)}
              />
              <RadioLabel htmlFor="level-activity-5">
                Extremely active (very strenuous exercises/sports and physical work)
              </RadioLabel>
            </RadioContainer>

            <BackBtn type="button" onClick={handleBackSetStep}>
              Back
            </BackBtn>
            <NextBtn type="button" onClick={handleNextSetStep}>
              Next
            </NextBtn>
          </RadioBtnsForm>
        </>
      )}
      ;
      {currentStep === 3 && (
        <>
          <SubmitBtn type="submit">Go</SubmitBtn>
        </>
      )}
    </MainForm>
  );
};

export default ParamsForm;
