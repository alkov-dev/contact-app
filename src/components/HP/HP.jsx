// OneDark
import React from 'react';
import axios from 'axios'; 
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HP.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ContactBlock from '../ContactBlock/ContactBlock';

const HP = ({setIsLoggedIn, authData, userID, contactsData, isLoggedIn}) => {
  let navigate = useNavigate();
  const inputNameRef = useRef(null);
  const inputPhoneNumberRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputSearch = useRef(null);
  const [inputValue, setInputValue] = useState('');
  
  const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', false)
        localStorage.setItem('userID', null)
        navigate("../login", { replace: true })
        setIsLoggedIn(false)
  }

  const handleAddNewContact = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/contacts', 
        { id: contactsData[contactsData.length-1].id+1,
          ownerId: parseInt(localStorage.getItem('userID')),
          name: inputNameRef.current.value,
          email: inputEmailRef.current.value, 
          phonenumber: inputPhoneNumberRef.current.value});
    }
    
    const handleSearch = () => {
      setInputValue(inputSearch.current.value)
    }
    

    return (
      <>
        { isLoggedIn ?
          <div>
                    <AppBar position="static">
                    <Toolbar>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Contact Manager
                        </Typography>
                        <Button 
                          variant="outlined"
                          onClick={handleLogOut}
                          color="inherit">
                              Logout
                          </Button>
                    </Toolbar>
                  </AppBar>
                  <form className="loginForm" onSubmit={handleAddNewContact}>
          <div className="home__container">
            <div>
              <p>Hello, {localStorage.getItem('User')}</p>
              <div>
                <TextField
                  id="filled-search"
                  label="Search contact"
                  type="search"
                  variant="filled"
                  inputRef={inputSearch}
                  onChange={handleSearch}
                />
              </div>
              <div className="name__input">
                  <TextField
                    id="outlined-name-input"
                    style = {{width: 350}}
                    label="Name"
                    type="text"
                    inputRef={inputNameRef}
                  />
              </div>
              <div className="mail__input">
                  <TextField
                    id="outlined-mail-input"
                    style = {{width: 350}}
                    label="Mail"
                    type="text"
                    inputRef={inputEmailRef}
                  />
              </div>
              <div className="phone__input">
                  <TextField
                    id="outlined-phone-input"
                    style = {{width: 350}}
                    label="Phone number"
                    type="text"
                    inputRef={inputPhoneNumberRef}
                  />
              </div>
    
              <div className="add__button">
                <Button 
                  type="submit"
                  variant="contained"  
                  style = {{width: 100}} 
                  endIcon={<SendIcon />}
                >Add</Button>
              </div>
    
            </div>
          </div>
        </form>

      <div>
      {
        contactsData.map((contact) => <ContactBlock inputValue={inputValue} contactsData={contactsData} contact={contact}/> )
      }
      </div>


      </div>
          :
      <div><p>Please, login</p>
      <button onClick={() => {navigate("../login", { replace: true })}}>Go to the login</button></div>
      
        
      }



   

      </>
    );
};

export default HP;