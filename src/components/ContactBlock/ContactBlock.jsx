import React from 'react';
import { useState, useEffect, useRef } from "react";
import "./ContactBlock.css"
import pen from './icons/pen.svg'
import basket from './icons/basket.svg'
import avatar from './icons/avatar.svg'
import axios from 'axios';
import EditPage from '../EditPage';
import { useNavigate } from "react-router-dom";


const ContactBlock = ({contact, contactsData, inputValue}) => {

    let navigate = useNavigate();

    const handleDeleteContact = (id) =>{
        axios.delete(`http://localhost:3002/contacts/${id}`)
    }

    const handleEditClick = (id) =>{
        localStorage.setItem('contact.id', id)
        navigate("../ep", { replace: true }) 
    }

    let userID = +localStorage.getItem('userID')
    // console.log("OWNER",contact.ownerId);
    return (
        <>
            { userID === contact.ownerId && inputValue === '' && (
            <div className='contactsBlock__container'>
                <div className='description__block'>
                    <div>
                        <img className='avatarSVG' src={avatar} alt="" />
                    </div>
                    <div className='description'>
                        <div className='description__name'>{contact.name}</div>
                        <div>{contact.phonenumber}</div>
                        <div>{contact.email}</div>
                    </div>
                </div>
                <div className='icons__container'>
                     <img onClick={() => handleEditClick(contact.id)} className='penSVG' src={pen} alt="" />
                     <img onClick={() => handleDeleteContact(contact.id)} className='basketSVG' src={basket} alt="" />
                     {/* <img className='basketSVG' src={basket} alt="" /> */}
                </div>
             </div>
            )}
               
            { userID === contact.ownerId && inputValue === contact.name && (
            <div className='contactsBlock__container'>
                <div className='description__block'>
                    <div>
                        <img className='avatarSVG' src={avatar} alt="" />
                    </div>
                    <div className='description'>
                        <div className='description__name'>{contact.name}</div>
                        <div>{contact.phonenumber}</div>
                        <div>{contact.email}</div>
                    </div>
                </div>
                <div className='icons__container'>
                    <img onClick={() => handleEditClick(contact.id)} className='penSVG' src={pen} alt="" />
                    <img onClick={() => handleDeleteContact(contact.id)} className='basketSVG' src={basket} alt="" />
                    {/* <img className='basketSVG' src={basket} alt="" /> */}
                </div>
            </div>
            )}

            { userID === contact.ownerId && inputValue === contact.email && (
            <div className='contactsBlock__container'>
                <div className='description__block'>
                    <div>
                        <img className='avatarSVG' src={avatar} alt="" />
                    </div>
                    <div className='description'>
                        <div className='description__name'>{contact.name}</div>
                        <div>{contact.phonenumber}</div>
                        <div>{contact.email}</div>
                    </div>
                </div>
                <div className='icons__container'>
                    <img onClick={() => handleEditClick(contact.id)} className='penSVG' src={pen} alt="" />
                    <img onClick={() => handleDeleteContact(contact.id)} className='basketSVG' src={basket} alt="" />
                    {/* <img className='basketSVG' src={basket} alt="" /> */}
                </div>
            </div>
            )}

            { userID === contact.ownerId && inputValue === contact.phonenumber && (
            <div className='contactsBlock__container'>
                <div className='description__block'>
                    <div>
                        <img className='avatarSVG' src={avatar} alt="" />
                    </div>
                    <div className='description'>
                        <div className='description__name'>{contact.name}</div>
                        <div>{contact.phonenumber}</div>
                        <div>{contact.email}</div>
                    </div>
                </div>
                <div className='icons__container'>
                    <img onClick={() => handleEditClick(contact.id)} className='penSVG' src={pen} alt="" />
                    <img onClick={() => handleDeleteContact(contact.id)} className='basketSVG' src={basket} alt="" />
                    {/* <img className='basketSVG' src={basket} alt="" /> */}
                </div>
            </div>
            )}
 
        </>
    );
};

export default ContactBlock;