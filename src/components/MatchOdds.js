import React from 'react'
import './bg.css'

export default function MatchOdds() {
  return (
    <>
      <div style={{ marginTop: "50px", padding: "10px" }}>

        {/* MATCH WINNER */}
        <div style={{ color: "white", padding: "13px" }}><b>Match Winner (incl. super over)</b></div>
        <div style={{
          display: "flex",
          flexDirection: "column",  // Updated to column for mobile view
          justifyContent: "space-between",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "60px",
            color: "white",
            width: "100%",  // Updated to 100% width for mobile view
            backgroundColor: "#1A3157",
            borderRadius: "20px",
            justifyContent: "center",
            marginBottom: "10px",  // Added margin for spacing
          }}>
            <div>
              <p>India</p>
            </div>
            <div>
              <p>2.01</p>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "60px",
            color: "white",
            height: "fit-content",
            width: "100%",  // Updated to 100% width for mobile view
            backgroundColor: "#1A3157",
            borderRadius: "20px",
            justifyContent: "center",
            textOverflow: "ellipsis",
            marginBottom: "10px",  // Added margin for spacing
          }}>
            <div>
              <p>Australia</p>
            </div>
            <div>
              <p>1.99</p>
            </div>
          </div>
        </div>

        {/* TOSS WINNER */}
        <div style={{ color: "white", padding: "13px" }}><b>TOSS Winner</b></div>
        <div style={{
          display: "flex",
          flexDirection: "column",  // Updated to column for mobile view
          justifyContent: "space-between",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "60px",
            color: "white",
            height: "",
            width: "100%",  // Updated to 100% width for mobile view
            backgroundColor: "#1A3157",
            borderRadius: "20px",
            justifyContent: "center",
            marginBottom: "10px",  // Added margin for spacing
          }}>
            <div>
              <p>India</p>
            </div>
            <div>
              <p>1.99</p>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "60px",
            color: "white",
            height: "fit-content",
            width: "100%",  // Updated to 100% width for mobile view
            backgroundColor: "#1A3157",
            borderRadius: "20px",
            justifyContent: "center",
            textOverflow: "ellipsis",
            marginBottom: "10px",  // Added margin for spacing
          }}>
            <div>
              <p>Australia</p>
            </div>
            <div>
              <p>1.99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



