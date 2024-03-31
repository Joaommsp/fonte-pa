import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Ministries from "./pages/Ministries";
import School from "./pages/School";
import Youtube from "./pages/Youtube";
import Spotify from "./pages/Spotify";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/escolabiblica" element={<School />} />
        <Route path="/ministerios" element={<Ministries />} />
        <Route path="/videos" element={<Youtube />} />
        <Route path="/audios" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
