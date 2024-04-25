import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const ApodContext = createContext();

export function ApodProvider({ children }) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const[data,setData] = useState(null);
    const apiKey = 'hVfDJaFp8bFG5ZrFTYiGLyfZFAIYcd3Ubc4IRlBU';
    const [loading, setLoading] = useState(false);

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
        <ApodContext.Provider value = {{data, date, setDate, loading}}>
            {children}
        </ApodContext.Provider>
    )
}

export default ApodContext;