
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { adminNav } from "./components/Admin/Header/adminNav";
import Login from "./components/Atoms/Body/Login";
import Navbar from "./components/Atoms/Header/Navbar";
import { userNav } from "./components/User/Header/userNav";
import Home from "./components/Admin/Pages/Home";
import UserHome from "./components/User/Pages/Home";
import List from "./components/Admin/Pages/List";
import Product from "./components/User/Pages/Product";
import Detail from './Components/Detail';
import Form from './Components/Form';
import Not from "./components/Atoms/Not";
import { useEffect, useState } from "react";

function App() {
  const role = "user";

  // console.log(data, "data");

  if (role === "admin") {
    return (
      <>
        {/* <Detail /> */}
        {/* <Form /> */}
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;

