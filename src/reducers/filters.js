const filtersReducerDefaultState = {
  text: "rent",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

export default (state = filtersReducerDefaultState, action) => {
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
