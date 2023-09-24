import styled from '@emotion/styled';
import { device } from '../../Constants';


export const StyledLink = styled.ul`
// padding-left:20 px;
display: flex;
flex-direction: column;
gap:20px;
 
@media screen and (${device.tablet}) {
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px 14px;
  
  width: 704px;
  overflow: auto;
  overflow-y: auto; 
  max-height: 90vh; 

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #ef8964;
  }
`;
