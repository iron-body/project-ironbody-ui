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
    header: 'Title',
  }),
  columnHelper.accessor('Category', {
    header: 'Category',
  }),
  columnHelper.accessor('Calories', {
    header: 'Calories',
  }),
  columnHelper.accessor('Weight', {
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
