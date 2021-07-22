import React, { Component } from 'react'
import {Row, Col, Card, Table, Button, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import EmployeeService from '../../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">User List</Card.Title>
                                <Button className="pull-right" variant="primary" size="sm" onClick={this.addEmployee}>Add User</Button>
                            </Card.Header>
                            <Card.Body>
                                <Table striped>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> # </td>  
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                             <Dropdown className="drp-user">
                                                <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                                    <i className="icon feather icon-more-vertical"/>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu alignRight className="profile-notification">
                                                    
                                                    <a href={DEMO.BLANK_LINK} onClick={ () => this.viewEmployee(employee.id)} className="dropdown-item"><i className="feather icon-user"/> View User</a>
                                                    <a href={DEMO.BLANK_LINK} onClick={ () => this.editEmployee(employee.id)} className="dropdown-item"><i className="feather icon-user"/> Edit User</a>
                                                    <a href={DEMO.BLANK_LINK} onClick={ () => this.deleteEmployee(employee.id)} className="dropdown-item"><i className="feather icon-user"/> Delete User</a>
                                                   
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            
                                                 {/*<button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                                    )
                                }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}


export default ListEmployeeComponent