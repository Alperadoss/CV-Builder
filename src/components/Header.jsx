import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h3>CV Builder App</h3>
      <button id="pdfbtn " onClick={props.handlePrint}>
        Print this out!
      </button>
    </div>
  );
}
