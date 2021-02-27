import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import projects from './projectReducer';
import common from './commonReducer';

const reducers = combineReducers({
    projects,
    common,
    form: formReducer
})

export default reducers;