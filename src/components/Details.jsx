import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useContext } from 'react';
import ApodContext from './ApodContext';
export function Details() {
    const { data } = useContext(ApodContext);
    return (
        <div className='max-w-7xl my-16 mx-4 bg-black flex flex-row max-md:flex-col max-md:space-y-8 md:justify-between'>
                <div className="flex flex-col items-center space-y-8">
                    <Link to="/" className="flex items-center text-white hover:text-gray-400 transition duration-300">
                        <HiOutlineArrowNarrowLeft className="w-6 h-6 mr-2" />
                        <span>Back</span>
                    </Link>

                    {data?.url && (
                        <img
                            src={data.url}
                            alt={data.title}
                            className="h-[23rem] max-md:h-[17rem] w-auto rounded-lg shadow-lg hover:scale-105"
                        />
                    )}
                    {data?.title && (
                        <h2 className="text-xl font-bold text-gray-400 mt-4 transition duration-300">
                        {data.title}
                    </h2>
                    )}
                    
                </div>

                
                <div className='md:w-1/2 '>
                    <h1 className='text-xl text-white mb-5'>Explanation</h1>
                    {data?.explanation && (
                        <p className="text-lg text-gray-400 leading-[1.85rem]">
                            {data.explanation}
                        </p>
                    )}
                </div>

                {!data && (
                    <p className="text-lg text-gray-400 mt-8 transition duration-300">No data available</p>
                )}
            </div>
    );
}