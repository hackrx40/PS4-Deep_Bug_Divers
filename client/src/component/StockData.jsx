import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StockData = ({ stockName, stockPrice }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    // Get the image from the public/stocks folder.
    const fetchImage = async () => {
      try {
        const response = await fetch(`/charts/${stockName}.png`);
        const imageData = await response.blob();
        setImage(URL.createObjectURL(imageData));
      } catch (error) {
        console.error("Error fetching image:", error);
        setImage(""); // If the image is not found, set image to empty string to display a placeholder or handle the error.
      }
    };
    fetchImage();
  }, [stockName]);

  return (
    <div>
      <Link to={`/detail/${stockName}`}>
        <div className="flex justify-between items-center bg-slate-100  mx-auto  h-1/2   transition-all duration-300 ease-in-out">
          <div className="text-right pl-3 pr-2">{stockName}</div>
          <div className="text-left pl-2">{stockPrice}</div>
          {image ? <img className="h-[40%] w-[40%] pr-2" src={image} alt={stockName} /> : <div>No Image Found</div>}
        </div>
      </Link>
    </div>
  );
};

export default StockData;
