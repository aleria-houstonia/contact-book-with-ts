import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./Contacts.css";
import { contactContext } from "../../contexts/ContactContext";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: "auto",
        bottom: 0,

        backgroundColor: " rgb(61, 21, 196)",
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto",
    },
}));

const Contacts = () => {
    const classes = useStyles();
    const [res, setRes] = useState<boolean>(false);
    const { getContact, contactData, search, searchData } =
        useContext<any>(contactContext);
    useEffect(() => {
        getContact();
    }, [res]);

    const [searchValue, setSearchValue] = useState<string>("");
    const handleValue = (e: any) => {
        setSearchValue(e.target.value);
        search(searchValue);
    };
    return (
        <div className="totalDiv">
            <Paper square className={classes.paper} id="contacts">
                <div className="contacts">
                    <div className="input">
                        <input
                            onChange={handleValue}
                            onFocus={() => setRes(true)}
                            // onBlur={() => setRes(false)}
                            className="inp-search"
                            type="text"
                            placeholder="search"
                        />
                    </div>{" "}
                    {res ? (
                        <div className="search-result">
                            {searchData.map((item: any) => (
                                <Link key={item.id} to={`/details/${item.id}`}>
                                    <div>{item.name}</div>
                                </Link>
                            ))}
                        </div>
                    ) : null}
                    <div>
                        {contactData.length === 0 ? (
                            <div className="contact-message">
                                no contacts{" "}
                                <IconButton>
                                    <SentimentVeryDissatisfiedIcon />
                                </IconButton>
                            </div>
                        ) : (
                            contactData.map((item: any) => (
                                <Link to={`/details/${item.id}`}>
                                    <div className="contact-block">
                                        <img src={item.img} />
                                        <div>
                                            <div className="contact-elems contact-name">
                                                {" "}
                                                {item.name}
                                            </div>
                                            <div className="contact-elems contact-num">
                                                {item.number}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </Paper>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Link to="/add">
                        <Fab
                            color="secondary"
                            aria-label="add"
                            className={classes.fabButton}
                        >
                            <AddIcon />
                        </Fab>{" "}
                    </Link>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Contacts;
