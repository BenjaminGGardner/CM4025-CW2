import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import ReactDOM from "react-dom";
import css from "./index.css";

hydrate(<App/>, document.getElementById('root'))
