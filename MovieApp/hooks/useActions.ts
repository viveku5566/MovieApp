import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCrators from '../redux/actions/index';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCrators, dispatch);
};