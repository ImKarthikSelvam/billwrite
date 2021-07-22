import React, { Component } from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import EmployeeService from '../../services/EmployeeService';

import Aux from "../../hoc/_Aux";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    cancel() {
        this.props.history.push(`/user`);
    }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">View User</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        
                                            <Form.Group as={Row} controlId="firstName">
                                                <Form.Label column sm="3">
                                                First Name
                                                </Form.Label>
                                                <Col sm="8">
                                                <Form.Control plaintext readOnly defaultValue={this.state.employee.firstName} />
                                                </Col>
                                            </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group as={Row} controlId="lastName">
                                                <Form.Label column sm="3">
                                                Last Name
                                                </Form.Label>
                                                <Col sm="8">
                                                <Form.Control plaintext readOnly defaultValue={this.state.employee.lastName} />
                                                </Col>
                                            </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        
                                            <Form.Group as={Row} controlId="email">
                                                <Form.Label column sm="3">
                                                Email
                                                </Form.Label>
                                                <Col sm="8">
                                                <Form.Control plaintext readOnly defaultValue={this.state.employee.emailId} />
                                                </Col>
                                            </Form.Group>
                                    </Col>
                                    
                                </Row>
                                <Button className="pull-right" variant="secondary" onClick={ () => this.cancel()}>Cancel</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ViewEmployeeComponent