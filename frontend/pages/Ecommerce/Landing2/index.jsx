import { useParams } from "react-router-dom";
import "./E-land.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { getId } from "../../../src/utils/index.js";
// import { useSearchParams } from "react-router-dom";

const EcomLand = () => {
  const Logout = () => {};

  return (
    <div className="land">
      <div className="page">
        <div className="people">
          <div className="sidebar11">
            <h1 className="Mypro">E-commerce</h1>

            <button className="probt" onClick="">
              Home
            </button>
            <button className="probt" onClick="">
              Account
            </button>
            <button className="probt" onClick="">
              cart
            </button>

            <button className="probt">Orders</button>
            <button className="probt">settings </button>
            <button className="probt">About</button>
          </div>
          <div className="header11">
            <select
              // name="address"
              id=""
              className="select"
              onChange=""
              placeholder="category"
              disabled={0}
            >
              <option value="0">District</option>
              <option value="kozhikode">kozhikode</option>
              <option value="thrissur">Thrissur</option>
              <option value="palakad">palakad</option>
              <option value="kollam">kollam</option>
              <option value="5">Ernakulam</option>
            </select>

            <div className="search">
              <input
                // value={query}
                className="inp"
                type="text"
                // onChange={onFilter}
                placeholder="------search here-----"
              />
              <input type="hidden" name="address" />
              <button className="btns" onClick="">
                search
              </button>
            </div>
            <button className="btn8" onClick={Logout}>
              Logout
            </button>
          </div>
          <div className="content"></div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default EcomLand;
