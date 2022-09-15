import './App.css';
import "./App.css";
import Home from "./views/viewHome";
import { BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";
  
function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          </BrowserRouter>

      </div>
    );
}

export default App;
