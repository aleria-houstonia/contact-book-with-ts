import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contactContext } from "../../contexts/ContactContext";
import { contactbook } from "../../interfaces";
import "./AddContact.css";
const AddContact = () => {
    const { postNewContact } = useContext<any>(contactContext);
    const [contact, setContact] = useState<contactbook>({
        name: "",
        number: 0,
        email: "",
        address: "",
        img: "",
    });
    const handleValues = (e: any): void => {
        let newContact = {
            ...contact,
            [e.target.name]: e.target.value,
        };
        setContact(newContact);
    };
    const handleClick = (): void => {
        postNewContact(contact);
        setContact({
            name: "",
            number: 0,
            email: "",
            address: "",
            img: "",
        });
    };
    return (
        <div className="add-things">
            <input
                value={contact.name}
                name="name"
                onChange={handleValues}
                placeholder="name"
                className="addings-things"
                type="text"
            />
            <input
                value={contact.number}
                name="number"
                onChange={handleValues}
                placeholder="number"
                className="addings-things"
                type="text"
            />
            <input
                value={contact.email}
                name="email"
                onChange={handleValues}
                placeholder="email"
                className="addings-things"
                type="text"
            />
            <input
                value={contact.address}
                name="address"
                onChange={handleValues}
                placeholder="address"
                className="addings-things"
                type="text"
            />
            <input
                value={contact.img}
                name="img"
                onChange={handleValues}
                placeholder="image"
                className="addings-things"
                type="text"
            />

            <Link to="/">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="addContacts"
                >
                    Add Contact
                </Button>
            </Link>
        </div>
    );
};
export default AddContact;
