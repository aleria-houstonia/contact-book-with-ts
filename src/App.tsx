import { Paper } from "@material-ui/core";
import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Routes from "./Routes";

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Routes />
        </div>
    );
};

export default App;
