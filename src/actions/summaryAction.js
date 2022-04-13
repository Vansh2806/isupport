import { SUMMARY } from './types';
export const submitSummary = (val) => (dispatch) => {
  dispatch({
    type: SUMMARY,
    payload: val,
  });
};
