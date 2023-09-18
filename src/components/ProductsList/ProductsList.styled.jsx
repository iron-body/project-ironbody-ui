import styled from '@emotion/styled';

export const ProductList = styled.ul`
  color: white;
  font-size: 17px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px 14px;
  height: 487px;
  width: 842px;
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
`;

export const ProductItem = styled.li`
  width: 405px;
  height: auto;
    // padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
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
