import styled from '@emotion/styled';
import { device } from '../../Constants';

export const TableContainer = styled.div`
  max-height: 165px;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-corner {
    background-color: #f1f1f1;
  }
  @media ${device.desktop} {
  }
`;

export const StyledHeadingTable = styled.div`
  display: block;
  padding-left: 10px;
  color: rgba(239, 137, 100, 1);
  font-size: 12px;
  @media ${device.tablet} {
    display: flex;
  }
`;
export const StyledTitle = styled.p`
  margin-right: 315px;
`;
export const StyledCategory = styled.p`
  margin-right: 60px;
`;
export const StyledCalories = styled.p`
  margin-right: 40px;
`;
export const StyledWeight = styled.p`
  margin-right: 50px;
`;

export const StyledTable = styled.table`
  color: white;
  width: 100%;
  border-collapse: separate;
  border-spacing: 8px;
`;

export const StyledTableRaw = styled.tr`
  /* height: 40px; */
`;
export const StyledTableCell = styled.td`
  border: 1px solid gray;
  &:last-child {
    border: none;
  }
  border-radius: 12px;
  font-size: 16px;
  padding: 12px 0px 12px 8px;
`;
export const StyledRec = styled.p`
  /* width: 25px; */
  position: relative;
  display: inline-block; /* Make the text and circle inline */
  padding-right: 3px;
  &::before {
    content: ''; /* Create an empty pseudo-element */
    display: inline-block;
    width: 10px; /* Adjust the width of the circle */
    height: 10px; /* Adjust the height of the circle */
    background-color: green; /* Set the background color to green */
    border-radius: 50%; /* Make it a circle */
    margin-right: 5px; /* Adjust the space between text and circle */
    vertical-align: middle;
  }
`;
export const StyledDel = styled.svg`
  fill: transparent;
  stroke: rgba(239, 137, 100, 1);
  display: block;
  width: 20px;
  height: 20px;
`;
