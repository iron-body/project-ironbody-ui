import { LogoStyled, PowerpulseIconSvg, VectorIconSvg } from './Logo.styled';
import sprite from '../../../icons.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { selectProfileFilled } from '../../redux/profile/profileSlice';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const stateColorSVGVector = useSelector(state => state.header.valueIconVector);
  const isProfileFilledIn = useSelector(selectProfileFilled);

  return (
    <LogoStyled
      onClick={() => {
        if (isLoggedIn && !isProfileFilledIn) {
          navigate('/params');
        }
        if (isLoggedIn && isProfileFilledIn) {
          navigate('/diary');
        }
        if (!isLoggedIn) {
          navigate('/');
        }

        // isLoggedIn ? navigate('/diary') : navigate('/');
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
