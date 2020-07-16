export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

export const sortByAmount = (sortBy = "date") => ({
  type: "SORT_BY_AMOUNT",
  sortBy,
});

export const sortByDate = (SortBy = "date") => ({
  type: "SORT_BY_DATE",
  sortBy,
});

export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});
