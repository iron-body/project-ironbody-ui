import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedDate } from '../../../redux/selectedDate/dateSelector';
import { getExercisesTableArray } from '../../../redux/exercisesTable/exercisesTableOperations';
import {
  selectExercisesTableArray,
  selectExercisesTableIsError,
  selectExercisesTableIsLoading,
} from '../../../redux/exercisesTable/exercisesTableSelectors';

import { useMediaQuery } from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  StyledBodyPart,
  StyledCell100,
  StyledCell30,
  StyledDel,
  StyledEquipment,
  StyledHeadingTable,
  StyledName,
  StyledTable,
  StyledTableCell,
  StyledTableRaw,
  StyledTime,
  StyledWeight,
  TableContainer,
} from './ExercisesTable.styled';
import sprite from '../../../../icons.svg';
import { Puff } from 'react-loader-spinner';
import { StyledNotFoundProduct, TableErrorWrapper } from '../ProductsTable/ProductsTable.styled';
// import useLocalStorage from '../../../lib/useLocalStorage';

// const defaultData = [
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
//   {
//     BodyPart: 'Waist',
//     Equipment: 'Body weight',
//     Name: '3/4 sit-up',
//     Target: 'Abs',
//     BurnedCalories: 220,
//     Time: 60,
//   },
// ];

const ExercisesTable = () => {
  // const [selectedDate, setSelectedDate] = useLocalStorage('selectedDate', new Date());
  // const [selectedDate, setSelectedDate] = React.useState(() => {
  //   const storedDate = localStorage.getItem('selectedDate');
  //   return storedDate ? new Date(storedDate) : new Date();
  // });
  // const isMobile = useMediaQuery('(max-width: 767px)');
  // const [data, setData] = React.useState(() => [...defaultData]);
  // const [loading, setLoading] = React.useState(true);
  const dateInStore = useSelector(getSelectedDate);
  const dispatch = useDispatch();
  // const [data, setData] = useState(useSelector(selectExercisesTableArray));
  const data = useSelector(selectExercisesTableArray);
  const exercisesTableIsLoading = useSelector(selectExercisesTableIsLoading);
  const exercisesTableIsError = useSelector(selectExercisesTableIsError);

  useEffect(() => {
    dispatch(getExercisesTableArray(dateInStore));
  }, [dateInStore, dispatch]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('bodyPart', {
      cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
      header: 'Body Part',
    }),
    columnHelper.accessor('equipment', {
      cell: info => (
        <StyledCell100>{info.getValue() ? info.getValue() : 'Missing data'}</StyledCell100>
      ),
      header: 'Equipment',
    }),
    columnHelper.accessor('name', {
      cell: info => <StyledCell100>{info.getValue()}</StyledCell100>,
      header: 'Name',
    }),
    columnHelper.accessor('target', {
      cell: info => (
        <StyledCell30>{info.getValue() ? info.getValue() : 'Missing data'}</StyledCell30>
      ),
      header: 'Target',
    }),
    columnHelper.accessor('calories', {
      // Must be  Burned Calories!
      cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
      header: 'BurnedCalories',
    }),
    columnHelper.accessor('time', {
      cell: info => <StyledCell30>{info.getValue()}</StyledCell30>,
      header: 'Time',
    }),
    columnHelper.accessor('_id', {
      cell: () => (
        <StyledDel>
          <use href={`${sprite}#icon-trash-03`} />
        </StyledDel>
      ),
      header: '',
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // const accessToken = useSelector(state => state.auth.accessToken);

  // // Function to handle changes in local storage
  // const handleStorageChange = React.useCallback(
  //   e => {
  //     if (e.key === 'selectedDate') {
  //       setSelectedDate(new Date(e.newValue));
  //     }
  //   },
  //   [setSelectedDate]
  // );

  // React.useEffect(() => {
  //   window.addEventListener('storage', handleStorageChange);
  //   console.log('storage changed');
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, [handleStorageChange]);

  // React.useEffect(() => {
  //   console.log(`selected date is ${selectedDate}`);
  //   fetch(
  //     `https://iron-body-project-backend.onrender.com/api/exercises/byDate?date=${selectedDate}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     }
  //   )
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(apiData => {
  //       if (Array.isArray(apiData) && apiData.length > 0) {
  //         setData(apiData);
  //       } else {
  //         setData(defaultData);
  //       }
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, [selectedDate, accessToken]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      {exercisesTableIsLoading && (
        <TableErrorWrapper>
          <Puff
            height="90"
            width="90"
            radius={1}
            color="#e6533c"
            ariaLabel="products-table-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </TableErrorWrapper>
      )}
      {data.length <= 0 ? (
        <TableErrorWrapper>
          <StyledNotFoundProduct>Not found exercises</StyledNotFoundProduct>
        </TableErrorWrapper>
      ) : (
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      {/* {!isMobile && (
        <StyledHeadingTable>
          <StyledBodyPart>Body Part</StyledBodyPart>
          <StyledEquipment>Equipment</StyledEquipment>
          <StyledName>Name</StyledName>
          <StyledWeight>Target</StyledWeight>
          <StyledTime>Burned Calories</StyledTime>
          <p>Time</p>
        </StyledHeadingTable>
      )} */}

      {/* <TableContainer>
        <StyledTable>
          <tbody>
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
          </tbody>
        </StyledTable>
      </TableContainer> */}
    </>
  );
};

export default ExercisesTable;
