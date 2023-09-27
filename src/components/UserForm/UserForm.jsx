
import { Formik, Field} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { updateOperations } from '../../redux/update/updateOperations';
import { BtnSave } from '../Buttons/BtnSave';
import css from './UserForm.module.css';
import {
  Label,
  FieldBasicStyled,
  FieldSmallStyled,
  FieldBigStyled,
  BasicWrapper,
  ParamsWrapper,
  InfoContainer,
  InfoContainerTwo,
  ParamsWrapperTwo,
  NameWrapper,
  CurrentWeightWrapper,
  InfoWrapper,
  FormStyled,
} from './UserForm.styled';
const UserForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const eighteenYearsAgo = dayjs().subtract(18, 'year').format('YYYY-MM-DD');

  return (
    <Formik
      initialValues={{
        name: '',
        email: userEmail,
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: eighteenYearsAgo,
        blood: '',
        sex: '',
        levelActivity: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Reqired'),
        height: Yup.number().min(150, 'minimum 150(cm)').required('Reqired'),
        currentWeight: Yup.number()
          .min(35, 'minimum 35(kg)')
          .required('Reqired'),
        desiredWeight: Yup.number()
          .min(35, 'minimum 35(kg)')
          .required('Reqired'),
        birthday: Yup.date()
          .max(eighteenYearsAgo, 'must be older then 18 years')
          .required('Reqired'),
        blood: Yup.number().required('Reqired'),
        sex: Yup.string().required('Reqired'),
        levelActivity: Yup.number().required('Reqired'),
      })}
      onSubmit={values => {
        dispatch(updateOperations.update(values));
      }}
    >
      <FormStyled>
        <Label htmlFor="name">Basic info</Label>
        <BasicWrapper>
          <NameWrapper>
            <FieldBasicStyled type="text" name="name" />
          </NameWrapper>
          <FieldBasicStyled type="email" name="email" disabled="disabled" />
        </BasicWrapper>
        <InfoWrapper>
          <InfoContainer>
            <ParamsWrapper>
              <Label htmlFor="height">Height</Label>
              <FieldSmallStyled min="150" type="number" name="height" />
            </ParamsWrapper>
            <CurrentWeightWrapper>
              <Label htmlFor="currentWeight">Current Weight</Label>
              <FieldBigStyled min="35" type="number" name="currentWeight" />
            </CurrentWeightWrapper>
          </InfoContainer>
          <InfoContainerTwo>
            <Label htmlFor="desiredWeight">Desired Weight</Label>
            <ParamsWrapperTwo>
              <ParamsWrapper>
                <FieldSmallStyled min="35" type="number" name="desiredWeight" />
              </ParamsWrapper>
              <FieldBigStyled type="date" name="birthday" />
            </ParamsWrapperTwo>
          </InfoContainerTwo>
        </InfoWrapper>
        <Label htmlFor="blood">Blood</Label>
        <div className={css.radioWrapper}>
          <ul className={css.radioBloodList}>
            <li className={css.radioItem}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="blood"
                  value="1"
                />
                <span className={css.radioSpan}>1</span>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="blood"
                  value="2"
                />
                <span className={css.radioSpan}>2</span>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="blood"
                  value="3"
                />
                <span className={css.radioSpan}>3</span>
              </label>
            </li>
            <li className={css.radioItem}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="blood"
                  value="4"
                />
                <span className={css.radioSpan}>4</span>
              </label>
            </li>
          </ul>
          <div>
            <ul className={css.radioSexList}>
              <li className={css.radioItem}>
                <label className={css.radio}>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="sex"
                    value="Male"
                  />
                  <span className={css.radioSpanSexMale}>Male</span>
                </label>
              </li>
              <li className={css.radioItem}>
                <label className={css.radio}>
                  <Field
                    className={css.radioField}
                    type="radio"
                    name="sex"
                    value="Female"
                  />
                  <span className={css.radioSpanSex}>Female</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.radioWrapperTwo}>
          <ul>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value="1"
                />
                <span className={css.radioSpanLevel}>
                  Sedentary lifestyle (little or no physical activity)
                </span>
              </label>
            </li>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value="2"
                />
                <span className={css.radioSpanLevel}>
                  Light activity (light exercises/sports 1-3 days per week)
                </span>
              </label>
            </li>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value="3"
                />
                <span className={css.radioSpanLevel}>
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
                </span>
              </label>
            </li>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value="4"
                />
                <span className={css.radioSpanLevel}>
                  Very active (intense exercises/sports 6-7 days per week)
                </span>
              </label>
            </li>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value="5"
                />
                <span className={css.radioSpanLevel}>
                  Extremely active (very strenuous exercises/sports and physical
                  work)
                </span>
              </label>
            </li>
          </ul>
        </div>
        <BtnSave />
      </FormStyled>
    </Formik>
  );
};

export default UserForm;

