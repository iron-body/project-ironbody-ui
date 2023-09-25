import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from '../../Constants';

export const Container = styled.div`
  height: 32px;
  display: flex;
  margin-top: 20px;
  color: #efede8;
  @media screen and (${device.mobile}) {
    height: 42px;
  }

  @media screen and (${device.tablet}) {
    margin-bottom: 0px;
  }



`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (${device.mobile}) {
    margin-right: 28px;
  }
  @media screen and (${device.tablet}) {
    margin-right: 0px;
    margin-top: 6px;
    margin-left: 20px;
  }

  &:hover,
  &:focus {
    transition-property: color;
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--cubic-bezier);
    color: #efede8;
    &:after {
      content: '';
      margin-top: 10px;
      width: 100%;
      height: 3px;
      background-color: #ef8964;
      border-radius: 2px;
    }
  }
`;
