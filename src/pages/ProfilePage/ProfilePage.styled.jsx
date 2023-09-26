import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--white);
  font-family: var(--headline-style-mobile-h1);
  @media screen and (min-width: 335px) {
    width: 335px;
  }
  @media screen and (min-width: 704px) {
    width: 704px;
    padding-left: 36px;
    padding-right: 36px;
  }
  @media screen and (min-width: 1248px) {
    width: 1248px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;


export const ProfileWrapper = styled.div`
  @media screen and (min-width: 1248px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
`;