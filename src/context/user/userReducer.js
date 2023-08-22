export const types = {
  setUserState: "[SETUSER] set user state",
  setError: "[USER] Set Error",
};

const userReducer = (state, action = {}) => {
  switch (action.type) {
    case types.setUserState:
      return {
        ...state,
        user: action.payload,
      };
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
