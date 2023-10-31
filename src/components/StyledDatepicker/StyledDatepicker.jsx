/* eslint-disable react/prop-types */
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../icons.svg';
import { CalendarIcon } from '../DaySwitch/DaySwitch.styled';
import { DatePickerBtn } from './StyledDatepicker.styled';

// const StyledDatepicker = ({
//   isOpen,
//   //   setIsOpen,
//   selectedDate,
//   setSelectedDate,
//   //   buttonRef,
// }) => {
//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="dd MM yyyy"
//         calendarStartDay={1}
//         formatWeekDay={day => day.substr(0, 1)}
//         open={isOpen}
//         customInput={<div style={{ display: 'none' }} />}
//         popperModifiers={{
//           preventOverflow: {
//             enabled: true,
//             escapeWithReference: false,
//             boundariesElement: 'viewport',
//           },
//         }}
//       />
//       <CalendarGlobalStyles />
//     </>
//   );
// };

// export default StyledDatepicker;

const StyledDatepicker = ({ date, onChange, minDate }) => {
  return (
    <>
      <DatePicker
        showIcon={true}
        icon={
          <CalendarIcon width="16" height="16">
            <use href={`${sprite}#icon-calendar`}></use>
          </CalendarIcon>
        }
        selected={date}
        minDate={minDate}
        onChange={date => onChange(date)}
        // popperPlacement="top-end"
        // popperModifiers={{
        //   preventOverflow: {
        //     enabled: true,
        //     escapeWithReference: false,
        //     boundariesElement: 'viewport',
        //   },
        // }}
        // inline
        calendarStartDay={1}
        customInput={
          <DatePickerBtn type="button">
            {date.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </DatePickerBtn>
        }
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
