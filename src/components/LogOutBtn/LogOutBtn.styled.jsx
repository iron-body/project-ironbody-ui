import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkBtn = styled(Link)`
  text-decoration: none;
  color: white;
  /* margin-left: 16px; */
`;
export const Icon = styled.svg`
  fill: transparent;
  stroke: rgba(239, 237, 232, 0.3);
  display: block;
  width: 28px;
  height: 28px;
  margin-left: 8px;
`;
