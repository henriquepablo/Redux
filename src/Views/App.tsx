import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Test from "./test";

const App = ():React.JSX.Element => {
  
  return(
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;