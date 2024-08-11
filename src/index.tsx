import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider, ThemeProvider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
        <Toaster
          position="top-center"
          reverseOrder
          toastOptions={{
            style: {
              background: "#27292D",
              color: "#C5C7CA",
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
