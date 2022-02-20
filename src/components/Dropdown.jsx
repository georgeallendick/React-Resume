import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { dropdownStyle, inputStyle } from '../functionality/Theme'


const section = [
  {
    name: "Resume Display",
    text: "",
  },
  {
    name: "Introduction",
    text: "👋 Hi, I’m @georgeallendick\n👀 Currently interested in front-end developer roles\n🌱 I've completed Mimo's Web Developer Course encompassing HTML, CSS, Java, and React\n🌱 Some of my Mimo courswork can be found here:\n https://github.com/georgeallendick-coding-school-projects\n🌱 In the process of building Javascript projects here:\n https://github.com/georgeallendick-javascript-projects\n📫 I can be reached through georgeallendickjr@gmail.com",
  },
  {
    name: "Projects",
    text: "---Mimo Coursework\n--A collection of projects completed on the way to earning Web Developer certification demonstrating proficiency in HTML, CSS, and Javascript.\n-github.com/georgeallendick-coding-school-projects\n\n---Assorted Javascript\n--Currently building out a number of Javascript projects to demonstrate my proficiency.\n-github.com/georgeallendick-javascript-projects",
  },
  {
    name: "Experience",
    text: "Global Energy — Project Manager\nJan 2020 - PRESENT / Roseville, CA\nMove statewide solar projects across all stages of the pipeline, from welcome call to final inspection while communicating with clients.\n\nSunfinity Solar Electric — Project Coordinator\nMay 2019 - Jan 2020 / Roseville, CA\nProcessing new deals, making welcome calls, scheduling site surveys, applying for NTP & PTO while maintaining a 50+ account caseload.\n\nInfinity Energy— Proposal Writer\nSept  2017 - May  2019 / Rocklin, CA\nCreating solar designs utilizing different softwares and crafting proposals to present customers with financing options.",
  },
  {
    name: "Skills",
    text: "Communication: with a background in creative writing I’ve always stood out for my ability to communicate clearly and effectively.\n\nProject Management: demonstrated ability to handle large and complex tasks on multiple levels at once.\n\nProblem Solving Under Pressure:  previous experience includes hospice and customer service environments where the concerns of patients and clients needed to be soothed in often fraught circumstances.",
  },
  {
    name: "Certificates",
    text: "- Web Developer certification through Mimo",
  },
  {
    name: "Contact",
    text: "- I can be reached at georgeallendickjr@gmail.com\n- Github: github.com/georgeallendick\n- Full resume availiable upon request",
  },
];

function Dropdown() {
  const [option, setOption] = React.useState("");
  const [text, setText] = React.useState("");

  const onChange = (ev) => {
    const val = ev.target.value;
    setOption(val);

    const resume = section[val];
    if (resume) {
      setText(resume.text);
    }
  };

  return (
    <div>
      <select value={option} onChange={onChange} style={dropdownStyle}>
        {section.map((resume, index) => (
          <option value={index} key={index}>
            {resume.name}
          </option>
        ))}
      </select>
      <br />
      <textarea
        style={inputStyle}
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      ></textarea></div>
  );
}



export default Dropdown;