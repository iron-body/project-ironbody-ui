import styled from 'styled-components';
import { device } from '../../Constants';

const StyledContainer = styled.div`
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
  }
  @media ${device.desktop} {
    width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
    padding-bottom: 68px;
  }
`;

export default StyledContainer;
