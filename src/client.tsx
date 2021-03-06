import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./Store/configureStore";
const store = configureStore((window as any).__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
