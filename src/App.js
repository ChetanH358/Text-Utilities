import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

//*********************************************************************************** */

function App() {
  const [mode, setmode] = useState("secondary");
  const [Textmode, setTextmode] = useState("light");
  const [Textcolor, setTextcolor] = useState("text-dark");
  const [alert, setalert] = useState(null);

  // our alert is going to be an object by defalut it is null
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "secondary" || mode === "light") {
      setmode("dark");
      setTextcolor("text-light");
      setTextmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      setTextcolor("text-dark");
      setTextmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}></Alert>
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to Analyze : "
        Textmode={Textmode}
        Textcolor={Textcolor}
      ></TextForm>
    </>
  );
}

export default App;
