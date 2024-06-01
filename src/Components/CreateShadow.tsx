import { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import confluence from "../assets/confluence.png";
import github from "../assets/github.png";
import slack from "../assets/slack.webp";
import teams from "../assets/teams.webp";
import drive from "../assets/drive.png";
import outlook from "../assets/outlook.jpeg";
import jira from "../assets/jira.png";
import workday from "../assets/workday.jpeg";
import box from "../assets/box.svg";
import notion from "../assets/notion.png";
import IntegrationPage from "./IntegrationPage";
import memojiStart from "../assets/memoji-start.mp4";

const FormStep1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/createshadow/formstep2");
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-around gap-5">
        <input
          type="text"
          placeholder="Who is this Shadow for? "
          className="w-64 border-b-2 border-gray-400 text-lg placeholder:text-lg placeholder-gray-500 focus:outline-none"
        />
        <div
          className="shadow-sm bg-blue-500 font-medium text-white rounded-full text-md px-4 py-1 cursor-pointer hover:bg-blue-400"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

const FormStep2 = () => {
  let integrations = [
    { name: "Confluence", image: confluence },
    { name: "Github", image: github },
    { name: "Slack", image: slack },
    { name: "Teams", image: teams },
    { name: "Drive", image: drive },
    { name: "Outlook", image: outlook },
    { name: "Jira", image: jira },
    { name: "Workday", image: workday },
    { name: "Box", image: box },
    { name: "Notion", image: notion },
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

  const handleNext = () => {
    navigate("/createshadow/formstep3");
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

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-around gap-5 ">
        <div className="font-semibold tracking-tight text-3xl ">
          Step 2: Choose your integrations
        </div>
        <div ref={searchRef} className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for Integrations"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-md w-full"
          />
          {showDropdown && (
            <div className="absolute bg-white border rounded-md shadow-md mt-1 w-full max-h-60 overflow-y-auto z-10">
              {filteredIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(integration.name);
                    setShowDropdown(false);
                  }}
                >
                  {integration.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          id="integration-grid"
          className="w-full grid grid-cols-5 gap-5 p-5"
        >
          {integrations.map((integration, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-2 border rounded-md cursor-pointer hover:bg-gray-100"
                style={{ border: "1px solid #e4e4e4" }}
                onClick={() => navigate(`/createshadow/integration/${integration.name}`)}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className="w-8 h-8"
                  />
                </div>
                <div className="font-medium text-md text-gray-500">
                  {integration.name}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="shadow-sm bg-blue-500 font-medium text-white rounded-full text-md px-4 py-1 cursor-pointer hover:bg-blue-400"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

const FormStep3 = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/");
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-around gap-10">
        <div className="font-semibold tracking-tight text-3xl ">
          Step 3: Choose your data sources
        </div>
        <div className="grid grid-cols-2 gap-24 justify-around text-center px-24">
          <div className="">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center border rounded-xl p-4 mb-6 w-48 hover:bg-gray-100 cursor-pointer">
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full border w-8 h-8 bg-zinc-100 flex items-center justify-center">
                    1
                  </div>
                  <div className="mt-2">Shadows Capture</div>
                </div>
              </div>
            </div>
            <div className="border rounded-full p-4">
              This will download the Shadows Capture desktop client and ask you
              to choose a directory in which Shadows will track every file and
              learn from their contents.{" "}
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-xl p-4 mb-6 w-48 hover:bg-gray-100 cursor-pointer border">
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full border w-8 h-8 bg-zinc-100 flex items-center justify-center">
                    2
                  </div>
                  <div className="mt-2">Shadows Terminal</div>
                </div>
              </div>
            </div>
            <div className="border rounded-full p-4">
              This will download the Shadows Terminal client which is a work
              environment that can dramatically help Software Engineers, and
              DevOps / Infra Engineers.
            </div>
          </div>
        </div>
        <div
          className="shadow-sm bg-blue-500 font-medium text-white rounded-full text-md px-4 py-1 cursor-pointer hover:bg-blue-400"
          onClick={handleFinish}
        >
          Complete Setup
        </div>
      </div>
    </div>
  );
};

const MainComponent = () => {
  const [visibleStep, setVisibleStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const steps = [1, 2, 3, 4, 5];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleStep(step);
      }, index * 1000); // Adjust the delay for each step (1000 ms = 1 second)
    });
  }, []);

  const fadeInStyle = (step: number) => ({
    opacity: visibleStep >= step ? 1 : 0,
    transition: "opacity .5s ease-in",
  });

  const handleSetUpShadow = () => {
    navigate("/createshadow/formstep1");
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center pb-36">
        <video src={memojiStart} autoPlay muted className="w-96 h-48"></video>
      <div className="flex flex-col items-center justify-around gap-5">
        <div
          className="font-semibold tracking-tight text-3xl"
          style={fadeInStyle(1)}
        >
          Create a Shadow
        </div>
        <div
          className="font-medium tracking-tight text-xl text-gray-500"
          style={fadeInStyle(2)}
        >
          Step 1: Choose your team member
        </div>
        <div
          className="font-medium tracking-tight text-xl text-gray-500"
          style={fadeInStyle(3)}
        >
          Step 2: Choose your integrations
        </div>
        <div
          className="font-medium tracking-tight text-xl text-gray-500"
          style={fadeInStyle(4)}
        >
          Step 3: Choose your data sources
        </div>
        <div
          className="shadow-sm bg-blue-500 font-medium text-white rounded-full text-md px-4 py-1 cursor-pointer hover:bg-blue-400"
          style={fadeInStyle(5)}
          onClick={handleSetUpShadow}
        >
          Set Up Shadow
        </div>
      </div>
    </div>
  );
};

const CreateShadow = () => {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="formstep1" element={<FormStep1 />} />
      <Route path="formstep2" element={<FormStep2 />} />
      <Route path="formstep3" element={<FormStep3 />} />
      <Route path="integration/:name" element={<IntegrationPage />} />
    </Routes>
  );
};

export default CreateShadow;
