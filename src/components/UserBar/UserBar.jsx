import { AuthMenu, AuthIcon, MenuItem, Link, MenuItemAvatar } from './UserBar.styled';
import sprite from '../../../icons.svg';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import UserNavMobile from '../UserNavMobile/UserNavMobile';

const UserBar = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 1439px)');

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
        <MenuItem onClick={toggleMenu}>
          <AuthIcon>
            <use href={`${sprite}#icon-menu-02`} />
          </AuthIcon>
        </MenuItem>
      ) : null}
      {/* Conditional rendering of menu content based on isMenuOpen */}
      {isTabletOrMobile && isMenuOpen ? <UserNavMobile /> : null}
    </AuthMenu>
  );
};
export default UserBar;
