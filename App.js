import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&s"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const ResturenCard = () => {
  return (
    <div className="res-card">
      <img
        className="red-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7a2aca35-9ddb-4c31-a82e-6d3c9c665f43_10208.jpg"
      />
      <h3> Burger King </h3>
      <h4>Burger, Fries, coke</h4>
      <h4> 4.4 Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
        <ResturenCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
