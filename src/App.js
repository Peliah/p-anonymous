import Home from "./pages/Home";
import Diary from "./pages/Diary";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="diary" element={<Diary/>}/>
        </Routes>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
