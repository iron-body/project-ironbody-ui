import { Formik, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
import { selectProfileData, updateProfile } from '../../redux/profile/profileSlice';
import { useEffect } from 'react';
import { BtnSaveStyled, SaveStyled } from '../Buttons/BtnSave.styled';
const UserForm = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfileData);
  // const userEmail = useSelector(getUserEmail);

  const eighteenYearsAgo = dayjs().subtract(18, 'year').format('YYYY-MM-DD');
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: profileData,

      // validationSchema: ParamsFormSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: () => {
        alert('Fill all fields');
      },
    });

  useEffect(() => {
    dispatch(updateProfile(values));
  }, [dispatch, values]);

  return (
    <Formik
      // initialValues={profileValues}
      validationSchema={Yup.object({
        name: Yup.string().required('Reqired'),
        height: Yup.number().min(150, 'minimum 150(cm)').required('Reqired'),
        currentWeight: Yup.number().min(35, 'minimum 35(kg)').required('Reqired'),
        desiredWeight: Yup.number().min(35, 'minimum 35(kg)').required('Reqired'),
        birthday: Yup.date()
          .max(eighteenYearsAgo, 'must be older then 18 years')
          .required('Reqired'),
        blood: Yup.number().required('Reqired'),
        sex: Yup.string().required('Reqired'),
        levelActivity: Yup.number().required('Reqired'),
      })}
      onSubmit={values => {
        // dispatch(updateOperations.update(values));
        console.log('click');
      }}
    >
      <FormStyled>
        <Label htmlFor="name">Basic info</Label>
        <BasicWrapper>
          <NameWrapper>
            <FieldBasicStyled
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name || ''}
            />
          </NameWrapper>
          <FieldBasicStyled
            type="email"
            name="email"
            disabled="disabled"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email || ''}
            disabled
          />
        </BasicWrapper>
        <InfoWrapper>
          <InfoContainer>
            <ParamsWrapper>
              <Label htmlFor="height">Height</Label>
              <FieldSmallStyled
                min="150"
                type="number"
                name="height"
                id={errors.height && touched.height ? 'error' : 'height'}
                value={values.height || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </ParamsWrapper>
            <CurrentWeightWrapper>
              <Label htmlFor="currentWeight">Current Weight</Label>
              <FieldBigStyled
                min="35"
                type="number"
                name="currentWeight"
                value={values.currentWeight || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </CurrentWeightWrapper>
          </InfoContainer>
          <InfoContainerTwo>
            <Label htmlFor="desiredWeight">Desired Weight</Label>
            <ParamsWrapperTwo>
              <ParamsWrapper>
                <FieldSmallStyled
                  min="35"
                  type="number"
                  name="desiredWeight"
                  value={values.desiredWeight || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </ParamsWrapper>
              <FieldBigStyled
                type="date"
                name="birthday"
                value={values.birthday || ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
                  value={1}
                  checked={values.blood === 1}
                  onChange={() => setFieldValue('blood', 1)}
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
                  value={2}
                  checked={values.blood === 2}
                  onChange={() => setFieldValue('blood', 2)}
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
                  value={3}
                  checked={values.blood === 3}
                  onChange={() => setFieldValue('blood', 3)}
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
                  value={4}
                  checked={values.blood === 4}
                  onChange={() => setFieldValue('blood', 4)}
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
                    checked={values.sex === 'male'}
                    onChange={() => setFieldValue('sex', 'male')}
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
                    checked={values.sex === 'female'}
                    onChange={() => setFieldValue('sex', 'female')}
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
                  value={1}
                  checked={values.levelActivity === 1}
                  onChange={() => setFieldValue('levelActivity', 1)}
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
                  value={2}
                  checked={values.levelActivity === 2}
                  onChange={() => setFieldValue('levelActivity', 2)}
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
                  value={3}
                  checked={values.levelActivity === 3}
                  onChange={() => setFieldValue('levelActivity', 3)}
                />
                <span className={css.radioSpanLevel}>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </span>
              </label>
            </li>
            <li className={css.radioItemLevel}>
              <label className={css.radio}>
                <Field
                  className={css.radioField}
                  type="radio"
                  name="levelActivity"
                  value={4}
                  checked={values.levelActivity === 4}
                  onChange={() => setFieldValue('levelActivity', 4)}
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
                  value={5}
                  checked={values.levelActivity === 5}
                  onChange={() => setFieldValue('levelActivity', 5)}
                />
                <span className={css.radioSpanLevel}>
                  Extremely active (very strenuous exercises/sports and physical work)
                </span>
              </label>
            </li>
          </ul>
        </div>
        <BtnSaveStyled type="submit">
          <SaveStyled>Save</SaveStyled>
        </BtnSaveStyled>
      </FormStyled>
    </Formik>
  );
};

export default UserForm;
