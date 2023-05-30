// Import
import Alerts from "../presentation/app/modules/Alerts/pages";
import Dashboard from "../presentation/app/modules/Dashboard/pages";
import Shelters from "../presentation/app/modules/Shelters/pages";
import { Routes, Route } from "react-router-dom";
import SidebarInfp from "../presentation/app/modules/info";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/alertas" element={<Alerts />}></Route>
      <Route path="/abrigos" element={<Shelters />}></Route>
      <Route path="/infos" element={<SidebarInfp />}></Route>
    </Routes>
  );
}

export default Router;
