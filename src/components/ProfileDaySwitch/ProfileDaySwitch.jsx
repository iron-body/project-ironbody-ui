import moment from 'moment';
import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import { CalendarIcon } from '@mui/x-date-pickers';
import {
  CalendarGlobalStyles,
  CalendarIcon,
  DatePickerStyled,
  DaySwitchContainer,
  StyledDate,
  StyledDateContainer,
} from './ProfileDaySwitch.styled';
import { useSelector } from 'react-redux';
import { selectProfileData } from '../../redux/profile/profileSlice';
import sprite from '../../../icons.svg';

// eslint-disable-next-line react/prop-types
function ProfileDaySwitch({ onDateChange }) {
  const profileData = useSelector(selectProfileData);
  const birthdayMoment = moment(profileData?.birthday).toDate();
  const date18yearsAgo = moment().subtract(18, 'years').toDate();
  const [selectedDate, setSelectedDate] = useState(birthdayMoment);

  // eslint-disable-next-line react/display-name, react/prop-types
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <StyledDateContainer onClick={onClick}>
        <StyledDate ref={ref}>{format(selectedDate, 'dd.MM.yyyy')}</StyledDate>
        <CalendarIcon width="16" height="16">
          <use href={`${sprite}#icon-calendar`}></use>
        </CalendarIcon>
      </StyledDateContainer>
    );
  });

  return (
    <DaySwitchContainer>
      <DatePickerStyled
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          onDateChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        maxDate={date18yearsAgo}
      />
      <CalendarGlobalStyles />
    </DaySwitchContainer>
  );
}

export default ProfileDaySwitch;
