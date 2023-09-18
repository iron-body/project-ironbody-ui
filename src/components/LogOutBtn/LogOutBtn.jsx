import { Icon, Link } from './LogOutBtn.styled';
import sprite from '../../../icons.svg';

const LogOutBtn = () => {
  return (
    <>
      <Link to="/logout">Logout</Link>
      <Icon>
        <use href={`${sprite}#icon-log-out-01`} />
      </Icon>
    </>
  );
};

export default LogOutBtn;
