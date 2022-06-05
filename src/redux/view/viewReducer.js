import { VIEW_DATA } from "./viewActions";

const inital_data = {
  viewVideo: {},
};

export const viewReducer = (store = inital_data, { type, payload }) => {
  if (type === VIEW_DATA) {
    return { ...store, viewVideo: payload };
  } else {
    return store;
  }
};
