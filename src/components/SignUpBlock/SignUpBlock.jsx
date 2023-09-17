import { SignUpBlockStyled, SignUpStyledLink } from './SignUpBlock.styled';

export const SignUpBlock = () => {
  return (
    <SignUpBlockStyled>
      Already have account?<span> </span>
      <SignUpStyledLink to="/signup">Sign Up</SignUpStyledLink>
    </SignUpBlockStyled>
  );
};
