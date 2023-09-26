import styled from '@emotion/styled';
import { device } from '../../Constants';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${props => props.img});
  background-size: cover;
  box-sizing: border-box;
  border-radius: var(--br-12px);
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
    // overflow-x: hidden;
  }

  @media screen and (${device.tablet}) {
    width: 224px;
  }
  @media screen and (${device.desktop}) {
    width: 237px;
  }
`;

export const Title = styled.p`
  color: #efede8;
  font-size: 20px;
  margin-block-end: 15px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Categorie = styled.p`
  color: #efede8;
  font-size: 18px;
  opacity: 0.4;
`;
