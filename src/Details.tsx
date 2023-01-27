import {Component} from 'react';
import React from 'react';  
import { Department } from './Department'; 
import { deprecate } from 'util';
import { useState, useEffect } from 'react';
import { variables } from './Variables';
import PropTypes, { element, number, string } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

export class Details extends React.Component{
     
    render(){
        let storelibrary = Department;

        return(
            <div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                EmployeeId
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeeName
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeeLastName
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeeEmail
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeePhonenumber
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeeSubordinate
                </th>
                <th scope="col" className="px-6 py-3">
                EmployeeLeaveApplicationId
                </th>
                <th scope="col" className="px-6 py-3">
                Options
                </th>
            </tr>
        </thead>
        <tbody>
            
            </tbody>
                </table>
            </div>
        )
    }
}