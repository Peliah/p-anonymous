import Home from "./pages/Home";
import Diary from "./pages/Diary";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="diary" element={<Diary/>}/>
    </Routes>
  );
}

export default App;
