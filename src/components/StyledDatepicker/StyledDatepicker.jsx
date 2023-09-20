/* eslint-disable react/prop-types */
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

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
        popperPlacement="top-end"
        selected={date}
        minDate={minDate}
        onChange={onChange}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
        inline
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
