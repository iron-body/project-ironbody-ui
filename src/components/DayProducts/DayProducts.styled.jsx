import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../Constants';

export const StyledWrapper = styled.div`
  position: relative;
  min-width: 335px;
  min-height: 234px;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media ${device.desktop} {
    min-width: 826px;
    min-height: 234px;
  }
`;
export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  /* margin-bottom: 32px; */
`;
export const StyledTitle = styled.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.2;
`;
export const StyledLink = styled(Link)`
  color: #e6533c;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const StyledNoFoundText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
