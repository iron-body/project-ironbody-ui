import { LogoStyled, PowerpulseIcon, VectorIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoStyled to="/">
      <VectorIcon alt="" src="/vector.svg" />
      <PowerpulseIcon alt="" src="/powerpulse.svg" />
    </LogoStyled>
  );
};
