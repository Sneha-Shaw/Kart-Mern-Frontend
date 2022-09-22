import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'


const Router = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    {/* <Route exact path="" element={<Navigate to ='/login'/>} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default Router