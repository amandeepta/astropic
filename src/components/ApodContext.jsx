import { createContext, useState } from "react";

const ApodContext = createContext();

export function ApodProvider({ children }) {
    
    const[data,setData] = useState(null);
    return (
        <ApodContext.Provider value = {{data, setData}}>
            {children}
        </ApodContext.Provider>
    )
}

export default ApodContext;