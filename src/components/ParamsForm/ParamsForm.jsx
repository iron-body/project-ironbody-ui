import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';

import ParamsFormDaySwitch from './../ParamsFormDaySwitch/ParamsFormDaySwitch';
import {
  selectParamsStatusUpdate,
  selectParamsValues,
  updateAll,
} from '../../redux/params/paramsSlice';
// import { selectToken } from '../../redux/auth/authSlice';
import { Notify } from 'notiflix';
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
import { paramsOperations } from '../../redux/params/paramsOperations';

const ParamsFormSchema = yup.object().shape({
  height: yup
    .number()
    .min(150, 'Height should be higher than 150cm')
    .required('Height is required'),
  currentWeight: yup
    .number()
    .min(35, 'Weight should be more than 35kg')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .min(35, 'Desire weight should be more than 35kg')
    .required('Desired weight is required'),
  birthday: yup
    .date()
    .test('is-over-18', 'You should be older then 18 years old', function (value) {
      const currentDate = new Date();
      const minDate = new Date();
      minDate.setFullYear(currentDate.getFullYear() - 18);
      return value <= minDate;
    })
    .required('Date is required'),
});

// eslint-disable-next-line react/prop-types
const ParamsForm = ({ currentStep, onStepChange }) => {
  const paramsState = useSelector(selectParamsValues);
  // const stateToken = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUpdated = useSelector(selectParamsStatusUpdate);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: paramsState,

      validationSchema: ParamsFormSchema,
      validateOnChange: false,
      validateOnBlur: false,
      // onSubmit: warnAboutErrors,
    });

  const warnAboutErrors = () => {
    handleSubmit();

    if (Object.keys(errors).length === 0) {
      return Notify.failure('Fill all the fields');
    } else {
      const arrayOfErrors = Object.values(errors);

      return Notify.failure(`${arrayOfErrors[0]}`);
    }
  };

  const canClickNext =
    Object.keys(errors).length === 0 &&
    Object.values(values)
      .slice(0, 3)
      .every(value => value !== undefined);

  useEffect(() => {
    dispatch(updateAll(values));
  }, [dispatch, values]);

  useEffect(() => {
    console.log('paramsState :>> ', paramsState);
  }, [paramsState]);

  useEffect(() => {
    if (isUpdated) {
      navigate('/diary', { replace: true });
    }
  }, [isUpdated, navigate]);

  const handleDateChange = date => {
    const newFormatedDate = moment(date).toISOString();
    setFieldValue('birthday', newFormatedDate);
    console.log(newFormatedDate);
  };

  const handleNextSetStep = () => {
    onStepChange(currentStep + 1);
    console.log(paramsState);
  };

  const handleBackSetStep = () => {
    onStepChange(currentStep - 1);
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    // try {
    //   if (!stateToken) return Notify.failure('Not authorized');
    //   const JSONParamsState = JSON.stringify(paramsState);

    //   const response = await axios.post(
    //     'calculateNorms/calculate',
    //     JSONParamsState,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${stateToken}`,
    //       },
    //     },
    //   );

    //   navigate('/products');
    //   return response.data;
    // } catch (error) {
    //   console.log('error :>> ', error);
    //   Notify.failure(error.message);
    // }

    dispatch(paramsOperations.updateParams(paramsState));
  };

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
                type="number"
                min={150}
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
                type="number"
                min={35}
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
                type="number"
                min={35}
                required
              />
              <LabelBox>
                <Label>Desired Weight</Label>
              </LabelBox>
            </Wrapper>

            <Wrapper>
              <LabelBox>
                <BirthdayLabel value={values.birthday}>Birthday</BirthdayLabel>
              </LabelBox>
              <ParamsFormDaySwitch onDateChange={handleDateChange} />
            </Wrapper>
          </Form>

          <NextBtn type="button" onClick={canClickNext ? handleNextSetStep : warnAboutErrors}>
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
          <SubmitBtn type="submit" onClick={onSubmitForm}>
            Go
          </SubmitBtn>

          <BackBtn type="button" onClick={handleBackSetStep}>
            Back
          </BackBtn>
        </>
      )}
    </MainForm>
  );
};

export default ParamsForm;
