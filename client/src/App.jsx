import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Campgrounds from "./views/Campgrounds";
import Signup from "./views/Signup";
import Login from "./views/Login";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import { ToastContainer } from "react-toastify";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<AuthOutlet fallbackPath="/login" />}>
            <Route path="/campgrounds" element={<Campgrounds />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
