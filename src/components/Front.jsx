import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ApodContext from './ApodContext';
import { useContext } from 'react';

function Front() {
    const { data, date, setDate, loading } = useContext(ApodContext);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    return (
        <div className="flex flex-col items-center justify-center w-max h-max space-y-8 p-8 bg-gradient-to-br from-gray-800
         to-black rounded-lg shadow-lg">
            {/* Loading message */}
            {loading && (
                <p className="text-xl font-semibold text-gray-500 animate-pulse">
                    Loading...
                </p>
            )}
            
            <h1 className="text-xl font-bold text-gray-400 text-center shadow-md">
                Astronomy Picture of the Day
            </h1>

            {/* Image */}
            {data?.url && (
                <img
                    src={data.url}
                    alt={data.title}
                    className="w-full max-w-lg rounded-lg shadow-lg 
                    transition-transform duration-300 hover:scale-105"
                />
            )}

            {/* Title */}
            {data?.title && (
                <h2 className="text-xl font-bold text-gray-400 mt-4 shadow-sm">
                    {data.title}
                </h2>
            )}

            {/* Date input */}
            <div className="flex items-center space-x-4">
                <label htmlFor="date" className="text-lg font-medium text-gray-400">
                    Choose Date:
                </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    className="px-4 text-white py-2 border border-gray-700 bg-gray-800 rounded-lg 
                    focus:outline-none focus:ring focus:ring-indigo-600 transition duration-300"
                />
            </div>

            {/* Link to info page */}
            <Link
                to="/info"
                className="flex items-center px-6 py-3 bg-indigo-600 text-white 
                rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            >
                <span className="flex-1">For Further Info</span>
                <HiArrowNarrowRight className="w-6 h-6" />
            </Link>
        </div>
    );
}

export default Front;
