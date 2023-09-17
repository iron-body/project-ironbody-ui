// import React from 'react';
import { Formik } from 'formik';
import {
  FieldSignInStyled,
  FormSignInStyled,
  SignInFormStyled,
  SignInH1Styled,
  SignInPStyled,
} from './SignInForm.styled';
import { BtnSignInForm } from '../Buttons/BtnSignInForm';
import { SignUpBlock } from '../SignUpBlock/SignUpBlock';

export const SignInForm = () => {
  return (
    <SignInFormStyled>
      <SignInH1Styled>Sign In</SignInH1Styled>
      <SignInPStyled>
        Welcome! Please enter your credentials to login to the platform:
      </SignInPStyled>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormSignInStyled>
          <FieldSignInStyled id="email" name="email" placeholder="Email" type="email" />

          <FieldSignInStyled id="password" name="password" placeholder="Password" type="password" />

          <BtnSignInForm />
        </FormSignInStyled>
      </Formik>
      <SignUpBlock />
    </SignInFormStyled>
  );
};
