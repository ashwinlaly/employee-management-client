import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import TableList from '../../Components/TableList';
import { getAllHoliday } from '../../../Redux/actions/holidayAction';

class HolidayCalendar extends Component {
    header = ["name", "date"]
    
    componentDidMount() {
        this.props.getAllHoliday()
    }

    render() {
        return (
            <Fragment>
                <h1>All Holidays</h1>
                <TableList 
                    type="holidayCalender"
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
    getAllHoliday
}

export default connect(mapStateToProps, mapDispatchToProps)(HolidayCalendar);