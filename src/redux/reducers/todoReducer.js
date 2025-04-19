import actionTypes from "../actionTypes";

const initialState = {
  todos: [],
  isDarkMode: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // * EKLE
    case actionTypes.add:
      const newTodos = state.todos.concat(action.payload);
      return { ...state, todos: newTodos };

    // * SİL
    case actionTypes.delete:
      // Silinecek elemanı todos içerisinden filtrele
      const filteredTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, todos: filteredTodos };

    // * IS_DONE DEĞERİNİ TERSİNE ÇEVİR
    case actionTypes.toggle:
      const updated = { ...action.payload, is_done: !action.payload.is_done };

      const updatedTodos = state.todos.map((i) =>
        i.id === updated.id ? updated : i
      );
      return { ...state, todos: updatedTodos };

    // * GÜNCELLE
    case actionTypes.update:
      const editedTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: editedTodos };

    // * API'DAN GELEN VERİYİ STATEYE SETLE
    case actionTypes.set:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
