
import './App.css';
import "./App.css";
import Wall from "./components/Wall";
import { BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";
  
function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wall />} />
          </Routes>
          </BrowserRouter>

      </div>
    );
}

export default App;
