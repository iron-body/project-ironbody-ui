import { LogoStyled, PowerpulseIcon, VectorIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoStyled to="/">
      <VectorIcon alt="" src="public/vector.svg" />
      <PowerpulseIcon alt="" src="public/powerpulse.svg" />
    </LogoStyled>
  );
};
