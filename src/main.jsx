import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import ReactModal from "react-modal";

import App from "./App.jsx";
import "./index.css";

ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
