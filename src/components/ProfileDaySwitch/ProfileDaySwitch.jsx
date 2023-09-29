import { useState } from 'react';
import sprite from '../../../icons.svg';
import {
  CalendarIcon,
  DaySwitchContainer,
  // StyledButton,
  StyledDate,
} from './ProfileDaySwitch.styled';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import moment from 'moment';
import { selectProfileData } from '../../redux/profile/profileSlice';
import { useSelector } from 'react-redux';

function ProfileDaySwitch() {
  const profileData = useSelector(selectProfileData);

  // const { birthday } = profileData;
  const birthdayMoment = moment(profileData?.birthday).toDate();
  const [selectedDate, setSelectedDate] = useState(birthdayMoment);
  // const [minDate, setMinDate] = useState(null); // Дата реєстрації користувача
  const [showDatepicker, setShowDatepicker] = useState(false);

  // useEffect(() => {
  //   // Можливо, ви отримуєте дату реєстрації користувача з API або іншим способом
  //   // Наприклад, розкоментуйте цей рядок і встановіть правильну дату реєстрації

  //   setMinDate(new Date());
  // }, []);

  const handleFormattedDateClick = () => {
    console.log('click!');
    setShowDatepicker(!showDatepicker);
  };
  // const handlePreviousDay = () => {
  //   const previousDate = new Date(selectedDate);
  //   previousDate.setDate(previousDate.getDate() - 1);
  //   setSelectedDate(previousDate);
  // };

  // const handleNextDay = () => {
  //   const nextDate = new Date(selectedDate);
  //   nextDate.setDate(nextDate.getDate() + 1);

  //   setSelectedDate(nextDate);
  // };
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  // Форматуємо обрану дату в формат dd/mm/YYYY
  const formattedDate = selectedDate.toLocaleDateString('de-DE', {
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
        {showDatepicker && <StyledDatepicker date={selectedDate} onChange={handleDateChange} />}
      </StyledDate>
      {/* <StyledButton onClick={handlePreviousDay}>{'<'}</StyledButton>
      <StyledButton onClick={handleNextDay}>{'>'}</StyledButton> */}
    </DaySwitchContainer>
  );
}

export default ProfileDaySwitch;
