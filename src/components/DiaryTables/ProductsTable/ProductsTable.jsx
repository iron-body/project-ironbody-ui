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
  // StyledCalories,
  StyledCategory,
  // StyledCell100,
  // StyledCell30,
  StyledDel,
  StyledDelete,
  StyledRecommended,
  // StyledHeadingTable,
  // StyledRec,
  StyledTable,
  StyledTableCell,
  // StyledTableRaw,
  // StyledTbody,
  StyledThead,
  StyledTitle,
  StyledWeight,
  // StyledWeight,
  TableContainer,
} from './ProductsTable.styled';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSelectedDate } from '../../../redux/selectedDate/dateSelector';
import axios from 'axios';

const ProductsTable = () => {
  const isMobile = useMediaQuery('(max-width: 375px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const dateInStore = useSelector(getSelectedDate);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getUserProductsArray = async date => {
      const userProductsArray = await axios(
        `/products/userproducts${
          date &&
          `?date=${new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}`
        }`
      );
      const {
        data: { dataList },
      } = userProductsArray;
      // console.log('userProductsArray', userProductsArray);
      // console.log(dataList);
      setData([...dataList]);
    };
    getUserProductsArray(dateInStore);
  }, [dateInStore]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('title', {
      header: 'Title',
      cell: info => (
        <StyledTitle>
          {info.getValue().length >= 20 ? `${info.getValue().slice(0, 20)}..` : info.getValue()}
        </StyledTitle>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: info => (
        <StyledCategory>
          {info.getValue().length >= 20 ? `${info.getValue().slice(0, 15)}...` : info.getValue()}
        </StyledCategory>
      ),
    }),
    columnHelper.accessor('calories', {
      header: 'Calories',
      cell: info => <StyledCalories>{info.getValue()}</StyledCalories>,
    }),
    columnHelper.accessor('amount', {
      header: 'Weight',
      cell: info => <StyledWeight>{info.getValue()}</StyledWeight>,
    }),
    columnHelper.accessor('recommended', {
      header: 'Recommended',
      cell: info => (
        <StyledRecommended recommended={info.getValue()}>
          {info.getValue() === true ? 'Yes' : 'No'}
        </StyledRecommended>
      ),
    }),
    columnHelper.accessor('delete', {
      header: '',
      cell: () => (
        <StyledDelete>
          <StyledDel>
            <use href={`${sprite}#icon-trash-03`} />
          </StyledDel>
        </StyledDelete>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableContainer>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <StyledThead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </StyledThead>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <StyledTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableCell>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </>
    // <>
    //   {!isMobile && (
    //     <StyledHeadingTable>
    //       <StyledTitle>Title</StyledTitle>
    //       <StyledCategory>Category</StyledCategory>
    //       <StyledCalories>Calories</StyledCalories>
    //       <StyledWeight>Weight</StyledWeight>
    //       <p>Recommended</p>
    //     </StyledHeadingTable>
    //   )}
    //   <TableContainer>
    //     <StyledTable>
    //       <StyledTbody>
    //         {table.getRowModel().rows.map(row => (
    //           <StyledTableRaw key={row.id}>
    //             {row.getVisibleCells().map(cell => (
    //               <StyledTableCell key={cell.id}>
    //                 {isMobile && (
    //                   <StyledHeadingTable>
    //                     {flexRender(cell.column.columnDef.header)}
    //                   </StyledHeadingTable>
    //                 )}
    //                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
    //               </StyledTableCell>
    //             ))}
    //           </StyledTableRaw>
    //         ))}
    //       </StyledTbody>
    //     </StyledTable>
    //   </TableContainer>
    // </>
  );
};

export default ProductsTable;
