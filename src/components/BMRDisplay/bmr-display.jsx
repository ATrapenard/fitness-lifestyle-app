import React from "react";
import "./bmr-display.css";

const BMRDisplay = (props) => {
  console.log(props);
  const { BMRData } = props;
  return (
    <div>
      {BMRData.map((item) => (
        <div className="item-wrapper">
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              paddingRight: "1rem",
            }}
          >
            {item.name}
          </div>
          <div key={item.name}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};
//   <div>
//     <h1>{v[0]}</h1>

//     <h1>{v[1]}</h1>
//     <h1>{v[2]}</h1>
//   </div>

export default BMRDisplay;
