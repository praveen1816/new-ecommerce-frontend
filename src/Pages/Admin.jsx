import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Ensure these imports are included
import Sidebar from '../Components/Sidebar';
import AddProduct from '../Components/AddProduct';
import ListProduct from '../Components/ListProduct';
import {BrowserRouter} from "react-router-dom"
const Admin = () => {
  return (
    <BrowserRouter>
     <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
   
  );
};

export default Admin;
