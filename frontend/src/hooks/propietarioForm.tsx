import { useReducer } from "react";
import { Propietario } from '../types/typesPropie';

interface FormState {
  inputValues: Propietario
}
type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: "clear"
}

const INITIAL_STATE = {
  photo: '',
  names: '',
  phone: '',
  addres: '',
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      INITIAL_STATE
    default: return state;
  }
}

const useNewForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
}

export default useNewForm;
