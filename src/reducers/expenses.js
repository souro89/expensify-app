const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return [...state, action.expense];
    }
    case "REMOVE_EXPENSE": {
      return state.filter((op) => {
        return op.id !== action.expense.id;
      });
    }
    case "EDIT_EXPENSE": {
      return state.map((op) => {
        if (op.id === action.id) {
          return {
            ...op,
            ...action.updates,
          };
        } else {
          return state;
        }
      });
    }
    default: {
      return state;
    }
  }
};
