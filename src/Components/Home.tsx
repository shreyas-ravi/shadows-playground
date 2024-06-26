import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Panel from "./Panel";
import { NameContext } from "../Contexts/NameContext";
import { useState } from "react";

const Layout = () => {
  const [selectedName, setSelectedName] = useState<string>("");
  const [pane, setPane] = useState<boolean>(false);

  return (
    <div id="wrapper" className="bg-zinc-100">
      <div id="navbar" className="bg-zinc-100">
        <Navbar
          toggleUserSettings={() => {
            setPane((prev) => !prev);
          }}
        />
      </div>
      <div id="content">
        <div id="sidebar" className="bg-zinc-50">
          <NameContext.Provider value={{ selectedName, setSelectedName }}>
            <Sidebar />
          </NameContext.Provider>
        </div>
        <div id="main" className={`bg-zinc-50 ${pane ? "with-panel" : ""}`}>
          <Dashboard />
          <Panel name={selectedName} pane={pane} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
