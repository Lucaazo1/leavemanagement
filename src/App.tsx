import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import {Home} from './Home';
import {Employee} from './Employee';
import {Details} from './Details';
import {Datatable} from './Datatable';
import {LMPage} from './LMPage';
import {LMcrud} from './LMcrud';
import {Datepickerpage} from './Datepickerpage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend Leave Management
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/employee">
            Employee
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/details">
            Details
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/department">
            Department
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Datatable">
            Datatable
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/LMPage">
            LMPage
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/LMcrud">
            LMcrud
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Datepickerpage">
            Datepickerpage
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/Datatable' element={<Datatable/>}/>
        <Route path='/LMPage' element={<LMPage/>}/>
        <Route path='/LMcrud' element={<LMcrud/>}/>
        <Route path='/Datepickerpage' element={<Datepickerpage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
