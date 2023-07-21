import React from "react";
import { Link } from "react-router-dom";
const StockData = ({ stockName, stockPrice }) => {
  return (
    <div>
      <Link to={`/detail/${stockName}`}>
        <div className="flex justify-between items-center bg-slate-100 hover:bg-slate-300 mx-auto p-4 h-1/2 border-black border rounded shadow-md mb-2 transition-all duration-300 ease-in-out">
          <div className="text-right pr-2">{stockName}</div>
          <div className=""></div>
          <div className="text-left pl-2">{stockPrice}</div>
        </div>
      </Link>
    </div>
  );
};
export default StockData;
