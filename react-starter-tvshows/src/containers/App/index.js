import React from "react";
import { store, history } from "../../store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Root from "../Root";
import { Nav } from "../../components";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Nav />
      <Root />
    </ConnectedRouter>
  </Provider>
);

export default App;
