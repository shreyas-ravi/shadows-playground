import teams from "../assets/teams.webp";
import confluence from "../assets/confluence.png";
import filter from "../assets/filter.png";
import github from "../assets/github.png";
import drive from "../assets/drive.png";

function MiniSearch() {
  let resultAreas = [
    {
      id: "1",
      image: confluence,
      title: "Confluence",
      number: "323",
    },

    {
      id: "2",
      image: github,
      title: "Github",
      number: "504",
    },

    {
      id: "4",
      image: drive,
      title: "Drive",
      number: "51",
    },

    {
      id: "5",
      image: teams,
      title: "Teams",
      number: "235",
    },
  ];
  return (
    <>
      <div id="found-metrics-container" className="w-full px-8">
        <div
          id="found-metrics-container-header"
          className="text-sm flex items-center w-full"
        >
          <div className="text-gray-500 flex-grow">Found 8K results</div>
          <img className="w-6 h-6 ml-2" src={filter} alt="" />
        </div>
        {resultAreas.map((resultArea) => {
          return (
            <div key={resultArea.id} className="flex w-full gap-2 my-4 text-sm">
              <div className="flex-grow flex gap-2">
                <img src={resultArea.image} alt="" className="w-6 h-6" />
                <div>{resultArea.title}</div>
              </div>
              <div className="text-gray-500">{resultArea.number}</div>
            </div>
          );
        })}
      </div>

      <div className="mr-2 ml-4 mt-9 shadow-sm rounded-xl flex h-12 px-4 py-3 rounded-md border-2 border-gray-200 overflow-hidden max-w-2xl mx-auto font-[sans-serif]">
        <input
          type="email"
          placeholder="Tap into your company's knowledge..."
          className="w-full outline-none bg-transparent text-black text-sm"
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
    </>
  );
}

export default MiniSearch;
