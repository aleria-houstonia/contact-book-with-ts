import { Button, IconButton } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../contexts/ContactContext";
import "./ContactsDetails.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});
const ContactsDetails = (props: any) => {
    const classes = useStyles();

    const { getContactDetails, contactDetails, deleteContact, saveContact } =
        useContext<any>(contactContext);
    const [buttonId, setButtonId] = useState<number>();
    const [edit, setEdit] = useState<boolean>(false);
    const [editedContact, setEditedContact] = useState({});
    useEffect(() => {
        getContactDetails(props.match.params.id);
    }, [edit]);

    const handleValue = (e: any): void => {
        let newContact = {
            ...editedContact,
            [e.target.name]: e.target.value,
        };
        setEditedContact(newContact);
    };
    console.log(contactDetails);

    const handleSave = (id: number): void => {
        setEdit(false);
        saveContact(id, editedContact);
    };
    const getEdit = (id: number): void => {
        console.log(id + "bhhb");
        setEdit(true);
        setButtonId(id);
    };
    return (
        <div className="main">
            {contactDetails ? (
                <div key={contactDetails.id} className="contacts">
                    {edit && buttonId == contactDetails.id ? (
                        <div className="edit-block">
                            {" "}
                            <textarea name="name" onChange={handleValue}>
                                {contactDetails.name}
                            </textarea>
                            <textarea name="number" onChange={handleValue}>
                                {contactDetails.number}
                            </textarea>
                            <textarea name="email" onChange={handleValue}>
                                {contactDetails.email}
                            </textarea>
                            <textarea name="address" onChange={handleValue}>
                                {contactDetails.address}
                            </textarea>
                            <textarea name="img" onChange={handleValue}>
                                {contactDetails.img}
                            </textarea>
                            <Button
                                className="save-btn"
                                variant="contained"
                                color="primary"
                                onClick={() => handleSave(contactDetails.id)}
                            >
                                Save
                            </Button>
                        </div>
                    ) : (
                        <div className="details">
                            {" "}
                            <div className="details-img">
                                <img src={contactDetails.img} />
                            </div>
                            <div className="details-text">
                                <div
                                    className="details-elem"
                                    key={contactDetails.id + "k"}
                                >
                                    {" "}
                                    Name: {contactDetails.name}
                                </div>
                                <div
                                    className="details-elem"
                                    key={contactDetails.id + "h"}
                                >
                                    Phone: {contactDetails.number}
                                </div>
                                <div
                                    className="details-elem"
                                    key={contactDetails.id + "g"}
                                >
                                    Email: {contactDetails.email}
                                </div>
                                <div
                                    className="details-elem"
                                    key={contactDetails.id + "g"}
                                >
                                    Address: {contactDetails.address}
                                </div>

                                <div style={{ textAlign: "center" }}>
                                    <Link to="/">
                                        <Button
                                            className="func-btn"
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                deleteContact(
                                                    contactDetails.id
                                                );
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </Link>

                                    <Button
                                        className="func-btn"
                                        variant="contained"
                                        color="secondary"
                                        style={{ marginLeft: "20px  " }}
                                        onClick={(e) =>
                                            getEdit(contactDetails.id)
                                        }
                                    >
                                        <EditIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {" "}
                    <div className={classes.root}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>{" "}
                    <div className={classes.root}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>{" "}
                    <div className={classes.root}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>{" "}
                    <div className={classes.root}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>
                </>
            )}
        </div>
    );
};

export default ContactsDetails;
