import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate,Link, Outlet } from 'react-router-dom';
import { Flex,Box,Card,Avatar,Text } from "@radix-ui/themes";

import Purchase from "../material/purchase";


function Sidebar(){
	
    return (
        <>
		
	<Router>
  <Link to = '/purchase'><button>Purchase</button></Link>
  

</Router>
       
		
	
        </>
    )
}

export default Sidebar;