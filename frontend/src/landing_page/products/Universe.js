// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/streakLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/sensibullLogo.svg" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/zerodhaFundhouse.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/goldenpiLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/images/dittoLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;

import React from "react";

function Universe() {
  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <h2 className="fw-bold">The Zerodha Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* First Row */}
      <div className="row text-center">
        <div className="col-md-4 p-3">
          <img src="media/images/smallcaseLogo.png" className="img-fluid mb-2" alt="Smallcase" />
          <p className="text-muted small">Thematic investment platform</p>
        </div>
        <div className="col-md-4 p-3">
          <img src="media/images/streakLogo.png" className="img-fluid mb-2" alt="Streak" />
          <p className="text-muted small">Algo & strategy platform</p>
        </div>
        <div className="col-md-4 p-3">
          <img src="media/images/sensibullLogo.svg" className="img-fluid mb-2" alt="Sensibull" />
          <p className="text-muted small">Options trading platform</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row text-center">
        <div className="col-md-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid mb-2" alt="Zerodha Fund House" />
          <p className="text-muted small">Asset management</p>
        </div>
        <div className="col-md-4 p-3">
          <img src="media/images/goldenpiLogo.png" className="img-fluid mb-2" alt="GoldenPi" />
          <p className="text-muted small">Bonds trading platform</p>
        </div>
        <div className="col-md-4 p-3">
          <img src="media/images/dittoLogo.png" className="img-fluid mb-2" alt="Ditto" />
          <p className="text-muted small">Insurance</p>
        </div>
      </div>

      {/* Signup Button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary btn-md px-4">Sign Up Now</button>
      </div>
    </div>
  );
}

export default Universe;

