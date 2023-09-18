import { SignInBlockStyled, SignInStyledLink } from './SignInBlock.styled';

export const SignInBlock = () => {
  return (
    <SignInBlockStyled>
      Already have account?<span> </span>
      <SignInStyledLink to="/signin">Sign In</SignInStyledLink>
    </SignInBlockStyled>
  );
};
