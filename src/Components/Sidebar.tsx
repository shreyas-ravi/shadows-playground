import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

function Sidebar() {
  const context = useContext(NameContext); 
  if (!context) {
    throw new Error("Sidebar must be used within a NameContext.Provider");
  }
  
  const { selectedName, setSelectedName } = context;
  
  const handleClick = (name: string) => {
    setSelectedName(name);
  };

  return (
    <div className="p-4">
      <a
        href="#"
        className="mt-2 flex items-center p-2 text-gray-900 rounded-lg group "
      >
        <span className="flex-1 ms-3 whitespace-nowrap">Your Shadows</span>
      </a>
      <ul className="ml-6 mt-2">
        {['Shreyas', 'Himanshu', 'Reshma', 'Ashesh', 'Soumojit'].map(name => (
          <li
            key={name}
            className={`text-gray-600 dark:text-white cursor-pointer hover:bg-gray-200 p-2 rounded ${
              selectedName === name ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleClick(name)}
          >
            {name}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-4 flex items-center p-2 text-gray-900 rounded-lg group hover:bg-gray-200"
      >
        <span className="flex-1 ms-3 whitespace-nowrap">Knowledge Hub</span>
      </a>
      <a
        href="#"
        className="mt-2 flex items-center p-2 text-gray-900 rounded-lg group hover:bg-gray-200"
      >
        <span className="flex-1 ms-3 whitespace-nowrap">Create Shadow</span>
      </a>
    </div>
  );
}

export default Sidebar;
