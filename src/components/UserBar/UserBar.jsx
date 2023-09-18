import { AuthMenu, AuthIcon, MenuItem, Link, MenuItemAvatar } from './UserBar.styled';
import sprite from '../../../icons.svg';
import { useMediaQuery } from '@mui/material';

const UserBar = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
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
      {isTabletOrMobile ? (
        <MenuItem>
          <AuthIcon>
            <use href={`${sprite}#icon-menu-02`} />
          </AuthIcon>
        </MenuItem>
      ) : null}
    </AuthMenu>
  );
};
export default UserBar;
