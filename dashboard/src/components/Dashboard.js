// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import "./Dashboard.css";



// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";
// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";

// import TopCoins from "./TopCoins";


// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container" >
//       <GeneralContextProvider>
//         <WatchList />
//       </GeneralContextProvider>
//       <div className="content">
//         <Routes>
//           <Route index element={<Summary />} />
//           {/* <Route exact path="/" element={<Summary />} /> */}
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />

//           {/* existing routes */}
//           <Route path="/coins" element={<TopCoins />} />


//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Route, Routes } from "react-router-dom";

import "./Dashboard.css";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import TopCoins from "./TopCoins";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      {/* Left Sidebar */}
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      {/* Main Content */}
      <div className="content">
        <Routes>

          {/* Default page */}
          <Route index element={<Summary />} />

          {/* Other pages */}
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
          <Route path="coins" element={<TopCoins />} />

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;