import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/app/AppRoute";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
