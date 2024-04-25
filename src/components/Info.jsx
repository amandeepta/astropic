import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useContext } from 'react';
import ApodContext from './ApodContext';

function Info() {
    const { data } = useContext(ApodContext);

    return (
        <div className="text-white p-8 flex flex-col">
            <div className='flex items-center space-x-6'>
                <Link to="/" className="flex items-center">
                    <HiOutlineArrowNarrowLeft className='w-6 h-6' />
                    <span className="ml-2">Back</span>
                </Link>
            </div>
            
            {data ? (
                <div className='mt-6 flex flex-row space-x-12 max-md:flex-col'>
                    <div>
                    {data?.url && (
                        <img src={data.url} alt={data.title} className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
                    )}
                    {data?.title && (
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">{data.title}</h2>
                    )}
                    </div>
                    <div className='w-full'>
                    {data?.explanation && (
                        <p className="mt-4 text-lg text-gray-600">{data.explanation}</p>
                    )}
                    </div>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Info;
