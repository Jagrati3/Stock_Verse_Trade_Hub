// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;
// ........................................................
// /.........................................
// ....................................................



import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TopBar from "./TopBar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "./Dashboard";

function Home() {

  const user = localStorage.getItem("loggedInUser");

  return (
    <>
      <TopBar />

      <Routes>

        {/* 🔥 Protected Routes */}
        <Route 
          path="/*" 
          element={user ? <Dashboard /> : <Navigate to="/login" />} 
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
}

export default Home;