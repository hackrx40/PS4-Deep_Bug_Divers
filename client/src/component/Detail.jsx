import React from 'react';
import { useParams } from 'react-router-dom';
import RealtimeStock from './RealTimeStock';

const Detail = () => {
  const { stockName } = useParams();

  return (
    <div>
      <h1 className="border-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-300">
        Stock Details: {stockName}
      </h1>
      <RealtimeStock />
    </div>
  );
};

export default Detail;
