import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { persistor, store } from "@/store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";

import App from "@/App";
import Login from "@/Login";
import PrivateRoutes from "@/PrivateRoutes";
import "@/index.css";

ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<App />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </PersistGate>
  </Provider>
);
