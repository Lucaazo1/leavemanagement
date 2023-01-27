import React,{Component, useEffect, useState, Fragment} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Styling.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface LApp {
    EmployeeId?: number
    EmployeeName: string
    EmployeeLastName: string
    EmployeeEmail: string
    EmployeePhonenumber: string
    EmployeeSubordinate: string
    EmployeePhotoFileName: string
}


export const LMcrudUsers = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //First call
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhonenumber, setUserPhonenumber] = useState('');
    const [userSubordinate, setUserSubordinate] = useState('');
    const [userPhotoFileName, setUserPhotoFileName] = useState('');
    const [userGuidLeaveApplicationId, setUserGuidLeaveApplicationId] = useState('');
    const [userDaysLeftToUse, setUserDaysLeftToUse] = useState('');
    const [supervisorBool, setSupervisorBool] = useState('');
    const [supervisorLMList, setSupervisorLMList] = useState('');
    const [adminBool, setAdminBool] = useState('');
    const [adminLMList, setAdminLMList] = useState('');
    const [employeeBool, setEmployeeBool] = useState('');

    //Edit call
    const [edituserId, setEditUserId] = useState('');
    const [edituserName, setEditUserName] = useState('');
    const [edituserPassword, setEditUserPassword] = useState('');
    const [edituserLastName, setEditUserLastName] = useState('');
    const [edituserEmail, setEditUserEmail] = useState('');
    const [edituserPhonenumber, setEditUserPhonenumber] = useState('');
    const [edituserSubordinate, setEditUserSubordinate] = useState('');
    const [edituserPhotoFileName, setEditUserPhotoFileName] = useState('');
    const [edituserGuidLeaveApplicationId, setEditUserGuidLeaveApplicationId] = useState('');
    const [edituserDaysLeftToUse, setEditUserDaysLeftToUse] = useState('');
    const [editsupervisorBool, setEditSupervisorBool] = useState('');
    const [editsupervisorLMList, setEditSupervisorLMList] = useState('');
    const [editadminBool, setEditAdminBool] = useState('');
    const [editadminLMList, setEditAdminLMList] = useState('');
    const [editemployeeBool, setEditEmployeeBool] = useState('');


    //mockdata
    const empdata = [
        {
            id : 1,
            name : 'lucas'
        }
    ]

    //const [datas, setData] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    

    const getData = () => {
        axios.get("http://localhost:5156/api/Users")
        .then((result)=>{
            setUsers(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    //den är fel
    const handleEdit = (EmployeeId : any) =>{
        handleShow();
        axios.get(`http://localhost:5156/api/Users/${EmployeeId}`)
            .then((result)=>{
                setId(result.data.id);
                setEditName("hellotest");
                setEditLastname(result.data.lastname);
                setEditEmail(result.data.email);
                setEditPhonenumber(result.data.phonenumber);
                setEditSubordinate(result.data.subordinate);
                setEditPhotofilename(result.data.photofilename);
                setEditLeaveapplicationid(result.data.leaveapplicationid);
                if(result.status === 200){
                    toast.success('Employe has been editing'); 
                    getData();
                }
            }).catch((error)=>{
                toast.error(error);
            })
    }

    const handleDelete = (EmployeeId: any) =>{
        if(window.confirm("Are you sure to delete this employee?") === true){
            axios.delete(`http://localhost:5156/api/Users/${EmployeeId}`)
            .then((result)=>{
                if(result.status === 200){
                    toast.success('Employe has been deleted'); 
                    getData();
                }
            }).catch((error)=>{
                toast.error(error);
            })
        }
    }

    const handleUpdate = () =>{
        const url = `http://localhost:5156/api/Users/${editid}`;
        const data = {
            "EmployeeId": editid,
            "EmployeeName": editname,
            "EmployeeLastName": editlastname,
            "EmployeeEmail": editemail,
            "EmployeePhonenumber": editphonenumber,
            "EmployeeSubordinate": editsubordinate,
            "EmployeePhotoFileName": editphotofilename,
            "EmployeeLeaveApplicationId": editleaveapplicationid
        }
        axios.put(url, data)
        .then((result)=>{
            handleClose();
            getData();
            clear();
            toast.success('Employe has been updated');
        }).catch((error)=>{
            toast.error(error);
        })
    }


    // http://localhost:5114/api/Employees

    const handleSave = () =>{
        const url = 'http://localhost:5156/api/Users';
        const data = {
            "EmployeeName": name,
            "EmployeeLastName": lastname,
            "EmployeeEmail": email,
            "EmployeePhonenumber": phonenumber,
            "EmployeeSubordinate": subordinate,
            "EmployeePhotoFileName": photofilename,
            "EmployeeLeaveApplicationId": leaveapplicationid
        }
        axios.post(url, data)
        .then((result)=>{
            getData();
            clear();
            toast.success('Employe has been added');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const clear = () =>{
        setName('');
        setLastname('');
        setEmail('');
        setPhonenumber('');
        setSubordinate('');
        setPhotofilename('');
        setLeaveapplicationid('');
        
        
        setEditId('');
        setEditName('');
        setEditLastname('');
        setEditEmail('');
        setEditPhonenumber('');
        setEditSubordinate('');
        setEditPhotofilename('');
        setEditLeaveapplicationid('');
    }
    
    return (
        <Fragment>
            <ToastContainer/>
            <Container>
                <Row>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter name"
                    value={name} onChange={(e) => setEditName(e.target.value)}
                    />
                    </Col>
                    <Col><input type="text" className="form-control" placeholder="Enter lastname"
                    value={lastname} onChange={(e) => setEditLastname(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter phonenumber"
                    value={email} onChange={(e) => setEditEmail(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter email"
                    value={phonenumber} onChange={(e) => setEditPhonenumber(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter subordinate"
                    value={subordinate} onChange={(e) => setEditSubordinate(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter photofilename"
                    value={photofilename} onChange={(e) => setEditPhotofilename(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter leaveapplicationid"
                    value={leaveapplicationid} onChange={(e) => setEditLeaveapplicationid(e.target.value)}/></Col>
                    
                    <Col>
                    <button className='btn' onClick={()=> handleSave()}>Submit</button>
                    </Col>
                </Row>
            </Container>
            <table>
            <thead>
    <tr>
        <th>#</th>
      <th>EmployeeName</th>
      <th>EmployeeLastName</th>
      <th>EmployeeEmail</th>
      <th>EmployeePhonenumber</th>
      <th>EmployeeSubordinate</th>
      <th>EmployeePhotoFileName</th>
      <th>Actions</th>
    </tr>
  </thead>
  { users.length > 0 ?
        users.map((user: LApp, index) => {
            return <tbody key={index}>
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.EmployeeName}</td>
                    <td>{user.EmployeeLastName}</td>
                    <td>{user.EmployeeEmail}</td>
                    <td>{user.EmployeePhonenumber}</td>
                    <td>{user.EmployeeSubordinate}</td>
                    <td>{user.EmployeePhotoFileName}</td>
                    <td colSpan={2}>
                        <button className='btn' onClick={() => handleEdit(user.EmployeeId)}>Edit</button> &nbsp;
                        <button className='btn' onClick={() => handleDelete(user.EmployeeId)}>Delete</button>
                    </td>
                </tr>
            </tbody>
        }) : 'Loading...'
    }
            </table>
            
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify/Update Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
                <Row>
                    <Col>
                    <input type="text" className="form-control" placeholder="Enter name"
                    value={editname} onChange={(e) => setName(e.target.value)}
                    />
                    </Col>
                    <Col><input type="text" className="form-control" placeholder="Enter lastname"
                    value={editlastname} onChange={(e) => setLastname(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter phonenumber"
                    value={editemail} onChange={(e) => setEmail(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter email"
                    value={editphonenumber} onChange={(e) => setPhonenumber(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter subordinate"
                    value={editsubordinate} onChange={(e) => setSubordinate(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter photofilename"
                    value={editphotofilename} onChange={(e) => setPhotofilename(e.target.value)}/></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter leaveapplicationid"
                    value={editleaveapplicationid} onChange={(e) => setLeaveapplicationid(e.target.value)}/></Col>
                </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn' variant="secondary" onClick={handleClose}>Close</Button>
          <Button className='btn' variant="primary" onClick={handleUpdate}>Save changes</Button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    )
}
