import styled from 'styled-components';
import { device } from '../../Constants';

const StyledContainer = styled.div`
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media ${device.desktop} {
    width: 1440px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default StyledContainer;
