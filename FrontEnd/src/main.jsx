import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./main.scss";
import { store, persistor } from "./redux/store/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
