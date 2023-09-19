import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-right: 16px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const MenuItemAvatar = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;
`;
export const AuthIcon = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 0.3);
  display: block;
  width: 28px;
  height: 28px;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 400;
  &:hover {
    color: rgba(239, 137, 100, 1);
  }
`;
