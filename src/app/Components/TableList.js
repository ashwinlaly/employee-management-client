import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

class TableList extends Component {
    render() {
        if(this.props.content) {
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
                                    <Button variant="danger"> Delete</Button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            )
        } else {
            return null
        }
    }
}

export default TableList;