import styled from 'styled-components';
import { device } from '../../Constants';

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const StyledMainContentWrapper = styled.div`
  display: block;
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.desktop} {
    display: flex;
    column-gap: 32px;
  }
`;

export const StyledTablesWrapper = styled.div`
  display: block;

  @media ${device.tablet} {
    display: block;
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }
`;
