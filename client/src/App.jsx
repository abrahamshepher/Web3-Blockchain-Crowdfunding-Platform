import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

export const App = () => {
  return (<div className="relative sm:-8 p-4 bg-[#30303c] min-h-screen flex flex-row" >

    <div className="sm:flex hidden mr-10 relative">
      <Sidebar />
    </div>
    <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      </Routes>
    </div >
  </div >)

};

export default App;