import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {questionsActions} from "./reducers/questionsSlice";
import { timerActions } from './reducers/timerSlice';

const actions = {
    ...questionsActions,
    ...timerActions,

};
export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
