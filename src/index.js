import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
//Render component
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

//create component
function HelloComponent(){
  return (<div>
    <h1>HelloComponent</h1>
    <h1>SecondeLine</h1>
    <h2>fame</h2>
  </div>)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
