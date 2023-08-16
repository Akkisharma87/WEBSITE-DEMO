import React from "react";
import data from "./OurHistory.json";
import "./OurHistory.css";

const OurHistory = () => {
  return (
    <div>
      {data.Section1.map((historydata) => {
        return (
          <div className="div-1">
            <div className="heading">
              <h1 className="head">{historydata.Heading}</h1>
            </div>
            <div className="para">
              <p>{historydata.Content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default OurHistory;
