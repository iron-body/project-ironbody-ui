import { createGlobalStyle, styled } from 'styled-components';
import { device } from '../../Constants';

export const DaySwitchContainer = styled.div`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
  border: 1px solid var(--color-lightsalmon);
  color: var(--color-whitesmoke-100);
  border-radius: 12px;
  outline: none;

  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;

  /* @media ${device.tablet} {
  }
  @media ${device.desktop} {
    margin-top: 50px;
    padding-top: 52px;
    gap: 8px;
  } */
`;
export const StyledDate = styled.span`
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  top: 372px;
  margin-left: 26px;
  fill: transparent;
  stroke: var(--white);
  width: 24px;
  height: 24px;

  @media ${device.tablet} {
    top: 432px;
  }

  @media ${device.desktop} {
    top: 444px;
  }
`;

export const StyledButton = styled.button`
  color: ${({ disabled }) => (disabled ? 'gray' : 'white')};
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
`;

export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: var(--color-lightsalmon);
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-62%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 290px;
    height: 300px;
    padding: 9px 18px;
  background-color: var(--color-lightsalmon);
    font-family: Inter;
    border-radius: 16px;

    @media ${device.tablet} {
    transform: translate(-1%, 0%);
  }
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--color-lightsalmon);
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: var(--color-lightsalmon);
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;
