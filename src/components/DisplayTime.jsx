import React from 'react'
import { hour, minute } from '../functionality/GetTime'
import { presentMode } from '../functionality/GetMode'


function DisplayTime() {

  // text functionality //
  
  let meridiem;
  let nextMode;
  let nextMeridiem;
  let hours = hour;
  let minutes = minute;
  let mode = presentMode;

    if (mode = "dark mode") {
      nextMode = "light mode";
      nextMeridiem = "AM";
    } if (mode = "light mode") {
      nextMode = "dark mode";
      nextMeridiem = "PM";
    }
    if (hours >= 12 && minutes > 0) {
        meridiem = 'PM';
      } else {
        meridiem = 'AM';
      }
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (minutes < 10) {
    minutes = "0"+minutes;
  }

  return (
    <div>
    <p>The time is {hours}:{minutes} {meridiem} and this site is currently in {presentMode}, at 5 {nextMeridiem} it will switch to {nextMode}.</p>
    </div>
  );
}


export default DisplayTime;