import axios from 'axios';
import {
  CASE_INTAKE,
  CASE_INTAKE_TAB_CHANGE,
  CASE_INTAKE_ADD_GENERAL,
  CASE_INTAKE_FRONT_PAGE,
} from './types';

export const changeCaseIntake = (val) => (dispatch) => {
  dispatch({
    type: CASE_INTAKE,
    payload: val,
  });
};
export const changeCaseIntakeTabChange = (val) => (dispatch) => {
  console.log('action');
  dispatch({
    type: CASE_INTAKE_TAB_CHANGE,
    payload: val,
  });
};

export const caseIntakeFrontPage = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://3.130.2.241:5000/caseintake/get_caseintake_view'
    );
    dispatch({ type: CASE_INTAKE_FRONT_PAGE, payload: res.data });
    return;
  } catch {
    return;
  }
};
// export const changeCaseIntakeAddGeneral = (val) => (dispatch) => {
//   console.log('action');
//   dispatch({
//     type: CASE_INTAKE_ADD_GENERAL,
//     payload: val,
//   });
// };
