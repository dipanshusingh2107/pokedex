import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Pokedex/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>

    </div>
  );
}

export default App;
