import { CASE_INTAKE } from './types';

export const changeCaseIntake = (val) => (dispatch) => {
  console.log('action');
  dispatch({
    type: CASE_INTAKE,
    payload: val,
  });
};
