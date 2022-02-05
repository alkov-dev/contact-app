// OneDark
import React from 'react';
import axios from 'axios'; 
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./EditPage.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContactBlock from '../ContactBlock/ContactBlock';

const EditPage = ({contactsData, isLoggedIn, setIsLoggedIn}) => {
    const [contactId, setId] = useState(+localStorage.getItem('contact.id'))

    const inputNameRef = useRef(null);
    const inputPhoneNumberRef = useRef(null);
    const inputEmailRef = useRef(null);
    let navigate = useNavigate();

    const handleEditContact = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3002/contacts/${contactId}`, 
        { id: contactId,
          ownerId: +localStorage.getItem('userID'),
          name: inputNameRef.current.value,
          email: inputEmailRef.current.value, 
          phonenumber: inputPhoneNumberRef.current.value});
        navigate("../hp", { replace: true }) 
        // setIsLoggedIn(true)
    }
  
    let Name = "";
    let Email = "";
    let Phonenumber = "";

    for (let i = 0; i < contactsData.length; i++) {
        if (contactId === contactsData[i].id) {
            Name = contactsData[i].name;
            Email = contactsData[i].email;
            Phonenumber = contactsData[i].phonenumber;
        }
    }

    const handleCancelClick = () => {
        navigate("../hp", { replace: true })
    }

    return (
      <>

    { isLoggedIn ? 
    <div>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Edit contact
            </Typography>
            </Toolbar>
        </AppBar>

        <form className="loginForm" onSubmit={handleEditContact}>
        <div className="home__container">
            <div>
            <div className="name__input">
                {/* <input type="text" value={name}/> */}
                <TextField
                    id="outlined-name-input"
                    defaultValue={Name}
                    style = {{width: 350}}
                    type="name"
                    inputRef={inputNameRef}
                />
            </div>
            <div className="mail__input">
                <TextField
                    id="outlined-mail-input"
                    style = {{width: 350}}
                    defaultValue={Email}
                    type="mail"
                    inputRef={inputEmailRef}
                />
            </div>
            <div className="phone__input">
                <TextField
                    id="outlined-phone-input"
                    style = {{width: 350}}
                    defaultValue={Phonenumber}
                    type="phone"
                    inputRef={inputPhoneNumberRef}
                />
            </div>
            <div className='buttonEdit__container'>
                    <div className="cancelEdit__button">
                        <Button 
                        type="submit"
                        variant="contained"  
                        style = {{width: 100}} 
                        onClick = {handleCancelClick}
                        >Cancel</Button>
                    </div>
                    <div className="edit__button">
                        <Button 
                        type="submit"
                        variant="contained"  
                        style = {{width: 100}} 
                        >Save</Button>
                    </div>
            </div>
            </div>
          </div>
        </form>
    </div>
    :
    <div>
        <p>Please, login</p>
        <button onClick={() => {navigate("../login", { replace: true })}}>Go to the login</button>
    </div>
    }


      </>
    );
};

export default EditPage;