import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import users from './userReducer';
import common from './commonReducer';
import projects from './projectReducer';


const reducers = combineReducers({
    users,
    common,
    projects,
    form: formReducer
})

export default reducers;