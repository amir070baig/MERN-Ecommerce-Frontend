// 1. Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Import global CSS (Tailwind styles are here)
import "./index.css";

// 3. Import Provider from react-redux to give store access
import { Provider } from "react-redux";

// 4. Import BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// 5. Import the store (we’ll create it next)
import store from "./store";

// 6. Import App component
import App from "./App";

// 7. Render the App inside Provider + BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
