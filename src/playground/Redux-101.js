import { createStore } from "redux";

const countIncrement = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const countDrecment = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const countReset = () => ({
  type: "RESET",
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + action.incrementBy,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - action.decrementBy,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
});

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(countIncrement({ incrementBy: 5 }));

store.dispatch(countDrecment());

store.dispatch(countDrecment({ decrementBy: 10 }));

store.dispatch(countReset());
