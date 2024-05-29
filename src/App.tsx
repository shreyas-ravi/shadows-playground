import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

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
        <div id="main" className="bg-white">
          <div id="dashboard-content">Dashboard Content</div>
          <div id="shadows-panel">Shadows Panel</div>
        </div>
      </div>
    </div>
  );
}

export default App;
