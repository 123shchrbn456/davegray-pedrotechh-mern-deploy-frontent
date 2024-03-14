import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App2 from "./App2.jsx";
import { store } from "./app/store";
import "./index.css";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <App /> */}
            <App2 />
        </Provider>
    </React.StrictMode>
);
