import "./Document.css";
import word from "../assets/word.png";
import ppt from "../assets/ppt.png";
import excel from "../assets/excel.png";
import person from "../assets/person.jpeg";
import MiniSearch from "./MiniSearch.tsx";

function Document() {
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
        "The primary objective of Infra project v5 is to migrate the on-premises...",
    },
    {
      id: "2",
      topic: "Security Update",
      image: ppt,
      profile: person,
      name: "Nina Patel",
      updated: "1 day ago",
      team: "Security",
      content:
        "The latest security update includes patches for vulnerabilities in the core...",
    },
    {
      id: "3",
      topic: "Performance Metrics",
      image: excel,
      profile: person,
      name: "John Doe",
      updated: "3 days ago",
      team: "Analytics",
      content:
        "The recent performance metrics indicate a significant improvement...",
    },
  ];

  return (
    <>
      <div className="text-gray-600 bg-zinc-200 h-10 flex items-center px-2 mt-4">
        <div>Document Search</div>
      </div>
      <div
        id="document-component-wrapper"
        className="p-4 pb-2"
        style={{ border: "0px solid red", overflowY: "scroll"}}
      >
        <div className=" w-full mx-auto">
          <div
            id="document-container"
            className="mt-4 pr-8"
            style={{ border: "0px solid green" }}
          >
            {documents.map((document) => {
              return (
                <div
                  key={document.id}
                  id="document"
                  className="document flex my-4 rounded-xl"
                >
                  <img
                    id="photo"
                    className="photo mx-4 w-8 h-8"
                    src={document.image}
                  ></img>
                  <div id="document-holder">
                    <div
                      id="title"
                      className="title text-blue-800 font-semibold"
                    >
                      {document.topic}
                    </div>
                    <div id="info" className="info flex items-center">
                      <img
                        className="w-4 h-4 rounded-full mr-2"
                        src={document.profile}
                        alt=""
                      />
                      <div className="text-gray-500 text-sm mr-2">
                        {document.name}
                      </div>

                      <div className="text-gray-500 text-sm mr-2">
                        {document.team}
                      </div>
                    </div>
                    <div id="content" className="content text-gray-600 text-sm">
                      {document.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
      <MiniSearch />
    </>
  );
}

export default Document;
