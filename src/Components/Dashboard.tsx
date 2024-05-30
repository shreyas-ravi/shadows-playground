import "./Dashboard.css";
import Chat from "./Chat";
function Dashboard() {
  return (
    <div id="dashboard-wrapper" className="flex flex-col bg-white">
      <div id="chat-container" className="h-full">
        <Chat />
      </div>
      <div id="mx-auto">
       
      </div>
     
    </div>
  );
}

export default Dashboard;
