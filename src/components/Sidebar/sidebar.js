import "./sidebar.css";
import React from "react";
// import axios from '../http-common';
import Avatar from 'react-avatar';
// import {removeUser} from '../utils/Common';
import { useHistory,Link} from "react-router-dom";

export const Sidebar = ({ width, height, options,label }) => {
    let history = useHistory();

 

  const list = options.map(parts =>
    <a href={`/${parts.url}`} key={parts.id}>
    <li key={parts.id} className="text-white py-4 flex items-center ml-12" style={{listStyle:"none"}}><span className="mr-4"> {parts.svg}</span><span className="text-gray-400"> {parts.label}</span></li></a>)

  const handleLogout = () => {
   
  }

  return (
    <div className="w-1/5 bg-gray-900 h-screen fixed rounded-r-lg ">
      <span className="mx-12 text-lg text-gray-400 font-semibold">Menu</span>
      <label className="text-xl font-bold uppercase mt-4 ">{label} </label>
        {list}
    </div>
  );
};

export default Sidebar;