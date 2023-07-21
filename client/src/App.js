import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";

const App = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyanpA3EAjGyTQMAVBu_YvRZwmfVt9T0qXQAvvs5j_7nuCkjNV1DnDCOsnWj6N6WyEY/exec"
        );
        const data = await response.json();

        if (data && data.data && Array.isArray(data.data)) {
          // Filter out the first row which contains table headers
          const stockInfo = data.data.slice(1).map((item) => ({
            stockName: item.symbol,
            stockPrice: item.close.toFixed(2).toString(),
            tradeDate: item["trade-date"],
          }));

          // Find the latest data of each stock
          const latestStockData = stockInfo.reduce((accumulator, currentValue) => {
            const existingStock = accumulator.find(
              (stock) => stock.stockName === currentValue.stockName
            );
            if (existingStock) {
              // Compare the trade-date to get the latest entry
              const existingDate = new Date(existingStock.tradeDate);
              const currentDate = new Date(currentValue.tradeDate);
              if (currentDate > existingDate) {
                existingStock.stockPrice = currentValue.stockPrice;
                existingStock.tradeDate = currentValue.tradeDate;
              }
            } else {
              accumulator.push(currentValue);
            }
            return accumulator;
          }, []);

          setStockData(latestStockData);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex flex-col items-center mt-10">
          <Routes>
            {/* Pass stockData as a prop inside the Route */}
            {stockData.length > 0 ? (
              <Route exact path="/" element={<HomePage stockData={stockData} />} />
            ) : null}
            <Route path="/Detail/:stockName" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
