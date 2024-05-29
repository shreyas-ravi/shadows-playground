import "./Document.css";
import word from "../assets/word.png";
import ppt from "../assets/ppt.png";
import excel from "../assets/excel.png";
import person from "../assets/person.jpeg";
import teams from "../assets/teams.webp";
import confluence from "../assets/confluence.png";
import slack from "../assets/slack.webp";
import filter from "../assets/filter.png";
import github from "../assets/github.png";
import drive from "../assets/drive.png";
import search from "../assets/search.png";

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
        "The primary objective of Infra project v5 is to migrate the on-premises infrastructure to cloud infrastructure...",
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
        "The latest security update includes patches for vulnerabilities in the core system and enhancements to the firewall...",
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
        "The recent performance metrics indicate a significant improvement in processing times and resource utilization...",
    },
  ];

  let resultAreas = [
    {
      id: "1",
      image: search,
      title: "All",
      number: "24k",
    },

    {
      id: "2",
      image: confluence,
      title: "Confluence",
      number: "323",
    },

    {
      id: "3",
      image: github,
      title: "Github",
      number: "504",
    },

    {
      id: "4",
      image: slack,
      title: "Slack",
      number: "9",
    },

    {
      id: "5",
      image: drive,
      title: "Drive",
      number: "51",
    },

    {
      id: "6",
      image: teams,
      title: "Teams",
      number: "235",
    },
  ];

  return (
    <div id="document-component-wrapper" className="p-8">
      <div id="response" className="py-8 px-8">
        <div className="font-bold text-md mb-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          Assistant
        </div>
        <div className="font-semibold text-md mb-2">
          Here's what happened last week on Infra project V5, which aims to
          migrate from on-prem to cloud-based infrastructure:{" "}
        </div>
        <div className="text-gray-700 text-sm mb-2">
          1. Cloud Provider Selection: After evaluating several cloud service
          providers, the team has selected the provider that best meets the
          project's requirements. This decision was made based on pricing,
          performance, security, and support.{" "}
        </div>
        <div className="text-gray-700 text-sm">
          2. Infrastructure Assessment: The team has completed a comprehensive
          assessment of the existing on-premises infrastructure to identify all
          the components that need to be migrated. This provided a clear
          understanding of the scope of the project, as well as the required
          resources and timelines.{" "}
        </div>
        <div
          id="document-bubbles"
          className="flex items-center gap-4 text-sm text-gray-600 mt-4"
        >
          <div className="flex items-center gap-2 border rounded-xl px-4 py-1">
            <img src={documents[0].image} alt="" className="w-4 h-4" />
            <div>{documents[0].topic}</div>
          </div>
          <div className="flex items-center gap-2 border rounded-xl px-4 py-1">
            <img src={documents[1].image} alt="" className="w-4 h-4" />
            <div>{documents[1].topic}</div>
          </div>
          <div className="flex items-center gap-2 border rounded-xl px-4 py-1">
            <img src={documents[2].image} alt="" className="w-4 h-4" />
            <div>{documents[2].topic}</div>
          </div>
        </div>
      </div>

      <div className=" w-full flex gap-12 ">
        <div id="document-container" className="mt-4">
          {documents.map((document) => {
            return (
              <div
                key={document.id}
                id="document"
                className="document flex my-4 rounded-xl"
                style={{ width: "600px" }}
              >
                <img
                  id="photo"
                  className="photo mx-4 w-8 h-8"
                  src={document.image}
                ></img>
                <div id="document-holder">
                  <div id="title" className="title text-blue-800 font-semibold">
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
                      Updated {document.updated}
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

        <div id="found-metrics-container" className="w-full pt-8">
          <div
            id="found-metrics-container-header"
            className="text-sm flex items-center w-full"
          >
            <div className="text-gray-500 flex-grow">Found 8K results</div>
            <img className="w-6 h-6 ml-2" src={filter} alt="" />
          </div>
          {resultAreas.map((resultArea) => {
            return (
              <div
                key={resultArea.id}
                className="flex w-full gap-2 my-4 text-sm"
              >
                <div className="flex-grow flex gap-2">
                  <img src={resultArea.image} alt="" className="w-6 h-6" />
                  <div>{resultArea.title}</div>
                </div>
                <div className="text-gray-500">{resultArea.number}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Document;
