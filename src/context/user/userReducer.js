export const types = {
  setUserState: "[SETUSER] set user state",
  setError: "[USER] Set Error",
  setLogout: "[USER] Set logout",
};

const userReducer = (state, action = {}) => {
  switch (action.type) {
    case types.setUserState:
      return {
        ...state,
        user: action.payload,
        // carrito: action.payload.carrito || [],
      };
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };
    case types.setLogout:
      return null;
    default:
      return state;
  }
};

export default userReducer;
