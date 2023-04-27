// Import
import Alerts from "../modules/Alerts/pages";
import Dashboard from "../modules/Dashboard/pages";
import Shelters from "../modules/Shelters/pages";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/alertas" element={<Alerts />}></Route>
      <Route path="/abrigos" element={<Shelters />}></Route>
    </Routes>
  );
}

export default Router;
