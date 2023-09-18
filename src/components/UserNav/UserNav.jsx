import { NavMenu, Link, Menu } from './UserNav.styled';

const UserNav = () => {
  return (
    <NavMenu>
      <Menu>
        <li>
          <Link to="/diary">Diary</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/exercises">Exercises</Link>
        </li>
      </Menu>
    </NavMenu>
  );
};
export default UserNav;
