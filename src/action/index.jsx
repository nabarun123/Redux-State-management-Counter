export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num //payload is nothing but whatever the data or value that you want to give
  };
};
export const decrement = (num) => {
  return {
    type: "DECREMENT"
  };
};

export const signin = () => {
  return {
    type: "SIGN-IN"
  };
};
