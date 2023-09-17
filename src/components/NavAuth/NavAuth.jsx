import { NavMenu, Link, Menu } from './NavAuth.styled';

const NavAuth = () => {
  return (
    <NavMenu>
      <Menu>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </Menu>
    </NavMenu>
  );
};
export default NavAuth;
