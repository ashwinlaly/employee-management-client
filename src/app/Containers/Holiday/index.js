import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import TableList from '../../Components/TableList';
import { getAllHoliday, deleteHoliday } from '../../../Redux/actions/holidayAction';

class Project extends Component {
    header = ["name"]
    
    componentDidMount() {
        this.props.getAllHoliday()
    }

    _deleteHoliday = (_id) => {
        console.log(_id)
        // this.props.deleteHoliday(_id)
    }

    render() {
        return (
            <Fragment>
                <h1>All Holidays</h1>
                <Link to="/home/holiday/add" className="btn btn-warning"> Add New </Link>
                <TableList 
                    type="holiday"
                    url="/home/holiday/"
                    header={this.header} 
                    content={this.props.holidays.holidays}
                    onDelete={this._deleteHoliday}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({holidays}) => ({
    holidays
})

const mapDispatchToProps = {
    getAllHoliday,
    deleteHoliday
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);