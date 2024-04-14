import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Ministries from "./pages/Ministries";
import School from "./pages/School";
import Login from "./pages/Login";
import NewsLetterPanel from "./pages/NewsLetterPanel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/escolabiblica" element={<School />} />
        <Route path="/ministerios" element={<Ministries />} />
        <Route path="/newsletterlogin" element={<Login />} />
        <Route path="/adminpanel" element={<NewsLetterPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
