import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";



function Routing(){
    <BrowserRouter>
    <Router>
    <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/customer" element={<Customer />} />
    </Routes>
    </Router>
    </BrowserRouter>


}

export default Routing;