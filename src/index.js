import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import Home from "./MorningPractice/Home";

const EMPLOYEES = [
  {
    id: 'a5g2-b902',
    firstName: "Jack",
    lastName: "Sutherland",
    dept: "finance",
    role: "accoutant"
  },
  {
    id: 'v1k7-x2804',
    firstName: "Sophia",
    lastName: "McRutt",
    dept: "technology",
    role: "software engineer"
  },
  {
    id: 'f6p2-a5815',
    firstName: "Chris",
    lastName: "O'Dowd",
    dept: "human resources",
    role: "hiring manager"
  },
  {
    id: 'q6m0-d1064',
    firstName: "Duncan",
    lastName: "McLeod",
    dept: "technology",
    role: "product designer"
  }
]

ReactDOM.render(
  <BrowserRouter>
    <Home EMPLOYEES={EMPLOYEES} /> 
  </BrowserRouter>,
  document.getElementById("root")
);


