import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './auth/sign_in';
import CreateAcc from './auth/create_acc';
import UserType from './auth/usertype';
import MoreInfo from './auth/more';
import Interests from './auth/interests';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/sign_in' element={<SignIn />} />
        <Route exact path='/create_acc' element={<CreateAcc />}/>
        <Route exact path='/usertype' element={<UserType />}/>
        <Route exact path='/moreinfo' element={<MoreInfo />}/>
        <Route exact path='/interests' element={<Interests />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
