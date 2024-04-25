import Front from "./components/Front";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from "./components/Info";
import { ApodProvider } from "./components/ApodContext";
function App() {

    return (
        <ApodProvider>
            <Router>
            <div className="w-screen h-screen overflow-y-auto p-10 bg-gradient-to-br from-gray-900 to-black 
            flex justify-center max-md:items-center overflow-x-hidden max-md:p-3">
                    <Routes>
                    <Route path="/" element={<Front/>} />
                    <Route path = "/info" element = {<Info/>} />
                    </Routes>
            
                </div>
            </Router>
        </ApodProvider>
        
        
    );
}

export default App;
