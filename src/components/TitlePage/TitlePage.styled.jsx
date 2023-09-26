import styled from 'styled-components';
import { device } from '../../Constants';

const StyledTitlePage = styled.div`
  margin-top: 40px;
  color: #efede8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
  display: inline-block;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */

  @media ${device.tablet} {
    margin-top: 72px;
    color: #efede8;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 137.5% */
  }
  @media ${device.desktop} {
    font-size: 32px;
    font-weight: 700;
    /* line-height: 1.8; */
    /* margin: 0px 0 32px 0; */
    line-height: 44px; /* 137.5% */
  }
`;

export default StyledTitlePage;
