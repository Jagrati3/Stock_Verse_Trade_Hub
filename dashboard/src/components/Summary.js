// import React from "react";

// const Summary = () => {
//   return (
//     <>
//       <div className="username">
//         <h6>Hi, User!</h6>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Equity</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3>3.74k</h3>
//             <p>Margin available</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Margins used <span>0</span>{" "}
//             </p>
//             <p>
//               Opening balance <span>3.74k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Holdings (13)</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3 className="profit">
//               1.55k <small>+5.20%</small>{" "}
//             </h3>
//             <p>P&L</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Current Value <span>31.43k</span>{" "}
//             </p>
//             <p>
//               Investment <span>29.88k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;





// ...................................................................
// ...................................................................
// ...................................................................
// ...................................................................
// ...................................................................

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Summary.css";

import userImg from "../assets/user.png";

const Summary = () => {

  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");

  // ✅ FIX 1: add missing function
  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  // ✅ logout
  const handleLogout = () => {
    localStorage.clear();

    window.dispatchEvent(new Event("storage"));

    navigate("/login");
  };

  return (
    <>
      {/* USER SECTION */}
      <div className="username">

        {!user ? (
          <div className="guest-box">
            <h2 className="guest-title">Hello 👋</h2>
            <p className="guest-text">Please login or signup</p>

            <div className="guest-actions">
              <Link to="/login" className="btn btn-blue">Login</Link>
              <Link to="/signup" className="btn btn-grey">Signup</Link>
            </div>
          </div>
        ) : (
          <div className="user-profile-card">

            {/* PROFILE */}
            <div className="profile-image-wrap">
              <div className="profile-glow"></div>

              <img
                src={userImg}
                alt="User Profile"
                onClick={handleProfileClick}
                className="profile-image"
              />
            </div>

            <div className="profile-text">
              <p className="welcome-text">Welcome back</p>
              <h2 className="profile-name">
                Hi, <span>{user}</span> 👋
              </h2>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="btn btn-grey"
              style={{ marginTop: "10px" }}
            >
              Logout
            </button>

          </div>
        )}

        <hr className="divider" />
      </div>

      {/* ===== OLD CONTENT (UNCHANGED) ===== */}

      <div className="section">
        <span><p>Equity</p></span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>3.74k</span></p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span><p>Holdings (13)</p></span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>Current Value <span>31.43k</span></p>
            <p>Investment <span>29.88k</span></p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;