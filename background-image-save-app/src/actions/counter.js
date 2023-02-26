export const ADD_COUNT = "ADD_COUNT";
export const DELETE_COUNT = "ADD_COUNT";

export const addCount = () => {
  return {
    type: ADD_COUNT,
  };
};

export const deleteCount = () => {
  return {
    type: DELETE_COUNT,
  };
};
