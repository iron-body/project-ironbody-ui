import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



export const Container = styled.div`
  display: flex;
margin-top:20px;
margin-bottom: 20 px;
  color: #efede8;
  `;


  export const StyledLink= styled(Link)`
  padding-top: 20 px;

  margin-left:20px;
  color: rgba(239, 237, 232, 0.4);
  &:hover,
  &:focus {
    color: var(--orange);
     }


  `;

  


