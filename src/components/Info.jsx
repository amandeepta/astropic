import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useContext } from 'react';
import ApodContext from './ApodContext';

function Info() {
    const { data } = useContext(ApodContext);

    return (
        <div className="p-8 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-lg 
        flex flex-col space-y-10 ">
            {/* Back link */}
            <div className="flex items-center w-full h-auto">
                <Link to="/" className="flex items-center p-2 bg-indigo-600 text-white rounded-lg
                 hover:bg-indigo-700 transition duration-300 hover:scale-105">
                    <HiOutlineArrowNarrowLeft className="w-6 h-6" />
                    <span className="ml-2">Back</span>
                </Link>
            </div>

            {/* APOD content */}
            {data ? (
                <div className="flex flex-col lg:flex-row lg:space-x-12 max-md:flex-col max-md:space-y-8">
                    {/* Image and title */}
                    <div>
                        {data?.url && (
                            <img
                                src={data.url}
                                alt={data.title}
                                className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        )}
                        {data?.title && (
                            <h2 className="text-2xl font-bold text-white mt-4 transition duration-300">{data.title}</h2>
                        )}
                    </div>

                    {/* Explanation */}
                    <div className="lg:w-1/2 mt-4 lg:mt-0">
                        {data?.explanation && (
                            <p className="text-lg text-gray-300 leading-relaxed transition duration-300">{data.explanation}</p>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-lg text-gray-400 transition duration-300">No data available</p>
            )}
        </div>
    );
}

export default Info;
