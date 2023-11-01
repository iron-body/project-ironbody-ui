import React, { useEffect, useState } from 'react';
import sprite from '../../../../icons.svg';

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
  StyledTbody,
  StyledTitle,
  StyledWeight,
  TableContainer,
} from './ProductsTable.styled';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSelectedDate } from '../../../redux/selectedDate/dateSelector';
import axios from 'axios';

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
  columnHelper.accessor('title', {
    cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
    header: 'Title',
  }),
  columnHelper.accessor('category', {
    cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
    header: 'Category',
  }),
  columnHelper.accessor('calories', {
    cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
    header: 'Calories',
  }),
  columnHelper.accessor('amount', {
    cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
    header: 'Weight',
  }),
  columnHelper.accessor('recommended', {
    cell: info => <StyledRec>{info.getValue() === true ? 'Yes' : 'No'}</StyledRec>,
    header: 'Recommended',
  }),
  columnHelper.accessor('Delete', {
    cell: () => (
      <StyledDel>
        <use href={`${sprite}#icon-trash-03`} />
      </StyledDel>
    ),
    header: '',
  }),
];

const ProductsTable = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const dateInStore = useSelector(getSelectedDate);
  // eslint-disable-next-line no-unused-vars
  // const [data, setData] = React.useState(() => [...defaultData]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserProductsArray = async () => {
      const userProductsArray = await axios('/products/userproducts');
      const {
        data: { dataList },
      } = userProductsArray;
      // console.log('userProductsArray', userProductsArray);
      // console.log(dataList);
      setData([...dataList]);
    };
    getUserProductsArray();
  }, [dateInStore]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {!isMobile && (
        <StyledHeadingTable>
          <StyledTitle>Title</StyledTitle>
          <StyledCategory>Category</StyledCategory>
          <StyledCalories>Calories</StyledCalories>
          <StyledWeight>Weight</StyledWeight>
          <p>Recommended</p>
        </StyledHeadingTable>
      )}
      <TableContainer>
        <StyledTable>
          <StyledTbody>
            {table.getRowModel().rows.map(row => (
              <StyledTableRaw key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <StyledTableCell key={cell.id}>
                    {isMobile && (
                      <StyledHeadingTable>
                        {flexRender(cell.column.columnDef.header)}
                      </StyledHeadingTable>
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableCell>
                ))}
              </StyledTableRaw>
            ))}
          </StyledTbody>
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
