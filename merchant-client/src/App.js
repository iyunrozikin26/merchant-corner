import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import CartProduct from "./pages/cart/Cart";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Order from "./pages/order/Order";
import CmsUser from "./pages/cms/CmsUser";
import CmsProduct from "./pages/cms/CmsProduct";
import ModalDetails from "./components/ModalDetails";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
    return (
        <>
            {/* {localStorage.access_token && <Navbar />} */}
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/product" element={<Home />} />
                <Route path="/product/:id/details" element={<Details />} />
                <Route path="/cart" element={<CartProduct />} />
                <Route path="/order" element={<Order />} />
                <Route path="/admin/cmsUsers" element={<CmsUser />} />
                <Route path="/admin/cmsProducts" element={<CmsProduct />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Routes>
            <Footer />
            <Outlet />
        </>
    );
}

export default App;
