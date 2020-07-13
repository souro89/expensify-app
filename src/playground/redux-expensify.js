import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import AddExpense from "../components/AddExpense";

const demoState = {
  expenses: [
    {
      id: "pojkjasuwewqe",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

const addExpense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt,
  },
});

const removeExpense = ({
  id = "",
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id,
    description,
    notes,
    amount,
    createdAt,
  },
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE": {
      return [...state, action.expense];
    }
    case "REMOVE_EXPENSE": {
      return state.filter((op) => {
        return op.id !== action.expense.id;
      });
    }
    default: {
      return state;
    }
  }
};

const filtersReducerDefaultState = {
  text: "rent",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.state) {
    default: {
      return state;
    }
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseId = store.dispatch(
  addExpense({ description: "Rent", amount: 200 })
);
store.dispatch(addExpense({ description: "Cookies", amount: 300 }));

console.log(expenseId.expense);

store.dispatch(removeExpense(expenseId.expense));
