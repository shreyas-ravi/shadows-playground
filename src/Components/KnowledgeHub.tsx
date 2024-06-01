import word from "../assets/word.png";
import ppt from "../assets/ppt.png";
import excel from "../assets/excel.png";
import person from "../assets/person.jpeg";
import book from "../assets/book.png";
import calendar from "../assets/calendar.png";
import cube from "../assets/cube.png";
import view from "../assets/view.png";
import user from "../assets/user.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import s1 from "../assets/s1.mp4";
import s2 from "../assets/s2.mp4";
import s3 from "../assets/s3.mp4";
import s5 from "../assets/s5.mp4";
import s6 from "../assets/s6.mp4";
import s7 from "../assets/s7.mp4";

function KnowledgeHub() {

    let memories = [
        {id: "1", video: s1},
        {id: "2", video: s6},
        {id: "3", video: s3},
        {id: "4", video: s7},
        {id: "5", video: s5},
        {id: "6", video: s2},
    ]

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

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handleFinish = () => {
    navigate("/");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filtereddocuments = documents.filter((document) =>
    document.topic.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div id="navbar-container" className="bg-stone-100 py-4">
        <div id="profile-container">
          <a className="bg-zinc-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
            S
          </a>
          <a>
            Shreyas <span className="text-slate-500">/</span>{" "}
            <span className="font-normal">Knowledge Hub</span>
          </a>
        </div>
        <div id="link-container">
          <a
            className="text-slate-900 font-normal cursor-pointer"
            onClick={handleFinish}
          >
            Dashboard
          </a>
          <a className="text-slate-600 cursor-pointer hover:text-slate-900">
            Docs
          </a>
          <a className="text-slate-600 cursor-pointer hover:text-slate-900">
            API Reference
          </a>
          <a onClick={() => {}}>
            <svg
              className="w-6 h-6 text-gray-500 dark:text-white cursor-pointer hover:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="w-[100vw] h-[92vh]"
        style={{ border: "0px solid blue", overflowY: "scroll" }}
      >
        <div
          className="w-full h-full flex flex-col items-center justify-around p-10"
          style={{ border: "0px solid red" }}
        >
          <div
            id="header-container"
            className="text-gray-700 font-semibold tracking-tight text-3xl flex gap-4 items-center"
          >
            <img src={book} className="w-10 h-10" alt="" />
            <div>Shadows Knowledge Hub</div>
          </div>
          <div
            id="search-container"
            ref={searchRef}
            className="relative w-full max-w-3xl mb-6"
            style={{ border: "0px solid yellow" }}
          >
            <div className="mr-2 ml-4 mt-9 shadow-sm rounded-xl flex h-12 px-4 py-3 rounded-md border-2 border-gray-200 overflow-hidden max-w-3xl mx-auto font-[sans-serif]">
              <input
                type="email"
                placeholder="Tap into your company's knowledge..."
                className="w-full outline-none bg-transparent text-black text-sm"
                onChange={handleSearch}
                value={searchTerm}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-gray-600 cursor-pointer hover:fill-gray-800 transition duration-75"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>

            {showDropdown && (
              <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full max-h-60 overflow-y-auto z-10">
                {filtereddocuments.map((document, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-500 text-sm"
                    onClick={() => {
                      setSearchTerm(document.topic);
                      setShowDropdown(false);
                    }}
                  >
                    <img src={document.image} alt="" className="w-4 h-4" />
                    <div>{`${document.topic} - ${document.team}`}</div>
                  </div>
                ))}
              </div>
            )}

            <div id="boxes" className="flex justify-around mt-6">
              <div className="bg-gray-100 px-8 py-2 rounded-md flex items-center justify-center">
                <img src={calendar} className="w-5 h-5 mr-2" alt="" />
                <div>Anytime</div>
                <svg
                  className="ml-2 mt-1"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2L5 7L10 2H0Z" fill="black" />
                </svg>
              </div>
              <div className="bg-gray-100 px-8 py-2 rounded-md flex items-center justify-center">
                <img src={user} className="w-4 h-4 mr-2" alt="" />
                <div>From</div>
                <svg
                  className="ml-2 mt-1"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2L5 7L10 2H0Z" fill="black" />
                </svg>
              </div>
              <div className="bg-gray-100 px-8 py-2 rounded-md flex items-center justify-center">
                <img src={cube} className="w-5 h-5 mr-2" alt="" />
                <div>Type</div>
                <svg
                  className="ml-2 mt-1"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2L5 7L10 2H0Z" fill="black" />
                </svg>
              </div>
              <div className="bg-gray-100 px-8 py-2 rounded-md flex items-center justify-center">
                <img src={view} className="w-5 h-5 mr-2" alt="" />
                <div>History</div>
                <svg
                  className="ml-2 mt-1"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2L5 7L10 2H0Z" fill="black" />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="document-container"
            className="mt-4 pr-8 w-full h-full flex justify-around gap-4"
            style={{ border: "0px solid green" }}
          >
            <div id="" style={{ border: "0px solid black" }}>
              <div className="text-xl font-semibold tracking-tight mb-2 pl-4">
                Infra Team
              </div>
              <div className="text-gray-500 text-md flex gap-2 items-center mb-2 pl-4">
                <div>Created by</div>
                <img
                  src={documents[0].profile}
                  className="w-4 h-4 rounded-full"
                  alt=""
                />
                <div>Himanshu </div>
                <div>Last updated just now</div>
              </div>
              <div className="w-[30vw] text-sm pl-4">
                Get the scoop on all the most important things at Acme related
                to your benefits and wellbeing here at Acme. Questions? Ping{" "}
                <span className="text-blue-700">@People-Team</span> on Slack or
                email <span className="text-blue-700">people@acme.com</span>
              </div>
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
                      <div
                        id="content"
                        className="content text-gray-600 text-sm"
                      >
                        {document.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="" className="w-[50%]" style={{ border: "0px solid brown" }}>
              <div className="text-xl font-semibold tracking-tight mb-2 pl-4">
                Your Memories
              </div>
              <div className="text-gray-500 text-md flex gap-2 items-center mb-4 pl-4">
                Look back at your past work, and see if there's something that can help you out. 
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                
                  {memories.map((memory)=>{
                    return(
                        <video className="cursor-pointer hover:opacity-70 w-full h-36 object-cover rounded-xl" src={memory.video} loop muted autoPlay ></video>
                    )
                  })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeHub;
