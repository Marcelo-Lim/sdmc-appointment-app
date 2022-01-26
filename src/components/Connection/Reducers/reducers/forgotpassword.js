import * as actionType from '../Constant/actionType';

const forgotPasswordReducers = (state = { usersData: null }, action) => {
  switch (action.type) {
    case actionType.FORGOTTEN:
      localStorage.setItem('profileForgot', JSON.stringify({ ...action?.data }));

      return { ...state, usersData: action.data, loading: false, errors: null };
    case actionType.EXIT:
      localStorage.clear();

      return { ...state, usersData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default forgotPasswordReducers;