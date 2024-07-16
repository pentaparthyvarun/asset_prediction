import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import FileUpload from '../FileUpload/FileUpload';
import { Routes, Route } from "react-router-dom";
import LocationAssetDetails from '../LocationAssetDetails/LocationAssetDetails';
import LaptopDetails from '../LaptopDetails/LaptopDetails';
import Accounts from '../Accounts/Accounts';
// import Home from '../Home/Home';
import Logs from '../Logs/Logs';
import Graph from '../Graph/Graph';
import "./Main.css";

function App() {
    return (
        <div className='App'>
            <nav className='Mainpage'>
                <Navbar userName="Admin" userRole="Asset Predictor"/>
                <div className='Maindiv'>
                    {/* <div className="Sidebar">
                        <Sidebar />
                    </div> */}
                    <div className="Sidebar1">
                        <Routes>
                            <Route path="home" element={<FileUpload />} />
                            <Route path="fileupload" element={<FileUpload />} />
                            <Route path="predictedData" element={<LocationAssetDetails />} />
                            <Route path="predictedData/laptopdetails" element={<LaptopDetails />} />
                            <Route path="accounts" element={<Accounts />} />
                            <Route path="logs" element={<Logs />} />
                            <Route path="graph" element={<Graph />} />
                        </Routes>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default App;