import React from 'react'
import { hour, minute } from './GetTime'

let presentMode;

  if (hour >= 17 && minute > 0 || hour < 5 && minute > 0) {
    presentMode = "dark mode";
  } else {
    presentMode = "light mode";
  }

export { presentMode };