import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";

const stockData = [
  {
    id: 1,
    stockName: "Google",
    stockPrice: "$100",
  },
  {
    id: 2,
    stockName: "Amazon",
    stockPrice: "$999",
  },
  {
    id: 3,
    stockName: "Bajaj",
    stockPrice: "$123",
  },
  {
    id: 4,
    stockName: "Microsoft",
    stockPrice: "$545",
  },
  // Add more stock data objects as needed
];

const App = () => {
  // const [stockData, setStockData] = useState([]);

  // const fetchUserData = () => {
  //   fetch(
  //     "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=Z5ULGI1WCWNLXRMZ"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setStockData(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex flex-col items-center mt-10">
          <Routes>
            {/* Pass stockData as a prop inside the Route */}
            <Route
              exact
              path="/"
              element={<HomePage stockData={stockData} />}
            />
            <Route path="/detail/:stockName" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
