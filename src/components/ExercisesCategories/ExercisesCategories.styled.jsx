import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from '../../Constants';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  /* margin-bottom: 20 px; */
  color: #efede8;
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: rgba(239, 237, 232, 0.4);

  @media screen and (${device.mobile}) {
    margin-right: 28px;
    /* height: 28px;
    margin-bottom: 20px; */
  }
  @media screen and (${device.tablet}) {
    height: 32px;
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
      margin-top: 4px;
      width: 100%;
      height: 3px;
      background-color: #ef8964;
      border-radius: 2px;
      @media ${device.tablet} {
        margin-top: 10px;
      }
    }
  }
`;
