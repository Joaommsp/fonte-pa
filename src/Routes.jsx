import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Ministries from "./pages/internal/Ministries";
import School from "./pages/School";
import Kids from "./pages/internal/Kids";
import Musical from "./pages/internal/Musical";
import Couples from "./pages/internal/Couples";
import Login from "./pages/admin/Login";
import PostCreator from "./pages/admin/PostCreator";
import PostManager from "./pages/admin/PostManager";
import EventCreator from "./pages/admin/EventCreator";
import EventManager from "./pages/admin/EventManager";
import Contacts from "./pages/Contacts";
import Offers from "./pages/Offers";
import Resources from "./pages/Resources";
import DashBoard from "./pages/admin/DashBoard";
import AboutUs from "./pages/AboutUs";

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
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/postcreator" element={<PostCreator />} />
        <Route path="/postsmanager" element={<PostManager />} />
        <Route path="/eventsmanager" element={<EventManager />} />
        <Route path="/contato" element={<Contacts />} />
        <Route path="/ofertas" element={<Offers />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/eventcreator" element={<EventCreator />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
