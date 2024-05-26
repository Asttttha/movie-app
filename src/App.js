import { Route, Routes } from "react-router-dom";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Favs from "./Components/Favs";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllCards /> */}
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/favorites' element={<Favs />} />
      </Routes>
    </div>
  );
}

export default App;
