import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    // Initialize the date state variable with today's date in 'YYYY-MM-DD' format
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const apiKey = 'hVfDJaFp8bFG5ZrFTYiGLyfZFAIYcd3Ubc4IRlBU'; // Your API key

    // Handler function to handle date input changes
    function handleDateChange(e) {
        setDate(e.target.value);
    }

    // Function to fetch APOD data for a specific date
    const fetchApodData = async (date) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching the APOD data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApodData(date);
    }, [date]);

    return (
        <div>
                <div>
                <p className={`${loading? 'show' : 'hidden'}`}>Loading</p>
                <img src={data.url} alt={data.title} style={{ width: '100%', height: 'auto' }} />
                <h1>{data.title}</h1>
                <input type="date" value={date} onChange={handleDateChange} />
                
                <button>For furhur info</button>
                </div>
            
            
        </div>
    );
}

export default App;
