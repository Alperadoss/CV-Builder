import { useState } from "react";
import "./App.css";
import InputPage from "./components/input-area/InputPage";
import Preview from "./components/preview/preview";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({
    contactInfo: "",
    shortBio: "",
    skills: [],
    experience: [],
    education: [],
  });

  return (
    <div className="App">
      <Header />
      <div className="main">
        <InputPage setData={setData} />
        <Preview data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
