import { render } from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Footer } from '@pmndrs/branding'
import useStore from './store'
import './index.css';

function Overlay(){
  const loaded = useStore((state) => state.loaded)
  const clicked = useStore((state) => state.clicked)
  const api = useStore((state) => state.api)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Overlay/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
