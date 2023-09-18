import { AuthMenu, AuthIcon, MenuItem, Link, MenuItemAvatar } from './NavAuth.styled';
import sprite from '../../../icons.svg';

const NavAuth = () => {
  return (
    <AuthMenu>
      <MenuItem>
        <Link to="/profile">
          <AuthIcon>
            <use href={`${sprite}#icon-settings-01`} />
          </AuthIcon>
        </Link>
      </MenuItem>
      <MenuItemAvatar>
        <AuthIcon>
          <use href={`${sprite}#icon-avatar`} />
        </AuthIcon>
      </MenuItemAvatar>
      <MenuItem>
        <Link to="/logout">Logout</Link>
        <AuthIcon>
          <use href={`${sprite}#icon-log-out-01`} />
        </AuthIcon>
      </MenuItem>
    </AuthMenu>
  );
};
export default NavAuth;
