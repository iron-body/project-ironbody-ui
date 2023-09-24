import styled from 'styled-components';
import { device } from '../../Constants';

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding-top: 45px;
  margin-bottom: 45px;
  border-top: 1px solid rgba(239, 237, 232, 0.2);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const StyledMainContentWrapper = styled.div`
  display: block;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    display: flex;
    column-gap: 32px;
  }
`;

export const StyledTablesWrapper = styled.div`
  display: block;
  max-width: 375px;
  @media ${device.tablet} {
    display: block;
    max-width: 768px;
  }
  @media ${device.desktop} {
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    row-gap: 32px;
  }
`;
