import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Panel from "./Components/Panel";

function App() {
  return (
    <div id="wrapper" className="bg-zinc-100">
      <div id="navbar" className="bg-zinc-100">
        <Navbar />
      </div>
      <div id="content">
        <div id="sidebar" className="bg-zinc-50">
          <Sidebar />
        </div>
        <div id="main" className="bg-zinc-50">
          <Dashboard />
          <Panel />
        </div>
      </div>
    </div>
  );
}

export default App;
