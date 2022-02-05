import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const LoginPage = ({setIsLoggedIn, authData}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState('')
    
  
    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        let logCount = 0;
        let passCount = 0;
        let idUsernameCount = 0;
        let idPasswordCount = 0;
        for (let i = 0; i < authData.length; i++){

            if (login === authData[i].username) {
              logCount++; 
              idUsernameCount = authData[i].id;
            }
            if (password === authData[i].password) {
              passCount++; 
              idPasswordCount = authData[i].id;
        }
        if (logCount === 0 || passCount === 0 || idUsernameCount != idPasswordCount) {
          setError("You have entered incorrect data! Try again")
          document.getElementById('outlined-login-input').value = ''
          document.getElementById('outlined-password-input').value = ''
        }
        else { 
          navigate("../hp", { replace: true }) 

          for (let i = 0; i < authData.length; i++){
            if (login === authData[i].username)  localStorage.setItem('userID', authData[i].id)
          }
          setIsLoggedIn(true)
          localStorage.setItem('User', login)
          localStorage.setItem('isLoggedIn', true)
        }
    }
  }


   return (
    <>
                    <AppBar position="static">
                      <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Contact Manager
                        </Typography>
                      </Toolbar>
                    </AppBar>
    
      <form className="loginForm" onSubmit={handleLogIn}>
        <h2>Authorization</h2>
        <div className="auth__container">
        <div className="login__input">
            <TextField
              id="outlined-login-input"
              style = {{width: 350}}
              label="Login"
              type="login"
              autoComplete="current-password"
              onChange={handleLoginChange}
              onFocus={() => setError('')}
            />
        </div>
        <div className="login__password">
            <TextField
              id="outlined-password-input"
              style = {{width: 350}}
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              onFocus={() => setError('')}
            />
        </div>
        <div className="login__button">
          <Button type="submit" variant="contained">Login</Button>
        </div>
        <div>
          <p className="errorMassage">{error}</p>
        </div>
        <div className="registration">
          <span onClick={() => navigate("../registration", { replace: true })}>Registration</span>
        </div>
      </div>
      </form>
    
</>

  );
};


export default LoginPage