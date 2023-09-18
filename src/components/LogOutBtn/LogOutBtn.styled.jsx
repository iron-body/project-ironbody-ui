import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-left: 16px;
`;
export const Icon = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 0.3);
  display: block;
  width: 28px;
  height: 28px;
  gap: 16px;
`;
