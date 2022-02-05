import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import RegPage from '../../components/RegPage';
import LoginPage from '../../components/LoginPage';
import EditPage from '../../components/EditPage';
import NotFoundPage from '../../components/NotFound/NotFoundPage';
import HP from '../../components/HP';
import axios from 'axios';



const App = () => {
    const [authData, setAuth] = useState([])
    const [contactsData, setContactsData] = useState([])
    // const [contactId, setId] = useState(+localStorage.getItem('contact.id'))
    let boolValue = JSON.parse(localStorage.getItem('isLoggedIn'));
    const [isLoggedIn, setIsLoggedIn] = useState(boolValue)
      

    useEffect(() => {
        axios.get('http://localhost:3002/auth.json')
       .then(({data}) => {
           setAuth(data.authArray)})

        axios.get('http://localhost:3002/contacts')
        .then(({data}) => {
        setContactsData(data)})   
   },[])


    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" exact element={<LoginPage 
                        setIsLoggedIn={setIsLoggedIn}
                        authData={authData}
                        />} />
                    <Route 
                        path="/hp" 
                        exact element={<HP 
                            setIsLoggedIn={setIsLoggedIn} 
                            isLoggedIn={isLoggedIn}
                            authData={authData}
                            contactsData={contactsData}
                            />} />
                    
                    <Route path="/registration" exact element={<RegPage authData={authData}/>} />
                    <Route path="/ep" exact element={<EditPage contactsData={contactsData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="*" exact element={<NotFoundPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

