import styled from 'styled-components';

export const StepList = styled.ul`
  display: flex;
`;

export const StepItemActive = styled.li`
  &:not(:last-child) {
    margin-right: 7px;
  }

  width: 50px;
  height: 4px;
  border-radius: 2px;
  background: #ef8964;
  box-shadow: 0px 1px 10px 0px rgba(230, 83, 60, 0.8);
`;

export const StepItemNotPassed = styled.li`
  &:not(:last-child) {
    margin-right: 7px;
  }

  border-radius: 2px;
  background: #303030;
  width: 50px;
  height: 4px;
  border-radius: 2px;
`;

export const StepItemPassed = styled.li`
  &:not(:last-child) {
    margin-right: 7px;
  }

  background: #efa082;
  width: 50px;
  height: 4px;
  border-radius: 2px;
`;
