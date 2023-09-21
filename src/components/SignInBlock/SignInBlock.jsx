import { SignInBlockStyled, SignInStyledLink } from './SignInBlock.styled';

export const SignInBlock = () => {
  let nbsp = '\u00A0';
  return (
    <SignInBlockStyled>
      Already have account?{nbsp}
      <SignInStyledLink to="/signin">Sign In</SignInStyledLink>
    </SignInBlockStyled>
  );
};
