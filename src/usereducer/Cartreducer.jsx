import { createContext, useReducer } from "react";

export const Cartreducer = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    case "reset":
      return 0;

    default:
      throw new Error();
  }
};

export const CartreducerProvider = ({ children }) => {
  const [totalCart, dispatch] = useReducer(reducer, initialState);

  return (
    <Cartreducer.Provider value={[totalCart, dispatch]}>
      {children}
    </Cartreducer.Provider>
  );
};
