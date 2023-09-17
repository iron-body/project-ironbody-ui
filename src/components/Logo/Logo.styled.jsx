import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  display: flex;
  align-self: center;
  gap: var(--gap-8px);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    gap: var(--gap-8px);
  }
`;
export const VectorIcon = styled.img`
  display: block;

  border-radius: var(--br-1px);
  width: 36px;
  height: 13px;
  @media ${device.tablet} {
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
  @media ${device.desktop} {
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
`;
export const PowerpulseIcon = styled.img`
  display: block;
  width: 82px;
  height: 12px;
  @media ${device.tablet} {
    width: 99.53px;
    height: 15.26px;
  }
  @media ${device.desktop} {
    width: 99.53px;
    height: 15.26px;
  }
`;
