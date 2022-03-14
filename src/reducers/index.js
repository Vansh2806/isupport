import { combineReducers } from 'redux';
import summaryReducers from './caseintake/summaryReducer';
import caseintakeReducers from './caseintake/caseintakeReducers';
export default combineReducers({
  // posts:postReducer
  summary: summaryReducers,
  caseIntake: caseintakeReducers,
});
