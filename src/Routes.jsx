import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Ministries from "./pages/internal/Ministries"
import School from "./pages/School";
import Kids from "./pages/internal/Kids"
import Musical from "./pages/internal/Musical"
import Couples from "./pages/internal/Couples"
import Login from "./pages/admin/Login"
import NewsLetterPanel from "./pages/admin/NewsLetterPanel"
import Contacts from "./pages/Contacts";
import Offers from "./pages/Offers";

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
        <Route path="/contato" element={<Contacts />} />
        <Route path="/ofertas" element={<Offers />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
