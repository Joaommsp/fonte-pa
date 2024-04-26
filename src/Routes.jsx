import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Ministries from "./pages/Ministries";
import School from "./pages/School";
import Login from "./pages/Login";
import NewsLetterPanel from "./pages/NewsLetterPanel";
import Kids from "./pages/kids";
import Musical from "./pages/Musical";
import Couples from "./pages/Couples";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/ministerios" element={<Ministries />} />
        <Route path="/escolabiblica" element={<School />} />
        <Route path="/infantil" element={<Kids />} />
        <Route path="/louvor" element={<Musical />} />
        <Route path="/casais" element={<Couples />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<NewsLetterPanel />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
