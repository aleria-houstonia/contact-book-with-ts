import React, { ReactElement, useReducer } from "react";
import axios from "axios";
import { contactbook } from "../interfaces";
export const contactContext = React.createContext({});

const INIT_STATE = {
    contactData: [],
    contactDetails: null,
    searchData: [],
};

const reducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case "GET_CONTACT":
            return { ...state, contactData: action.payload };
        case "GET_CONTACT_DETAILS":
            return { ...state, contactDetails: action.payload };
        case "SEARCH":
            return { ...state, searchData: action.payload };
        default:
            return state;
    }
};

const ContactContextProvider: React.FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    function postNewContact(contact: contactbook) {
        axios.post("http://localhost:8009/contacts", contact);
        console.log("work");
    }

    async function getContact() {
        let { data } = await axios("http://localhost:8009/contacts");

        dispatch({
            type: "GET_CONTACT",
            payload: data,
        });
    }
    async function search(value: string) {
        let { data } = await axios(`http://localhost:8009/contacts?q=${value}`);
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }
    async function getContactDetails(id: number) {
        let { data } = await axios(`http://localhost:8009/contacts/${id}`);
        // console.log(data);
        dispatch({
            type: "GET_CONTACT_DETAILS",
            payload: data,
        });
    }
    async function deleteContact(id: number) {
        await axios.delete(`http://localhost:8009/contacts/${id}`);
        getContactDetails(id);
    }

    async function saveContact(id: number, newContact: contactbook) {
        await axios.patch(`http://localhost:8009/contacts/${id}`, newContact);
        getContactDetails(id);
    }
    return (
        <contactContext.Provider
            value={{
                contactDetails: state.contactDetails,
                searchData: state.searchData,
                contactData: state.contactData,
                postNewContact,
                getContact,
                deleteContact,
                saveContact,
                search,
                getContactDetails,
            }}
        >
            {children}
        </contactContext.Provider>
    );
};
export default ContactContextProvider;
