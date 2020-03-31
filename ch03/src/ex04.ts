export const reducer = (state:number, action:Action) => {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    case "reset":
      return action.value;
  }
};

type Action =
  | {
      type: "increment";
      amount: number;
    }
  | {
      type: "decrement";
      amount: number;
    }
  | {
      type: "reset";
      value: number;
    };
