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
  StyledCell100,
  StyledCell30,
  StyledDel,
  StyledHeadingTable,
  StyledRec,
  StyledTable,
  StyledTableCell,
  StyledTableRaw,
  StyledTitle,
  StyledWeight,
  TableContainer,
} from './ProductsTable.styled';

const defaultData = [
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
  {
    Title: 'Bread Hercules grain',
    Category: 'Flour',
    Calories: 289,
    Weight: 100,
    Recommended: 'Yes',
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('Title', {
    cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
    header: 'Title',
  }),
  columnHelper.accessor('Category', {
    cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
    header: 'Category',
  }),
  columnHelper.accessor('Calories', {
    cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
    header: 'Calories',
  }),
  columnHelper.accessor('Weight', {
    cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
    header: 'Weight',
  }),
  columnHelper.accessor('Recommended', {
    cell: info => <StyledRec>{info.getValue()}</StyledRec>,
    header: 'Recommended',
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

const ProductsTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <StyledHeadingTable>
        <StyledTitle>Title</StyledTitle>
        <StyledCategory>Category</StyledCategory>
        <StyledCalories>Calories</StyledCalories>
        <StyledWeight>Weight</StyledWeight>
        <p>Recommended</p>
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

export default ProductsTable;
