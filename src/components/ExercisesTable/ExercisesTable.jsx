import * as React from 'react';
import sprite from '../../../icons.svg';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  StyledCalories,
  StyledCategory,
  StyledDel,
  StyledHeadingTable,
  StyledRec,
  StyledTable,
  StyledTableCell,
  StyledTableRaw,
  StyledTime,
  StyledTitle,
  StyledWeight,
  TableContainer,
} from './ExercisesTable.styled';

const defaultData = [
  {
    BodyPart: 'Waist',
    Equipment: 'Body weight',
    Name: '3/4 sit-up',
    Target: 'Abs',
    BurnedCalories: 220,
    Time: 60,
  },
  {
    BodyPart: 'Waist',
    Equipment: 'Body weight',
    Name: '3/4 sit-up',
    Target: 'Abs',
    BurnedCalories: 220,
    Time: 60,
  },
  {
    BodyPart: 'Waist',
    Equipment: 'Body weight',
    Name: '3/4 sit-up',
    Target: 'Abs',
    BurnedCalories: 220,
    Time: 60,
  },
  {
    BodyPart: 'Waist',
    Equipment: 'Body weight',
    Name: '3/4 sit-up',
    Target: 'Abs',
    BurnedCalories: 220,
    Time: 60,
  },
  {
    BodyPart: 'Waist',
    Equipment: 'Body weight',
    Name: '3/4 sit-up',
    Target: 'Abs',
    BurnedCalories: 220,
    Time: 60,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('BodyPart', {
    header: 'Body Part',
  }),
  columnHelper.accessor('Equipment', {
    header: 'Equipment',
  }),
  columnHelper.accessor('Name', {
    header: 'Name',
  }),
  columnHelper.accessor('Target', {
    header: 'Target',
  }),
  columnHelper.accessor('BurnedCalories', {
    header: 'BurnedCalories',
  }),
  columnHelper.accessor('Time', {
    header: 'Time',
  }),
  columnHelper.accessor('Delete', {
    cell: () => (
      <StyledDel>
        <use href={`${sprite}#icon-trash-03`} />
      </StyledDel>
    ),
    header: 'Delete',
  }),
];

const ExercisesTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <StyledHeadingTable>
        <StyledTitle>Body Part</StyledTitle>
        <StyledCategory>Equipment</StyledCategory>
        <StyledCalories>Name</StyledCalories>
        <StyledWeight>Target</StyledWeight>
        <StyledTime>Burned Calories</StyledTime>
        <p>Time</p>
      </StyledHeadingTable>
      <TableContainer>
        <StyledTable>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <StyledTableRaw key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <StyledTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableCell>
                ))}
              </StyledTableRaw>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default ExercisesTable;
