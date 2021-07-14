import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory,
    useParams,
} from "react-router-dom";
import ContactContextProvider from "./contexts/ContactContext";
import AddContact from "./components/AddContact/AddContact";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import ContactsDetails from "./components/ContactsDetails.tsx/ContactsDetails";

const Routes = () => {
    return (
        <div>
            <ContactContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/add" component={AddContact} />
                        <Route
                            exact
                            path="/details/:id"
                            component={ContactsDetails}
                        />
                    </Switch>
                </BrowserRouter>
            </ContactContextProvider>
        </div>
    );
};

export default Routes;
