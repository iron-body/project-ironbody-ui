import { useState } from 'react';
import { BurgerMenu, Cross, Link, LogOutBtnWrapper, Menu, MenuItem } from './UserNavMobile.styled';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const UserNavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && (
        <BurgerMenu>
          <Cross onClick={toggleMenu}>
            <img src={'/cross.png'} alt="cross" />
          </Cross>
          <Menu>
            <MenuItem onClick={toggleMenu}>
              <Link to="/diary">Diary</Link>
            </MenuItem>
            <MenuItem onClick={toggleMenu}>
              <Link to="/products">Products</Link>
            </MenuItem>
            <MenuItem onClick={toggleMenu}>
              <Link to="/exercises">Exercises</Link>
            </MenuItem>
          </Menu>
          <LogOutBtnWrapper onClick={toggleMenu}>
            <LogOutBtn />
          </LogOutBtnWrapper>
        </BurgerMenu>
      )}
    </>
  );
};
export default UserNavMobile;
