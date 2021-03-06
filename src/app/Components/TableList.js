import React, { Component, Fragment, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

class TableList extends Component {
    render() {
        if(this.props.content) {
            if(this.props.type !== "leaves") {
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
            } else {
                return <TableListForLeaves header={this.props.headers} content={this.props.content} approveLeave={this.props.approveLeave}/>
            }
        } else {
            return null
        }
    }
}


class TableListForLeaves extends Component {
    constructor() {
        super()
        this.Tableheaders = ["Name", "Email", "Department", "Status"]
        this.state = {
            selected : {}
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
    }

    toggleCheckbox(_id) {
        const newSelected = Object.assign({}, this.state.selected);
        newSelected[_id] = !this.state.selected[_id];
        this.setState({selected: newSelected}, () => {
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
                            return(<tr key={key}>
                                <td>{data.user.name}</td>
                                <td>{data.reason}</td>
                                <td>{data.user.department_id.original_name}</td>
                                <td>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" 
                                            onChange={(e) => this.toggleCheckbox(data._id)} 
                                            label={(this.state.selected[data._id])? 'Un Approve' : 'Approve'} 
                                            checked={this.state.selected[data._id] === true}/>
                                    </Form.Group>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

export default TableList;