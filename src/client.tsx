import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./Store/configureStore";
const store = configureStore((window as any).__PRELOADED_STATE__);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
