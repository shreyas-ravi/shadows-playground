import teams from "../assets/teams.webp";
import slack from "../assets/slack.webp";
import github from "../assets/github.png";
import drive from "../assets/drive.png";
import Document from "./Document.tsx";

let integrations = [
  {
    id: "1",
    image: teams,
    title: "Microsoft Teams",
  },
  {
    id: "2",
    image: slack,
    title: "Slack",
  },
  {
    id: "3",
    image: github,
    title: "GitHub",
  },
  {
    id: "4",
    image: drive,
    title: "Google Drive",
  },
];

function Panel({name, pane}:{name: string, pane: boolean}) {

    if(!pane){
      return null;
    }

    if(!name){
        return <div><Document /></div>; 
    }
  return (
   
    <div className="border-l-2 border-gray-100 mt-4">
      <div className="text-gray-600 font-bold text-center">View Shadow Settings for {name}</div>

      <div id="integration-panel" className="mt-4 border-b-2 pb-4">
        <div className="text-gray-600 bg-zinc-200 h-10 flex items-center px-2">
          <div>Integration Connectors</div>
        </div>
        <div id="integration-search" className="flex p-4 items-center">
          <input
            type="text"
            placeholder="Search for Integrations"
            className="w-full h-10 p-2 rounded-md border-2 relative"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 cursor-pointer hover:fill-gray-800 transition duration-75 absolute right-10"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
        <div id="integration-container" className="flex flex-wrap p-4">
          {integrations.map((integration) => {
            return (
              <div
                id="integration-tile"
                className="rounded-md border w-1/2 shadow-sm p-2 flex flex-col justify-center items-center gap-4"
              >
                <img src={integration.image} alt="" className="w-10 h-8" />
                <div>{integration.title}</div>
                <div id="toggle">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Capture
                    </span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="text-gray-600 bg-zinc-200 h-10 flex items-center px-2">
          <div>Plugins</div>
        </div>
        <div id="plugins-container" className="flex justify-around mt-4">
          <div
            id="shadows-capture"
            className="border shadow-sm flex flex-col justify-center items-center p-4 rounded-md cursor-pointer hover:bg-zinc-100"
          >
            <div>Shadows Capture</div>
            <div className="mb-2 text-sm">Desktop Client</div>
            <img src={teams} alt="Teams" className="w-10 h-8" />
          </div>

          <div
            id="shadows-capture"
            className="border shadow-sm flex flex-col justify-center items-center p-4 rounded-md cursor-pointer hover:bg-zinc-100"
          >
            <div>Shadows Terminal</div>
            <div className="mb-2 text-sm ">Desktop Client</div>
            <img src={teams} alt="Teams" className="w-10 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
