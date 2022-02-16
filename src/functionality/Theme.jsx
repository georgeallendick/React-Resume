import React from 'react'
import { presentMode } from './GetMode'

  let mode = presentMode;

  let appStyle = {
    backgroundImage: (''),
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    marginTop: "0",
    minHeight: "100vh", 
  };
  
  let mainStyle = {
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
  
  if (mode = "dark mode") {
    
  };


export { appStyle, mainStyle, titleStyle };