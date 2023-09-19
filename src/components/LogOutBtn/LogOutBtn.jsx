import { Btn, Icon, LinkBtn } from './LogOutBtn.styled';
import sprite from '../../../icons.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';

const LogOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Btn
      onClick={() => {
        navigate('/');
        dispatch(authOperations.logout());
      }}
    >
      <LinkBtn to="/logout">Logout</LinkBtn>
      <Icon>
        <use href={`${sprite}#icon-log-out-01`} />
      </Icon>
    </Btn>
  );
};

export default LogOutBtn;
