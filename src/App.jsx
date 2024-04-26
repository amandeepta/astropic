import Front from "./components/Front";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from "./components/Info";
import { ApodProvider } from "./components/ApodContext";
function App() {

    return (
        <ApodProvider>
            <Router>
            <div className="flex flex-col justify-center items-center w-screen 
            h-screen bg-black overflow-hidden">
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
