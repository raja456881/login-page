import React from "react";
import "./App.css";
import Icon from "./assets/outlook.png";
const App = () => {
  return (
    <>
      <div className="main_wrap">
        <div className="left_side">
          <img src={Icon} alt="sgdh" />
        </div>
        <div className="right_side">
          <div style={{ marginBottom: "150px" }}>
            <div className="heading">Outlook</div>
            <div className="input_wrap">
              <div> Email Address: </div>
              <input type="text"></input>
            </div>
            <div className="input_wrap">
              <div> Password </div>
              <input type="text"></input>
            </div>

            <div className="last_head">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
              <span style={{ marginLeft: "5px" }}>Sign in</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
