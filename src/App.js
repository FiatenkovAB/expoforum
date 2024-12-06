import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/Home/Home";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home/header" element={<Header/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
