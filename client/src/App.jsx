import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Campgrounds from "./views/Campgrounds";
import Signup from "./views/Signup";
import Login from "./views/Login";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { ToastContainer } from "react-toastify";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import NewCampground from "./views/NewCampground";
import Campground from "./views/Campground";
import Navbar from "./components/Navbar";
import { WishlistProvider } from "./components/WishlistContext";

export default function App() {
  const store = createStore({
    authName: "jwt",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
  });

  return (
    <AuthProvider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/campgrounds" element={<Campgrounds />} />
            <Route path="/campgrounds/:id" element={<Campground />} />
            <Route element={<AuthOutlet fallbackPath="/login" />}>
              <Route path="/campgrounds/new" element={<NewCampground />} />
            </Route>
          </Routes>
        </WishlistProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
