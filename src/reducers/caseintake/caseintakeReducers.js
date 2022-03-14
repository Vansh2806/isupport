import { CASE_INTAKE } from '../../actions/types';

const initialState = {
  caseIntakeEdit: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CASE_INTAKE:
      console.log('reducer');
      return {
        ...state,
        caseIntakeEdit: action.payload,
      };
    default:
      return state;
  }
}
