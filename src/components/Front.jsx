import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";
import ApodContext from './ApodContext';
import { useContext } from 'react';

function Front() {
    
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const { data, setData } = useContext(ApodContext);
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
        <>
            <div className="flex flex-col items-center justify-center w-max h-max 
            space-y-8 p-8 bg-gray-100 rounded-lg shadow-md ">
                {/* Loading message */}
                {loading && <p className="text-xl font-semibold text-gray-600">Loading...</p>}
                <h1 className="text-xl font-bold text-indigo-600 text-center">
                    Astronomy Picture of the Day
                </h1>

                
              
                {data?.url && (
                    <img src={data.url} alt={data.title} className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
                )}
                
                {/* Title */}
                {data?.title && (
                    <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
                )}
                
                {/* Date input */}
                <div className="flex items-center space-x-4">
                    <label htmlFor="date" className="text-lg font-medium text-gray-700">Choose Date:</label>
                    <input type="date" id="date" value={date} onChange={handleDateChange} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                
                <Link to= '/info' className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300">
                    <span className="flex-1">For Further Info</span>
                    <HiArrowNarrowRight className="w-6 h-6" />
                </Link>
            </div>
        </>
    );
}

export default Front;
