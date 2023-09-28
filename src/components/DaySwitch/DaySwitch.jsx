import { useState, useEffect } from 'react';
import sprite from '../../../icons.svg';
import { CalendarIcon, DaySwitchContainer, StyledButton, StyledDate } from './DaySwitch.styled';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';

function DaySwitch() {
  const [selectedDate, setSelectedDate] = useState(() => {
    // Attempt to retrieve the selectedDate from local storage
    const storedDate = localStorage.getItem('selectedDate');
    return storedDate ? new Date(storedDate) : new Date();
  });
  const [minDate, setMinDate] = useState(null); // Дата реєстрації користувача
  const [showDatepicker, setShowDatepicker] = useState(false);

  useEffect(() => {
    // Можливо, ви отримуєте дату реєстрації користувача з API або іншим способом
    // Наприклад, розкоментуйте цей рядок і встановіть правильну дату реєстрації

    setMinDate(new Date());
  }, []);

  useEffect(() => {
    // Save the selectedDate to local storage whenever it changes
    localStorage.setItem('selectedDate', selectedDate.toISOString());
    console.log('storing selectedDate to local');
  }, [selectedDate]);

  const handleFormattedDateClick = () => {
    console.log('click!');
    setShowDatepicker(!showDatepicker);
  };
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
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  // Форматуємо обрану дату в формат dd/mm/YYYY
  const formattedDate = selectedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <DaySwitchContainer>
      <StyledDate onClick={handleFormattedDateClick}>
        {formattedDate}
        <CalendarIcon width="16" height="16">
          <use href={`${sprite}#icon-calendar`}></use>
        </CalendarIcon>
        {showDatepicker && (
          <StyledDatepicker date={selectedDate} minDate={minDate} onChange={handleDateChange} />
        )}
      </StyledDate>
      <StyledButton onClick={handlePreviousDay} disabled={minDate && selectedDate <= minDate}>
        {'<'}
      </StyledButton>
      <StyledButton onClick={handleNextDay}>{'>'}</StyledButton>
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
