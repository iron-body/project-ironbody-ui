import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top:40px;
  padding:20px;
  // background-color:blue;

  @media screen and (min-width: 375px) {
    width: 375px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-x: hidden;
  }
;
  @media screen and (min-width: 768px) {
    margin-top:72px;
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  };
}

`;



