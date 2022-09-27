import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from './pages/Home/Home'
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import UserProfile from "./pages/UserProfile/UserProfile";

const Router = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/your-cart" element={<Cart />} />
                    <Route exact path="/profile" element={<UserProfile />} />
                    <Route exact path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default Router