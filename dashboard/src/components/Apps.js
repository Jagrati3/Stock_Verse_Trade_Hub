// import React from "react";

// const Apps = () => {
//   return <h1>Apps</h1>;
// };

// export default Apps;
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // make sure styles are in your CSS

const Apps = () => {
  return (
    <div className="apps-container">
      <h2 className="apps-title">Connected Apps</h2>
      <p className="apps-subtitle">
        Manage your integrations and explore new tools to enhance your trading experience.
      </p>

      <div className="apps-grid">
        {/* Example App Card */}
        <div className="app-card">
          <h3>Zerodha Kite</h3>
          <p>Seamless trading experience adv charts order management.</p>
          <Link to="/" className="btn btn-blue">Connect</Link>
        </div>

        <div className="app-card">
          <h3>TradingView</h3>
          <p>Powerful charting and analysis tools for professional traders.</p>
          <Link to="/" className="btn btn-green">Connect</Link>
        </div>

        <div className="app-card">
          <h3>Smallcase</h3>
          <p>Invest in curated portfolios built around themes and strategies.</p>
          <Link to="/" className="btn btn-blue">Connect</Link>
        </div>

        <div className="app-card">
          <h3>Mutual Funds</h3>
          <p>Track and invest in mutual funds directly from your dashboard.</p>
          <Link to="/" className="btn btn-green">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Apps;
