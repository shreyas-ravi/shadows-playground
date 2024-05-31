import word from "../assets/word.png";
import ppt from "../assets/ppt.png";
import excel from "../assets/excel.png";
import person from "../assets/person.jpeg";


function Response({ documents } : { documents: any[] }) {
  return (
    <div id="response" className="py-8 px-8 rounded-xl border m-8 shadow-sm">
      <div className="font-bold text-md mb-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        Your Shadow
      </div>
      <div className="font-semibold text-md mb-2">
        Here's what happened last week on Infra project V5, which aims to migrate from on-prem to cloud-based infrastructure:
      </div>
      <div className="text-gray-700 text-sm mb-2">
        1. Cloud Provider Selection: After evaluating several cloud service
        providers, the team has selected the provider that best meets the
        project's requirements. This decision was made based on pricing,
        performance, security, and support.
      </div>
      <div className="text-gray-700 text-sm">
        2. Infrastructure Assessment: The team has completed a comprehensive
        assessment of the existing on-premises infrastructure to identify all
        the components that need to be migrated. This provided a clear
        understanding of the scope of the project, as well as the required
        resources and timelines.
      </div>
      <div id="document-bubbles" className="flex items-center gap-4 text-sm text-gray-600 mt-4">
        {documents.map((document) => (
          <div key={document.id} className="flex items-center gap-2 border rounded-xl px-4 py-1">
            <img src={document.image} alt="" className="w-4 h-4" />
            <div>{document.topic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatInterface() {
  let documents = [
    {
      id: "1",
      topic: "Infra v5 Brief",
      image: word,
      profile: person,
      name: "Arjun Dutta",
      updated: "2 hours ago",
      team: "Infrastructure",
      content:
        "The primary objective of Infra project v5 is to migrate the on-premises infrastructure to cloud infrastructure...",
    },
    {
      id: "2",
      topic: "Chat with Reshma's Shadow",
      image: ppt,
      profile: person,
      name: "Nina Patel",
      updated: "1 day ago",
      team: "Security",
      content:
        "The latest security update includes patches for vulnerabilities in the core system and enhancements to the firewall...",
    },
    {
      id: "3",
      topic: "Learn about what happened last standup",
      image: excel,
      profile: person,
      name: "John Doe",
      updated: "3 days ago",
      team: "Analytics",
      content:
        "The recent performance metrics indicate a significant improvement in processing times and resource utilization...",
    },
  ];

  let chatHistory = [
    {
      id: "1",
      question: "Hello, I need help with the Infra project v5 brief.",
      sender: "User",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      answer: "Sure, I can help with that. What specific information are you looking for?",
      sender: "Assistant",
      timestamp: "2 hours ago",
    },
    {
      id: "3",
      question: "I need details on the cloud provider selection and infrastructure assessment.",
      sender: "User",
      timestamp: "2 hours ago",
    },
    {
      id: "4",
      answer: "Here's what happened last week on Infra project V5, which aims to migrate from on-prem to cloud-based infrastructure:",
      sender: "Assistant",
      timestamp: "2 hours ago",
    }
  ];

  return (
    <div id="chat-interface-wrapper" className="py-10" style={{ overflowY: "scroll" ,border:'0px solid red' }}>
      {chatHistory.map((chat) => {
        if (chat.answer) {
          return (
           <Response documents={documents} />
          );
        } else {
          return (
            <div className="flex gap-2 items-center justify-end pr-12" style={{border:"0px solid red"}}>
              
              <div className="bg-stone-100 text-black rounded-full px-4 py-2">What happened at the infra project standup?</div>
              <img src={person} alt="" className="w-6 h-6 rounded-full" />
            </div>
          );
        }
      })}
    </div>
  );
}

export default ChatInterface;
