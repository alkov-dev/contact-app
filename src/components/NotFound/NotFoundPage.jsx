import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            <p>Sorry, but this page not founed! </p> 
            <button onClick={() => {navigate("../login", { replace: true })}}>Go to the login</button>
        </div>
    );
};

export default NotFoundPage;