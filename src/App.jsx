import Front from "./components/Front";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from "./components/Info";
import { ApodProvider } from "./components/ApodContext";
function App() {

    return (
        <ApodProvider>
            <Router>
                <div className="w-[100vw] h-[100vh] p-10 bg-black flex justify-center max-md:items-center overflow-x-hidden">
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
