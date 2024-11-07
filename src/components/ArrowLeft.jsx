import React from "react";

export default function ArrowLeft() {
  return (
    <div className="bg-zinc-300 rounded-full p-1">
      <svg width="26px" height="26px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <title>ionicons-v5-a</title>
        <polyline
          points="244 400 100 256 244 112"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48px",
          }}
        />
        <line
          x1="120"
          y1="256"
          x2="412"
          y2="256"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48px",
          }}
        />
      </svg>
    </div>
  );
}
