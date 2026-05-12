// import React from "react";

// function Team() {
//   return (
//     <div className="container">
//       <div className="row p-3 mt-5 border-top">
//         <h1 className="text-center ">People</h1>
//       </div>

//       <div
//         className="row p-3 text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-3 text-center">
//           <img
//             src="media/images/nithinKamath.jpg"
//             style={{ borderRadius: "100%", width: "50%" }}
//           />
//           <h4 className="mt-5">Nithin Kamath</h4>
//           <h6>Founder, CEO</h6>
//         </div>
//         <div className="col-6 p-3">
//           <p>
//             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//             hurdles he faced during his decade long stint as a trader. Today,
//             Zerodha has changed the landscape of the Indian broking industry.
//           </p>
//           <p>
//             He is a member of the SEBI Secondary Market Advisory Committee
//             (SMAC) and the Market Data Advisory Committee (MDAC).
//           </p>
//           <p>Playing basketball is his zen.</p>
//           <p>
//             Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
//             <a href="">Twitter</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;

// .................................................................................................
// .................................................................................................
// .................................................................................................
// .................................................................................................
// .................................................................................................

import React from "react";

function Team() {
  return (
    <section className="team py-5 bg-light">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="fw-bold display-5 text-dark">Meet Our People</h2>
            <p className="text-muted fs-5">
              The visionaries behind Zerodha’s journey in transforming India’s financial landscape.
            </p>
          </div>
        </div>

        {/* Team Member */}
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="media/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="img-fluid shadow-lg"
              style={{
                borderRadius: "50%",
                width: "250px",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <h4 className="mt-4 fw-bold">Nithin Kamath</h4>
            <h6 className="text-muted">Founder & CEO</h6>
          </div>

          {/* Bio */}
          <div className="col-md-7">
            <p className="fs-5 text-muted">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="fs-5 text-muted">
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="fs-5 text-muted">Playing basketball is his zen.</p>

            {/* Social Links */}
            <p className="mt-3">
              <span className="fw-semibold">Connect:</span>{" "}
              <a href="#" className="text-decoration-none text-primary">Homepage</a> /{" "}
              <a href="#" className="text-decoration-none text-success">TradingQnA</a> /{" "}
              <a href="#" className="text-decoration-none text-info">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
