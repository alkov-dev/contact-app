import { useState, useEffect } from "react";
import "./RegPage.css";
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

const RegPage = ({authData}) => {
  let navigate = useNavigate();
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
    
  console.log(authData)
  console.log(error)


  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegistration = (e) => {
    e.preventDefault()
    let count = 0;
      for (let i = 0; i < authData.length; i++){
        if (login === authData[i].username) {
          setError('Имя с таким пользователем занято!')
          count++
        }
    }
    if (count === 0 ) {
        axios.post('http://localhost:3002/authArray', 
        { id: authData[authData.length-1].id+1,
          username: login,
          password: password,
        })
        navigate("../login", { replace: true })
    }  
  }
    // "authArray": [
    //   {
    //     "id": 0,
    //     "username": "Vasya",
    //     "password": "pa$$word"
    //   },


    const handleCancelClick = () => {
      navigate("../login", { replace: true })
    }

   return (
   <>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Registration
            </Typography>
            </Toolbar>
        </AppBar>

      <form className="loginForm" onSubmit={handleRegistration}>
        <div className="mail__input">
              <TextField
                id="outlined-mail-input"
                style = {{width: 350}}
                type="text"
                label="New login"
                onChange={handleLoginChange}
                onFocus={() => setError('')}
              />
          </div>
          <div className="phone__input">
              <TextField
                id="outlined-phone-input"
                style = {{width: 350}}
                type="phone"
                label="New password"
                onChange={handlePasswordChange}
                onFocus={() => setError('')}
              />
          </div>
        <div>
        <div className='buttonReg__container'>
                <div className="cancelReg__button">
                    <Button 
                    type="submit"
                    variant="contained"  
                    style = {{width: 100}} 
                    onClick = {handleCancelClick}
                    >Cancel</Button>
                </div>
                <div className="Reg__button">
                    <Button 
                    type="submit"
                    variant="contained"  
                    style = {{width: 100}} 
                    >Save</Button>
                </div>
          </div>
          <p className="errorMassage">{error}</p>
        </div>
      </form>
   
   </> 

    
  );
};


export default RegPage