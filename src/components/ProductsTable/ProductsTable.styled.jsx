import styled from '@emotion/styled';
import { device } from '../../Constants';

export const TableContainer = styled.div`
  height: 100vh;
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
  @media ${device.tablet} {
    max-height: 165px;
  }
`;

export const StyledHeadingTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  color: rgba(239, 137, 100, 1);
  font-size: 12px;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;
export const StyledTitle = styled.p`
  @media ${device.tablet} {
    margin-right: 280px;
  }
  @media ${device.desktop} {
    margin-right: 315px;
  }
`;
export const StyledCategory = styled.p`
  @media ${device.tablet} {
    margin-right: 45px;
  }
  @media ${device.desktop} {
    margin-right: 60px;
  }
`;
export const StyledCalories = styled.p`
  @media ${device.tablet} {
    margin-right: 35px;
  }
  @media ${device.desktop} {
    margin-right: 45px;
  }
`;
export const StyledWeight = styled.p`
  @media ${device.tablet} {
    margin-right: 40px;
  }
  @media ${device.desktop} {
    margin-right: 50px;
  }
`;

export const StyledTable = styled.table`
  color: white;
  width: 100%;
  border-collapse: separate;
  border-spacing: 8px;
`;

export const StyledTableRaw = styled.tr`
  /* display: block; */
`;
export const StyledTableCell = styled.td`
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 10px;
  border: 1px solid gray;
  &:last-child {
    border: none;
  }
  border-radius: 12px;
  font-size: 16px;
  padding: 12px 0px 12px 8px;
  @media ${device.tablet} {
    display: table-cell;
    margin-bottom: 0px;
  }
`;

export const StyledCell100 = styled.div`
  width: 297px;
  @media ${device.tablet} {
    width: 100%;
  }
`;
export const StyledCell30 = styled.div`
  width: 81px;
  @media ${device.tablet} {
    width: 100%;
  }
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
