/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';

export const router=createBrowserRouter([
 
  {
    path:"/",
    Component:Root,
    errorElement:<errorElement></errorElement>,
    children:[
        {
            index:true,
            path:"/",
            loader:()=>fetch("booksData.json"),
            Component:Home

        }
    ]
  }

])