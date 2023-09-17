import { Menu, Link } from './NavAuth.styled';

const NavAuth = () => {
  return (
    <Menu>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </Menu>
  );
};
export default NavAuth;
