import { SUMMARY } from '../../actions/types';
const initialState = {
  summary: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SUMMARY:
      console.log('reducer', action.payload);
      return {
        ...state,
        summary: action.payload,
      };
    default:
      return state;
  }
}
