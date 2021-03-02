import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import users from './userReducer';
import common from './commonReducer';
import projects from './projectReducer';
import departments from './departmentReducer';

const reducers = combineReducers({
    users,
    common,
    projects,
    departments,
    form: formReducer
})

export default reducers;