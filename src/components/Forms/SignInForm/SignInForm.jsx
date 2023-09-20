// import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  FieldSignInStyled,
  FormSignInStyled,
  SignInFormStyled,
  SignInH1Styled,
  SignInPStyled,
  ValidateStatusEmailBlockStyled,
  ValidateStatusPasswordBlockStyled,
} from './SignInForm.styled';
import { BtnSignInForm } from '../../Buttons/BtnSignInForm';
import { SignUpBlock } from '../../SignUpBlock/SignUpBlock';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth/authOperations';
import { Notify } from 'notiflix';

import { ValidationSchemas } from '../../FormValidation/ValidationSchemas';

import spriteIconsRemix from '../../../../remixicon.symbol.svg';
import { ErrorValidateSvgStyled, ValidateStatusErrorTextStyled } from '../commonSignInForm.styled';
// import sprite from '../../../icons.svg';

export const SignInForm = () => {
  const dispatch = useDispatch();
  let nbsp = '\u00A0';

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
          console.log(values);
          const { email, password } = values;
          try {
            dispatch(authOperations.login({ email, password }));
          } catch (error) {
            Notify.failure(`${email} failed to login`);
          }
        }}
        validationSchema={ValidationSchemas.signinSchema}
      >
        <FormSignInStyled>
          <FieldSignInStyled id="email" name="email" placeholder="Email" type="email" />

          <ErrorMessage
            name="email"
            render={message => (
              <ValidateStatusEmailBlockStyled>
                <ErrorValidateSvgStyled>
                  <use
                    href={`${spriteIconsRemix}#ri-checkbox-circle-fill`}
                    // style={{ width: '10px', height: '10px' }}
                  />
                </ErrorValidateSvgStyled>
                {nbsp}
                <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
              </ValidateStatusEmailBlockStyled>
            )}
          />

          <FieldSignInStyled id="password" name="password" placeholder="Password" type="password" />
          <ErrorMessage
            name="password"
            render={message => (
              <ValidateStatusPasswordBlockStyled>
                <ErrorValidateSvgStyled>
                  <use
                    href={`${spriteIconsRemix}#ri-checkbox-circle-fill`}
                    // style={{ width: '10px', height: '10px' }}
                  />
                </ErrorValidateSvgStyled>
                {nbsp}
                <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
              </ValidateStatusPasswordBlockStyled>
            )}
          />
          <BtnSignInForm />
        </FormSignInStyled>
      </Formik>
      <SignUpBlock />
    </SignInFormStyled>
  );
};
