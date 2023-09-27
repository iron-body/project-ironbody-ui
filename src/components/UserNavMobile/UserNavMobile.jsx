import { useState } from 'react';
import { BurgerMenu, Cross, Link, LogOutBtnWrapper, Menu, MenuItem } from './UserNavMobile.styled';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import sprite from '../../../icons.svg';

// eslint-disable-next-line react/prop-types
const UserNavMobile = ({ isMenuOpenUserBar, setIsMenuOpenUserBar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && (
        <BurgerMenu>
          <Cross
            onClick={() => {
              toggleMenu();
              setIsMenuOpenUserBar(!isMenuOpenUserBar);
            }}
          >
            <use href={`${sprite}#icon-cross`} />
          </Cross>
          <Menu>
            <MenuItem
              onClick={() => {
                toggleMenu();
                setIsMenuOpenUserBar(!isMenuOpenUserBar);
              }}
            >
              <Link to="/diary">Diary</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                toggleMenu();
                setIsMenuOpenUserBar(!isMenuOpenUserBar);
              }}
            >
              <Link to="/products">Products</Link>
            </MenuItem>
            <MenuItem
              onClick={() => {
                toggleMenu();
                setIsMenuOpenUserBar(!isMenuOpenUserBar);
              }}
            >
              <Link to="/exercises">Exercises</Link>
            </MenuItem>
          </Menu>
          <LogOutBtnWrapper
            onClick={() => {
              toggleMenu();
              setIsMenuOpenUserBar(!isMenuOpenUserBar);
            }}
          >
            <LogOutBtn />
          </LogOutBtnWrapper>
        </BurgerMenu>
      )}
    </>
  );
};
export default UserNavMobile;
