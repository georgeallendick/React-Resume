import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GetTime from './components/GetTime'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GetTime />
  </React.StrictMode>,
  document.getElementById('root')
)
