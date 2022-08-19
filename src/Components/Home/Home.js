import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="search">
        <h2 className="text-center">Best foods waiting for your belly</h2>
        <div className="text-center">
          <input
            className="mx-auto mt-3 search-text ps-3 "
            type="text"
            placeholder="Search food items"
          />
          <button className="search-btn pe-3 " >Search</button>
        </div>
      </div>
      <div className="food-catagory" >
        <NavLink className="me-3" to="/breakfast" >
        {({ isActive }) => (
              <span
                className={
                  isActive ? "active" : undefined
                }
              >
                Breakfast
              </span>
            )}
        </NavLink>
        <NavLink className="me-3" to="/lunch" >
        {({ isActive }) => (
              <span
                className={
                  isActive ? "active" : undefined
                }
              >
                Lunch
              </span>
            )}
        </NavLink>
        <NavLink className="me-3" to="/dinner" >
        {({ isActive }) => (
              <span
                className={
                  isActive ? "active" : undefined
                }
              >
                Dinner
              </span>
            )}
        </NavLink>
        
      </div>
    </div>
  );
};

export default Home;
