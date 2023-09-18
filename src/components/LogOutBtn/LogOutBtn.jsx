import { Btn, Icon, LinkBtn } from './LogOutBtn.styled';
import sprite from '../../../icons.svg';

const LogOutBtn = () => {
  return (
    <Btn>
      <LinkBtn to="/logout">Logout</LinkBtn>
      <Icon>
        <use href={`${sprite}#icon-log-out-01`} />
      </Icon>
    </Btn>
  );
};

export default LogOutBtn;
