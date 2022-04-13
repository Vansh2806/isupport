import {
  CASE_INTAKE,
  CASE_INTAKE_TAB_CHANGE,
  CASE_INTAKE_ADD_GENERAL,
  CASE_INTAKE_FRONT_PAGE,
} from '../../actions/types';

const initialState = {
  caseIntakeEdit: false,
  caseIntakeTab: 'general',
  caseIntakeAddGeneral: false,
  caseIntakeTable: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CASE_INTAKE:
      console.log('reducer');
      return {
        ...state,
        caseIntakeEdit: action.payload,
      };
    case CASE_INTAKE_TAB_CHANGE:
      return {
        ...state,
        caseIntakeTab: action.payload,
      };
    case CASE_INTAKE_ADD_GENERAL:
      return {
        ...state,
        caseIntakeAddGeneral: action.payload,
      };
    case CASE_INTAKE_FRONT_PAGE:
      return {
        ...state,
        caseIntakeTable: action.payload,
      };
    default:
      return state;
  }
}
