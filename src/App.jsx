import React, { useState, useRef } from "react";
import "./App.css";
import InputPage from "./components/input-area/InputPage";
import Preview from "./components/preview/preview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactToPrint from "react-to-print";

function App() {
  const [data, setData] = useState({
    contactInfo: "",
    shortBio: "",
    skills: [],
    experience: [],
    education: [],
  });

  const componentRef = useRef();
  function handlePrint() {
    console.log("i work");
  }

  return (
    <div className="App">
      <Header handlePrint={handlePrint} />
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div className="main">
        <InputPage setData={setData} />
        <Preview ref={componentRef} data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
