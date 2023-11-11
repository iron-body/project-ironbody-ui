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
  StyledCell100,
  StyledCell30,
  StyledDel,
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

// const defaultData = [
//   {
//     firstName: 'tanner',
//     lastName: 'linsley',
//     age: 24,
//     visits: 100,
//     status: 'In Relationship',
//     progress: 50,
//   },
//   {
//     firstName: 'tandy',
//     lastName: 'miller',
//     age: 40,
//     visits: 40,
//     status: 'Single',
//     progress: 80,
//   },
//   {
//     firstName: 'joe',
//     lastName: 'dirte',
//     age: 45,
//     visits: 20,
//     status: 'Complicated',
//     progress: 10,
//   },
// ];

// Old code

// const columnHelper = createColumnHelper();

// const columns = [
//   columnHelper.accessor('title', {
//     cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
//     header: 'Title',
//   }),
//   columnHelper.accessor('category', {
//     cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
//     header: 'Category',
//   }),
//   columnHelper.accessor('calories', {
//     cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
//     header: 'Calories',
//   }),
//   columnHelper.accessor('amount', {
//     cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
//     header: 'Weight',
//   }),
//   columnHelper.accessor('recommended', {
//     cell: info => <StyledRec>{info.getValue() === true ? 'Yes' : 'No'}</StyledRec>,
//     // header: 'Recommended',
//   }),
//   columnHelper.accessor('Delete', {
//     cell: () => (
//       <StyledDel>
//         <use href={`${sprite}#icon-trash-03`} />
//       </StyledDel>
//     ),
//     header: '',
//   }),
// ];

const ProductsTable = () => {
  const isMobile = useMediaQuery('(max-width: 375px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
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
      cell: info => <StyledCategory>{info.getValue()}</StyledCategory>,
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
      header: 'Delete',
      cell: () => (
        <StyledDel>
          <use href={`${sprite}#icon-trash-03`} />
        </StyledDel>
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
