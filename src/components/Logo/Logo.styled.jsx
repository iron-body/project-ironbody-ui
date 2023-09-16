import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  ${'' /* position: absolute; */}
  ${
    '' /* top: 44px;
  left: 20px; */
  }
  ${'' /* width: 126px; */}
  display: flex;
  align-self: center;
  ${
    '' /* flex-direction: row;
  align-items: center;
  justify-content: flex-start; */
  }
  gap: var(--gap-8px);
  @media ${device.tablet} {
    ${
      '' /* position: absolute;
    top: 32px;
    left: 32px; */
    }
    ${'' /* display: flex; */}
    ${
      '' /* flex-direction: row;
    align-items: center;
    justify-content: flex-start; */
    }
    ${'' /* gap: var(--gap-8px); */}
  }
  @media ${device.desktop} {
    ${
      '' /* position: absolute;
    top: 132px;
    left: 96px; */
    }
    ${'' /* display: flex; */}
    ${'' /* flex-direction: row; */}
    ${'' /* align-items: center; */}
    ${'' /* justify-content: flex-start; */}
    gap: var(--gap-8px);
  }
`;
export const VectorIcon = styled.img`
  display: block;
  position: relative;
  border-radius: var(--br-1px);
  width: 36px;
  height: 13px;
  @media ${device.tablet} {
    position: relative;
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
  @media ${device.desktop} {
    position: relative;
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
`;
export const PowerpulseIcon = styled.img`
  display: block;
  position: relative;
  width: 82px;
  height: 12px;
  @media ${device.tablet} {
    position: relative;
    width: 99.53px;
    height: 15.26px;
  }
  @media ${device.desktop} {
    position: relative;
    width: 99.53px;
    height: 15.26px;
  }
`;
