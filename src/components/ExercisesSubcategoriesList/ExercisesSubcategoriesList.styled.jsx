import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from '../../Constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  
  @media screen and (${device.tablet}) {
    margin-top: 64px;
    
  }
`;

export const Title = styled.h1`
  color: #ffffff;
`;

export const Ul = styled.ul`
  list-style: none;

  @media screen and (${device.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* justify-content: center; */
    justify-content: start;
    justify-content: first baseline;
    padding-left: 32px;
    padding-right: 32px;
    gap: 32px 16px;
  }

  @media screen and (${device.desktop}) {
    padding-left: 94px;
    padding-right: 94px;
  }
`;

export const StyledLink = styled(Link)`
  @media screen and (${device.mobile}) {
    margin-bottom: 20px;
  }
  @media screen and (${device.tablet}) {
    margin: 0;
  }
  color: #ffffff; /* White text color */

  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
