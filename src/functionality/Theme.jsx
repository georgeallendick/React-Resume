import React from 'react'
import { presentMode } from './GetMode'
import { hour } from './GetTime'

  // base styling //

  let appStyle = {
    backgroundColor: "darkblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    marginTop: "0",
    minHeight: "100vh",
  };
  
  let mainStyle = {
    backgroundColor: "lightblue",
    textAlign: "center",
    borderRadius: "3%",
    boxShadow: "0 3px 10px rgba(0 0 0 / 0.4)",
    width: "600px",
    maxWidth: "100%",
    padding: "20px 0 20px 0",
  }

  let titleStyle = {
    margin: "0",
  }

  let displayTimeStyle = {
    margin: "0",
    padding: "0 0 0 0",
  }

  let dropdownStyle = {
    textAlign: "center",
    fontWeight: "bold",
    width: "200px",
  }

  let inputStyle = {
    marginTop: "15px",
    overflowY:"scroll",
    height: "100px",
    width: "300px",
    maxWidth: "100%",
  }

    // mode styling //

  let darkPrimary = {
    backgroundImage: "url('')",
    backgroundColor: "#3A273D", // for app background, text area
    color: "#66A7E7", //for text area
  }

  let darkSecondary = {
    backgroundColor: "#0E2A52", // for main background
    color: "#CE515F", //for main text
}

  let lightPrimary = {
    backgroundImage: "url('')",
    backgroundColor: "#CEEEFD", // for app background, text area
    color: "#55494B", //for text area
  }
  let lightSecondary = {
    backgroundColor: "#474145", // for main background
    color: "#008EC0", //for main text
  }


  // mode switcher //

  let Mode = presentMode;

  let hours = hour;


  if (Mode == "light mode") {
    console.log("this is light mode");
    //primaries//
    appStyle.backgroundColor = lightPrimary.backgroundColor,
    dropdownStyle.backgroundColor = lightPrimary.backgroundColor,
    dropdownStyle.color = lightPrimary.color,
    inputStyle.backgroundColor = lightPrimary.backgroundColor,
    inputStyle.color = lightPrimary.color,
    //secondaries
    mainStyle.backgroundColor = lightSecondary.backgroundColor,
    mainStyle.color = lightSecondary.color;
  } if (Mode == "dark mode") {
    console.log("this is dark mode")
    //primaries//
    appStyle.backgroundColor = darkPrimary.backgroundColor,
    dropdownStyle.backgroundColor = darkPrimary.backgroundColor,
    dropdownStyle.color = darkPrimary.color,
    inputStyle.backgroundColor = darkPrimary.backgroundColor,
    inputStyle.color = darkPrimary.color,
    //secondaries
    mainStyle.backgroundColor = darkSecondary.backgroundColor,
    mainStyle.color = darkSecondary.color;
  } 


export { appStyle, mainStyle, titleStyle, displayTimeStyle, dropdownStyle, inputStyle };