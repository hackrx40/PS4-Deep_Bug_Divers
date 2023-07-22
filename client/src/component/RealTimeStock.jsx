import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  //   const json = useRef([]);

  useEffect(() => {
    // Function to fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        // console.log(savior);
        const jsonData = await response.json(); // Convert response to JSON
        console.log(response, jsonData);

        // json.current = jsonData['3'];
        // console.log(json.current);
        setData(jsonData['3']); // Extract the specific key value from the JSON data
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };
    fetchData(); // Fetch the JSON data on component mount
    const timer = setInterval(fetchData, 1000); // Update data after 1 second

    return () => clearInterval(timer); // Clear the timer on component unmount
  }, []);

  return (
    <div className="bg-white m-5">
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="natural" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 900]} />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default App;
