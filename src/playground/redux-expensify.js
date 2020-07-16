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

const setText = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = (sortBy = "date") => ({
  type: "SORT_BY_AMOUNT",
  sortBy,
});

const sortByDate = (SortBy = "date") => ({
  type: "SORT_BY_DATE",
  sortBy,
});

const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
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

const filtersReducerDefaultState = {
  text: "rent",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER": {
      return {
        ...state,
        text: action.text,
      };
    }
    case "SORT_BY_DATE": {
      return {
        ...state,
        ortBy: action.sortBy,
      };
    }
    case "SORT_BY_AMOUNT": {
      return {
        ...state,
        sortBy: action.sortBy,
      };
    }
    case "SET_START_DATE": {
      return {
        ...state,
        startDate: action.startDate,
      };
    }
    case "SET_END_DATE": {
      return {
        ...state,
        endDate: action.endDate,
      };
    }
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

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof startDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sortBy((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 200 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "Cookies", amount: 300 })
);

store.dispatch(removeExpense(expenseOne.expense));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setText("Rentx"));
store.dispatch(setText(""));

store.dispatch(sortByAmount("amount"));
store.dispatch(sortByAmount("date"));

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
