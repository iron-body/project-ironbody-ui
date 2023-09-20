import { LogoStyled, PowerpulseIconSvg, VectorIconSvg } from './Logo.styled';
import sprite from '../../../icons.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const stateColorSVGVector = useSelector(state => state.header.valueIconVector);

  console.log('stateColorSVGVector Logopage:>> ', stateColorSVGVector);

  return (
    <LogoStyled
      onClick={() => {
        isLoggedIn ? navigate('/diary') : navigate('/');
      }}
    >
      <VectorIconSvg stateColorSVGVector={stateColorSVGVector}>
        <use href={`${sprite}#icon-logo36_13`} />
      </VectorIconSvg>
      <PowerpulseIconSvg>
        <use href={`${sprite}#icon-PowerPulse`} />
      </PowerpulseIconSvg>
    </LogoStyled>
  );
};
