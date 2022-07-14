import React, { useEffect } from "react";
import "./App.css";
import Image1 from "./Images/Image.png";
import Image3 from "./Images/image3.png";
import Image2 from "./Images/image2.jpg";

function App() {
  useEffect(() => {
    document.title = "Thank you very much!";
  });

  function click() {
    alert(document.title);
  }

  return (
    <div className="mobile">
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "red",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <img
              alt="image3"
              style={{ height: 100, backgroundColor: "#FFFFFF" }}
              src={Image3}
            />
            <img alt="image1" src={Image1} />
            <img
              alt="image3"
              style={{ height: 100, backgroundColor: "#FFFFFF" }}
              src={Image3}
            />
          </div>

          <img style={{ maxWidth: "100%" }} alt="image2" src={Image2} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F0F2F5",
          width: "50%",
          padding: 20,
        }}
      >
        <h3 style={{ color: "cyan" }}>OCBC Cycle 2015</h3>
        <b>Venue</b> &nbsp; Nullam in Dollor
        <br />
        <b>Date</b> &nbsp; 15 June 2015 <br />
        <h3 style={{ color: "cyan" }}>WEBSITE</h3>
        <p>
          Let's hit the road again as OCBC Cycle Singapore 2011 rides into town!
          Join us for the cycling event of the year as the fun goes on for three
          days a row, starting from 4 March! Adding to the thrill, is the
          professional Criterium
        </p>
        <button
          style={{
            textDecoration: "none",
            float: "right",
            color: "black",

            bottom: 0,
            right: 0,
          }}
          onClick={click}
        >
          <a
            style={{
              textDecoration: "none",
            }}
            href="some link"
          >
            See Similar Events >
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
