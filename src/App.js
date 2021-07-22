import React, { useState } from "react";
import Vac from "./vac";
import Head from "./Head";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [data, setData] = useState([]);
  const [pincode, setPincode] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const cgInput = (event) => {
    setPincode(event.target.value);
  };
  // console.log(pincode);
  // console.log(startDate.getDate());
  // console.log(startDate.getMonth() + 1);
  // console.log(startDate.getFullYear());

  // setLoading(false);

  const fetchApi = async () => {
    try {
      const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${startDate.getDate()}-${
        startDate.getMonth() + 1
      }-${startDate.getFullYear()}`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson.sessions);
      setData(resJson.sessions);
    } catch (e) {
      console.log("my error is " + e);
    }
  };

  return (
    <>
      <Head></Head>
      <div className="row">
        <input
          placeholder="Enter PINCODE"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              event.preventDefault();
              if (pincode.length === 0) {
              alert("Enter Pincode");
            } else if (pincode.length !== 6) {
              alert("Enter valid pincode with 6 digits");
            } else {
              fetchApi();
            }
              // Trigger the button element with a click
            }
          }}
          type="number"
          className="inp"
          onChange={cgInput}
          value={pincode}
        />
        <div className="">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            className="inp2"
            placeholderText='Enter "date"'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            value={startDate}
            withPortal
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            if (pincode.length === 0) {
              alert("Enter Pincode");
            } else if (pincode.length !== 6) {
              alert("Enter valid pincode with 6 digits");
            } else {
              fetchApi();
            }
          }}
        >
          find <span className="glass">🔍</span>{" "}
        </button>
      </div>
      <Vac slots={data}></Vac>
    </>
  );
}

export default App;
