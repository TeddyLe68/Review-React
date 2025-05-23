import { useReducer } from "react";

const initialValue = {
  data: [],
  currentId: 0,
};

const phoneReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.currentId }],
        currentId: state.currentId + 1,
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const usePhoneHook = () => {
  const [state, dispatch] = useReducer(phoneReducer, initialValue);
  const addPhone = (phone) => {
    dispatch({
      type: "ADD",
      payload: phone,
    });
  };
  const deletePhone = (phoneId) => {
    dispatch({
      type: "DELETE",
      payload: { id: phoneId },
    });
  };
  return {
    state,
    addPhone,
    deletePhone,
  };
};
