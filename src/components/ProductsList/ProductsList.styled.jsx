import styled from '@emotion/styled';
import { device } from '../../Constants';

export const ProductList = styled.ul`
  color: white;
  font-size: 17px;
  list-style: none;
     


    @media ${device.tablet} {
      color: white;
      font-size: 17px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 29px 14px;
      height: 660px;
      width: 704px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 8px;
        border-radius: 12px;
        background: rgba(239, 237, 232, 0.1);
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: #ef8964;
      }
    }

    @media ${device.desktop} {
      color: white;
      font-size: 17px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 29px 14px;
      height: 487px;
      width: 850px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 8px;
        border-radius: 12px;
        background: rgba(239, 237, 232, 0.1);
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: #ef8964;
      }
    }
  }
`;

export const ProductItem = styled.li`
  margin-bottom: 20px;
  width: 335px;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media ${device.tablet} {
    margin-bottom: 0;
    width: 335px;
    height: auto;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }

  @media ${device.desktop} {
    width: 405px;
    height: auto;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: rgba(239, 237, 232, 0.05);
  }
`;

export const BtnDel = styled.button`
width: 100px;
height: 30px;
color: white;
background-color: rgb(29, 28, 28);
font-size: 15px;
font-weight: 500;
border-radius: 5px;
transition: transform 0.3s;
  }
`;

export const Name = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorMessege = styled.p`
  margin-top: 132px;
  width: 580px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const BottomError = styled.p`
  color: #e6533c;
  margin-top: 16px;
`;

export const StartError = styled.span`
  color: #e6533c;
`;
