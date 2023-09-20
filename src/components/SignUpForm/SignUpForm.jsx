// import React from 'react';
import { Formik } from 'formik';
import { SignInBlock } from '../SignInBlock/SignInBlock';
import { BtnSignUpForm } from '../Buttons/BtnSignUpForm';
import {
  FieldStyled,
  FormStyled,
  SignUpH1Styled,
  SignUpPStyled,
  SignupFormStyled,
} from './SignUpForm.styled';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix';

export const SignupForm = () => {
  const dispatch = useDispatch();
  return (
    <SignupFormStyled>
      <SignUpH1Styled>Sign Up</SignUpH1Styled>
      <SignUpPStyled>
        Thank you for your interest in our platform. To complete the registration process, please
        provide us with the following information.
      </SignUpPStyled>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          const { name, email, password } = values;
          try {
            dispatch(authOperations.register({ name, email, password }));

            Notify.success(`${name} registered successfully`);
          } catch (error) {
            Notify.failure(`${name} failed to register`);
          }
        }}
      >
        <FormStyled>
          <FieldStyled id="name" name="name" placeholder="Name" type="text" />

          <FieldStyled id="email" name="email" placeholder="Email" type="email" />

          <FieldStyled id="password" name="password" placeholder="Password" type="password" />

          <BtnSignUpForm />
        </FormStyled>
      </Formik>
      <SignInBlock />
    </SignupFormStyled>
  );
};
