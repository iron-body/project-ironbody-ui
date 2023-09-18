import { LogoStyled, PowerpulseIconSvg, VectorIconSvg } from './Logo.styled';
import sprite from '../../../icons.svg';

export const Logo = () => {
  return (
    <LogoStyled to="/">
      <VectorIconSvg>
        <use href={`${sprite}#icon-logo36_13`} />
      </VectorIconSvg>
      <PowerpulseIconSvg>
        <use href={`${sprite}#icon-PowerPulse`} />
      </PowerpulseIconSvg>
    </LogoStyled>
  );
};
