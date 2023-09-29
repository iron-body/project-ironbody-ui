/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import sprite from '../../../icons.svg';

// import {
// CalendarGlobalStyles,
// CalendarIcon,
// DaySwitchContainer,
// StyledButton,
// StyledDate,
// } from './ParamsFormDaySwitch.styled';
import moment from 'moment';

import { forwardRef, useEffect, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  CalendarIcon,
  DaySwitchContainer,
  StyledButton,
  StyledDate,
} from './ParamsFormDaySwitch.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function ParamsFormDaySwitch({ onDateChange }) {
  const currentDate = new Date();
  const date18yearsAgo = moment().subtract(18, 'years').toDate();
  const [selectedDate, setSelectedDate] = useState(date18yearsAgo);

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate]);

  const Btn = forwardRef(({ value, onClick }, ref) => {
    return (
      <StyledDate onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd.MM.yyyy')}
      </StyledDate>
    );
  });

  return (
    <DaySwitchContainer>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={<Btn />}
        dateFormat={'dd MM yyyy'} // Формат, який використовується
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
      />
      <CalendarIcon />
      <CalendarGlobalStyles />
    </DaySwitchContainer>
  );
}

export default ParamsFormDaySwitch;
