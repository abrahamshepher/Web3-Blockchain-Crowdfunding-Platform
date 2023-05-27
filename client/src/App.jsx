import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

export const App = () => {
  return (<div className="relative sm:-8 p-4 bg-[#e5e5ed] min-h-screen flex flex-row" >

    <div className="sm:flex hidden mr-10 relative">
      <Sidebar />
    </div>
    <p className="font-xl font-bold">Test</p>
    <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div >
  </div >)

};

export default App;