import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';



export const BtnStyled = styled(Link)`
  text-decoration: none;
  color: var(--white);
  background-color: var(--orange);
  border-radius: var(--br-12px);
  border: 1px solid var(--color-whitesmoke-200);
  &:hover,
  &:focus {
    border: 1px solid var(--white);
  }
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-21xl);
  align-items: center;
  justify-content: center;
  width: 87px;
  height: 18px;

  @media ${device.tablet} {
    border-radius: var(--br-12px);
    display: flex;
    flex-direction: row;
    margin-left:185px;
    margin-top: 140px;

    padding: 15px 40px;
    align-items: center;
    justify-content: center;
    height: 24px;
  }
`;

export const Styled = styled.div`
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
