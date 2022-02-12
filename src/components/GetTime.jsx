import React from 'react'

function GetTime() {
  
  var myCurrentDate = new Date();

  var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();

  const newCurrentDate = "Current Date and Time: "+date;
  
  return (
    <p>{newCurrentDate}</p>
  );
}

export default GetTime