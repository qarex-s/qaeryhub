import "./App.css";
import { Routes, Route } from "react-router-dom";
import Comparing from "./components/comparing/Comparing";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import PageNotfound from "./components/pagenotfound/PageNotfound";
import { useSelector } from "react-redux";
import History from "./components/history/History";
import { setColorTheme } from "./services/colorTheme/setColorTheme";
function App() {
  const selector = useSelector((state) => state.pageSpeed);
  const colorTheme = setColorTheme(selector.colorTheme);

  return (
    <div className="App" style={colorTheme} id={selector.colorTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Comparing" element={<Comparing />} />
          <Route path="/History" element={<History />} />
          <Route path="/*" element={<PageNotfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
