import React,{useState} from 'react'
// import AuthService from "../services/auth-service";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Dropdown from '../DropDown/DropDown'

function Header({headerOptions,dropOptions}) {
    const head = headerOptions.map((header,i)=>{
        return(
         <a href ={header.url} className="mr-5 hover:text-gray-900" key={i}>{header.label}</a> 
 )
    })
	return (
    <header className="text-gray-700 body-font shadow-lg rounded-lg mx-4">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">LawShastra</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {head}
         
        </nav>
       
      </div>
</header>
)}

export default Header