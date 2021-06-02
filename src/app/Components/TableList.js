import React, { Component, Fragment, useState } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import Form from 'react-bootstrap/Form';

class TableList extends Component {
    render() {
        if(this.props.content) {
            if(this.props.type === "leaves") {
                return <TableListForLeaves header={this.props.headers} content={this.props.content} approveLeave={this.props.approveLeave} isAdmin={this.props.user}/>
            } else if(this.props.type === "holidayCalender") {
                return <TableListForHolidayCalender header={this.props.headers} content={this.props.content}/>
            }else {
                return (
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                {(this.props.header).map((data, key) => {
                                    return(<th key={key}>{data}</th>)
                                })}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.props.content).map((data, key) => {
                                return(<tr key={key}>
                                    {(this.props.header).map((headerData, headerKey) => {
                                        return(<td key={headerKey}>{data[headerData]}</td>)
                                    })}
                                    <td key={key}>
                                        <Link className="btn btn-primary" to={`${this.props.url}${data._id}`}> Edit</Link> {'    '}
                                        <Button variant="danger" onClick={() => this.props.onDelete(data._id)}> Delete</Button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                )
            }
        } else {
            return null
        }
    }
}


class TableListForLeaves extends Component {
    constructor() {
        super()
        this.Tableheaders = ["Name", "Reason", "Date", "Type", "Status"]
        this.state = {
            selected : {}
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
    }

    toggleCheckbox(_id) {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[_id] = !this.state.selected[_id];
        this.setState({selected: newSelected}, () => {
            console.log(this.state)
            if(this.state.selected[_id]){
                this.props.approveLeave(_id, true)
            } else {
                this.props.approveLeave(_id, false)
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {(this.Tableheaders).map((data, key) => {
                                return(<th key={key}>{data}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.content).map((data, key) => {
                            let to_Date = new Date(data.to_date)
                            let from_Date = new Date(data.from_date)
                            return(<tr key={key}>
                                <td>{data.user.name}</td>
                                <td>{data.reason}</td>
                                <td>
                                    {from_Date.getDate() + "-" + (from_Date.getMonth()+1) + "-" + from_Date.getFullYear()}  -    {to_Date.getDate() + "-" + (to_Date.getMonth()+1) + "-" + to_Date.getFullYear()}
                                </td>
                                <td>
                                    {data.leave_type === 1? "Casual" : "Sick"}
                                </td>
                                <td>
                                    <LeaveApprovalCheckBox toggleCheckbox={() => this.toggleCheckbox(data._id)} checked={data.status} isAdmin={this.props.isAdmin}/>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

const LeaveApprovalCheckBox = ({checked,toggleCheckbox, isAdmin}) => {
    const [status, setStatus] = useState(checked)
    const updateState = () => {
        setStatus(!status)
        toggleCheckbox()
    }
    if(isAdmin === "true") {
        return (
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                    onChange={() => updateState()} 
                    label={(status)? 'Approved' : 'Un Approved'} 
                    checked={(status) ? true : false}/>
            </Form.Group>
        )   
    } else {
        return (status === 1)? 'Approved' : 'Un Approved'
    }
}

const TableListForHolidayCalender = ({content}) => {
    return (
        <Fragment>
            <ListGroup as="ul">
                {(content).map((data, key) => {
                    let date = new Date(data.date)
                    return (
                        <ListGroup.Item as="li" key={key}>
                            {data.name} - {date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: localStorage.getItem("isAdmin")
})

export default connect(mapStateToProps, {})(TableList);