import React from 'react'
import { hour, minute } from '../functionality/GetTime'
import {titleStyle} from '../functionality/Theme'


function Title() {

  let title = "React Resume";
  let addendum;
  let addendumStyle = {
    right: "0px",
    fontSize: "small",
  }
  
  let hours = hour;

  
  if (hours < 2) {
    title = "React Resume After Dark*";
    addendum = ["*What are you still doing up?",<br/>," And why are you looking at resumes?"];
  }
  
  return (
    <div>
    <h1 style={titleStyle}>{title}</h1><p style={addendumStyle}>{addendum}</p>
    </div>
  );
}

export default Title;