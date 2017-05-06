import { combineReducers } from 'redux';
import {Head} from './head';
import {Nav} from './nav';
import {Content} from './content';
//import {foot} from './foot';

console.log(Head,Nav,Content,101010);
const reducers = combineReducers({
	Head,
	Nav,
    Content
});

console.log('reducers:',reducers);
export default reducers;