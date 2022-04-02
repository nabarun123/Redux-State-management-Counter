import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import allReducers from "./reducers";

const rootElement = document.getElementById("root");

const store = createStore(allReducers); //also known as root reducer

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
