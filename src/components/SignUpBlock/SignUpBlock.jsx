import { SignUpBlockStyled, SignUpStyledLink } from './SignUpBlock.styled';

export const SignUpBlock = () => {
  let nbsp = '\u00A0';
  return (
    <SignUpBlockStyled>
      Already have account?{nbsp}
      <SignUpStyledLink to="/signup">Sign Up</SignUpStyledLink>
    </SignUpBlockStyled>
  );
};
