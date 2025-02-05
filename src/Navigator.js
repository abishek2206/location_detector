import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home/Home'
import MainPage from './Mainpage/MainPage'
import HomePage from './Mainpage/HomePage'
import StaffLocatorPage from './Mainpage/StaffLocatorPage'


const Navigator = () => {
  return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/home" element={<MainPage/>}></Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/staff-locator" element={<StaffLocatorPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navigator