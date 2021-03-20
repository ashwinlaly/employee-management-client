import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import users from './userReducer';
import common from './commonReducer';
import holidays from './holidayReducer';
import projects from './projectReducer';
import departments from './departmentReducer';

const reducers = combineReducers({
    users,
    common,
    holidays,
    projects,
    departments,
    form: formReducer
})

export default reducers;