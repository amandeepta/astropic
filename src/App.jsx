import Front from "./components/Front";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from "./components/Info";
import { ApodProvider } from "./components/ApodContext";
function App() {

    return (
        <ApodProvider>
            <Router>
                    <Routes>
                    <Route path="/" element={<Front/>} />
                    <Route path = "/info" element = {<Info/>} />
                    </Routes>
            </Router>
        </ApodProvider>
        
        
    );
}

export default App;
