import { useState } from 'react';
import { BurgerMenu, Cross, Link, Menu, MenuItem } from './UserNavMobile.styled';

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
            <MenuItem>
              <Link href="/diary">Diary</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/products">Products</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/exercises">Exercises</Link>
            </MenuItem>
          </Menu>
        </BurgerMenu>
      )}
    </>
  );
};
export default UserNavMobile;
