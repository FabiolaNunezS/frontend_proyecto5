export const carroTypes = {
  setCarroState: "[CARRO] set carro",
};
const cartReducer = (state, action = {}) => {
  switch (action.type) {
    case carroTypes.setCarroState:
      return {
        ...state,
        carrito: [...state.carrito, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};

export default cartReducer;
