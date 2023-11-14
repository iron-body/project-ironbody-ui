import { useState, useEffect } from 'react';
import { ButtonsDiv, DaySwitchContainer, StyledButton, StyledDate } from './DaySwitch.styled';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import { useDispatch, useSelector } from 'react-redux';
import { getRegistrationDate, getSelectedDate } from '../../redux/selectedDate/dateSelector';
import { changeDate } from '../../redux/selectedDate/dateAction';

function DaySwitch() {
  // Creating the new logic for work with time in redux store
  const dateInStore = useSelector(getSelectedDate);
  const registrationDate = useSelector(getRegistrationDate);
  // console.log('registrationDate', registrationDate);

  const dispatch = useDispatch();
  // New function for change date in ReduxStore
  const handleDateChange = date => {
    // console.log(date);
    setSelectedDate(date);
  };

  // ------ Old code
  // const [selectedDate, setSelectedDate] = useState(() => {
  // Attempt to retrieve the selectedDate from local storage
  // const storedDate = localStorage.getItem('selectedDate');
  // return storedDate ? new Date(storedDate) : new Date();
  // });
  const [selectedDate, setSelectedDate] = useState(new Date(dateInStore));
  // const [minDate, setMinDate] = useState(new Date(registrationDate)); // Дата реєстрації користувача
  const [minDate, setMinDate] = useState(null);
  // const [showDatepicker, setShowDatepicker] = useState(false);

  useEffect(() => {
    // Можливо, ви отримуєте дату реєстрації користувача з API або іншим способом
    // Наприклад, розкоментуйте цей рядок і встановіть правильну дату реєстрації
    // registrationDate;
    setMinDate(new Date(registrationDate));
  }, []);

  // useEffect(() => {
  //   // Save the selectedDate to local storage whenever it changes
  //   localStorage.setItem('selectedDate', selectedDate.toISOString());
  //   console.log('storing selectedDate to local');
  // }, [selectedDate]);
  useEffect(() => {
    // Save the selectedDate to redux store whenever it changes
    dispatch(changeDate(selectedDate.toUTCString()));
    // console.log('storing selectedDate to Redux Store');
  }, [selectedDate, dispatch]);

  // Old function for show/hide datepicker - hide, because datepicker has native functionality
  // const handleFormattedDateClick = () => {
  //   console.log('click!');
  //   setShowDatepicker(!showDatepicker);
  // };

  const handlePreviousDay = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setSelectedDate(previousDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);

    setSelectedDate(nextDate);
  };
  // Old function for change date picked in DayPicker
  // const handleDateChange = dateValue => {
  //   setSelectedDate(dateValue);
  // };

  // Форматуємо обрану дату в формат dd/mm/YYYY
  // const formattedDate = selectedDate.toLocaleDateString('en-GB', {
  //   day: '2-digit',
  //   month: '2-digit',
  //   year: 'numeric',
  // });

  return (
    <DaySwitchContainer>
      {/* <StyledDate onClick={handleFormattedDateClick}> */}
      <StyledDate>
        {/* {formattedDate} */}
        {/* <CalendarIcon width="16" height="16">
          <use href={`${sprite}#icon-calendar`}></use>
        </CalendarIcon> */}
        {<StyledDatepicker date={selectedDate} minDate={minDate} onChange={handleDateChange} />}
      </StyledDate>
      <ButtonsDiv>
        <StyledButton onClick={handlePreviousDay} disabled={minDate && selectedDate <= minDate}>
          {'<'}
        </StyledButton>
        <StyledButton onClick={handleNextDay}>{'>'}</StyledButton>
      </ButtonsDiv>
    </DaySwitchContainer>
  );
}

export default DaySwitch;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import sprite from '../../../icons.svg';
// import { CalendarIcon, DaySwitchContainer, StyledButton, StyledDate } from './DaySwitch.styled';
// import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
// import { setSelectedDate } from '../../redux/selectedDate/dateReducer';

// function DaySwitch() {
//   const selectedDate = useSelector(state => state.selectedDate);
//   const dispatch = useDispatch();

//   const minDate = new Date(); // Set your minDate logic here
//   const showDatepicker = false; // Initialize the state as needed

//   useEffect(() => {
//     // Dispatch an action to set the initial selectedDate when the component mounts
//     dispatch(setSelectedDate(new Date()));
//   }, [dispatch]);

//   const handleFormattedDateClick = () => {
//     console.log('click!');
//     // You can toggle the datepicker here if needed
//   };

//   const handlePreviousDay = () => {
//     const previousDate = new Date(selectedDate);
//     previousDate.setDate(previousDate.getDate() - 1);
//     dispatch(setSelectedDate(previousDate));
//   };

//   const handleNextDay = () => {
//     const nextDate = new Date(selectedDate);
//     nextDate.setDate(nextDate.getDate() + 1);
//     dispatch(setSelectedDate(nextDate));
//   };

//   const handleDateChange = date => {
//     dispatch(setSelectedDate(date));
//   };

//   // Format the selectedDate
//   const formattedDate =
//     selectedDate && selectedDate instanceof Date
//       ? selectedDate.toLocaleDateString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//         })
//       : new Date().toLocaleDateString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//         });
//   return (
//     <DaySwitchContainer>
//       <StyledDate onClick={handleFormattedDateClick}>
//         {formattedDate}
//         <CalendarIcon width="16" height="16">
//           <use href={`${sprite}#icon-calendar`}></use>
//         </CalendarIcon>
//         {showDatepicker && (
//           <StyledDatepicker date={selectedDate} minDate={minDate} onChange={handleDateChange} />
//         )}
//       </StyledDate>
//       <StyledButton onClick={handlePreviousDay} disabled={minDate && selectedDate <= minDate}>
//         {'<'}
//       </StyledButton>
//       <StyledButton onClick={handleNextDay}>{'>'}</StyledButton>
//     </DaySwitchContainer>
//   );
// }

// export default DaySwitch;
