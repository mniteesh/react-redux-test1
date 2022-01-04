import { ActionType } from "../contans/action-type";

const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionType.REMOVE_PRODUCTS:
      return {};

    default:
      return state;
  }
};
