// import React from "react";

// function Hero() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 mb-5">
//         <h1 className="fs-2 text-center">
//           We pioneered the discount broking model in India
//           <br />
//           Now, we are breaking ground with our technology.
//         </h1>
//       </div>

//       <div
//         className="row p-5 mt-5 border-top text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-5">
//           <p>
//             We kick-started operations on the 15th of August, 2010 with the goal
//             of breaking all barriers that traders and investors face in India in
//             terms of cost, support, and technology. We named the company
//             Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
//             barrier.
//           </p>
//           <p>
//             Today, our disruptive pricing models and in-house technology have
//             made us the biggest stock broker in India.
//           </p>
//           <p>
//             Over 1+ Crore clients place millions of orders every day through our
//             powerful ecosystem of investment platforms, contributing over 15% of
//             all Indian retail trading volumes.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <p>
//             In addition, we run a number of popular open online educational and
//             community initiatives to empower retail traders and investors.
//           </p>
//           <p>
//             <a href="" style={{ textDecoration: "none" }}>
//               Rainmatter
//             </a>
//             , our fintech fund and incubator, has invested in several fintech
//             startups with the goal of growing the Indian capital markets.
//           </p>
//           <p>
//             And yet, we are always up to something new every day. Catch up on
//             the latest updates on our blog or see what the media is saying about
//             us.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
// .................................................................................................
// .................................................................................................
// .................................................................................................
// .................................................................................................
// .................................................................................................
import React from "react";
import { FaChartLine, FaUsers, FaLightbulb, FaUniversity, FaGlobe } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="hero d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #93c5fd)",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7 text-center text-md-start">
            <h1 className="display-3 fw-bold text-dark mb-4">
              Empowering India’s Investors
            </h1>
            <p className="fs-5 text-muted mb-4">
              From pioneering discount broking to building cutting‑edge trading
              technology, we’ve transformed how India invests.  
              <br />
              Join millions of traders shaping the future of finance.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#open-account" className="btn btn-success btn-lg px-4">
                Open Account
              </a>
              <a href="#explore-platforms" className="btn btn-outline-dark btn-lg px-4">
                Explore Platforms
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="row text-center g-4">
              <div className="col-6">
                <FaChartLine size={50} className="text-primary mb-3" />
                <h5 className="fw-bold">15% Retail Volumes</h5>
                <p className="text-muted small">Driving India’s daily trades</p>
              </div>
              <div className="col-6">
                <FaUsers size={50} className="text-success mb-3" />
                <h5 className="fw-bold">1+ Crore Clients</h5>
                <p className="text-muted small">Trusted nationwide</p>
              </div>
              <div className="col-6">
                <FaUniversity size={50} className="text-info mb-3" />
                <h5 className="fw-bold">Financial Education</h5>
                <p className="text-muted small">Empowering retail investors</p>
              </div>
              <div className="col-6">
                <FaGlobe size={50} className="text-warning mb-3" />
                <h5 className="fw-bold">Global Vision</h5>
                <p className="text-muted small">Innovating for tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
