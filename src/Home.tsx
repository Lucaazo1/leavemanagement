import React,{Component, useEffect, useState} from 'react';
import './Tabledesign.css';
/* export class Home extends Component{
    render(){
        return(
            <div>
                <h3>
                    This is home page
                </h3>
            </div>
        )
    }
} */

interface User {
    EmployeeId?: number
    EmployeeName: string
    EmployeeLastName: string
    EmployeeEmail: string
    EmployeePhonenumber: string
    EmployeeSubordinate: string
    EmployeePhotoFileName: string
}

export const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        //console.log("hello")
        /** Fire API request */
        const data = fetch("http://localhost:5114/api/Employees")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        }) 
    }, [])

    /* {details.map(detail=>
        <tr key={detail.EmployeeId}>
            <td>{detail.EmployeeName}</td>
            <td>{detail.EmployeeLastName}</td>
            <td>{detail.EmployeeEmail}</td>
            <td>{detail.EmployeePhonenumber}</td>
            <td>{detail.EmployeeSubordinate}</td>
            <td>{detail.EmployeeLeaveApplicationId}</td>
            <td>{detail.Options}</td>
        </tr>
            )} */


    return (
    <div>
        <table>
                <thead>
    <tr>
      <th>EmployeeName</th>
      <th>EmployeeLastName</th>
      <th>EmployeeEmail</th>
      <th>EmployeePhonenumber</th>
      <th>EmployeeSubordinate</th>
      <th>EmployeePhotoFileName</th>
    </tr>
  </thead>
  { users.length > 0 ?
        users.map((user: User, index) => {
            return <tbody key={index}>
                <tr>
              <td>{user.EmployeeName}</td>
              <td>{user.EmployeeLastName}</td>
              <td>{user.EmployeeEmail}</td>
              <td>{user.EmployeePhonenumber}</td>
              <td>{user.EmployeeSubordinate}</td>
              <td>{user.EmployeePhotoFileName}</td>
            </tr>
            </tbody>
        }) : <></>
    }
    </table>
  </div>
    )
}