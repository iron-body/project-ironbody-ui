import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';
export const BtnSaveStyled = styled(Link)`
  text-decoration: none;
  border-radius: 12px;
  color: rgba(239, 237, 232, 0.6);
  border: 1px solid var(--orange);
  background: #e6533c;
  width: 115px;
  height: 42px;
  &:hover,
  &:focus {
    background: rgba(151, 151, 151, 0);
    border: 1px solid var(--orange);
  }
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 0.05;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    width: 144px;
    height: 56px;
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
  }
`;
export const SaveStyled = styled.div` 
  position: relative;
  line-height: 18px;
  font-weight: 500;
  @media ${device.tablet} {
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
  @media ${device.desktop} {
    position: relative;
    line-height: 24px;
    font-weight: 500;
  }
`;
