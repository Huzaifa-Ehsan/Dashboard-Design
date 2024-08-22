import { Link } from "react-router-dom";

const SidebarDashboard = ({ NavLink, currentPath }) => {
  return (
    <div className="relative flex flex-col h-full py-8">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/icons/profile.jpg"
          alt=""
          className="flex object-cover object-top w-24 h-28"
        />
        <div className="flex flex-col items-center justify-center py-2 text-white ">
          <span className="font-bold">Hassan Ahmed</span>
          <span className="text-sm">Manager</span>
        </div>
        <div className="w-full px-4 space-y-2">
          <div className="flex justify-between text-sm text-white">
            <span>740/1000</span>
            <span>Level 8</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-[#FFBC2A] h-2 rounded-full w-[45%]"></div>
          </div>

          <div className="flex items-baseline space-x-2 text-xs text-white">
            <img src="/icons/trophy.png" alt="" className="w-4" />
            <span>35 Awards</span>
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        {NavLink.map((item) => (
          <div key={item.id} className="flex justify-center w-full">
            <Link to={item.link} className="w-full">
              <div
                className={`${
                  currentPath === item.link
                    ? "flex justify-start items-center bg-[#784CAB] space-x-2 py-3 "
                    : "flex justify-start items-center space-x-2 py-3 "
                }`}
              >
                <div className="flex items-center justify-center ml-8 space-x-2">
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="object-cover object-center w-4 max-w-4"
                  />
                  <h2 className="text-sm text-white">{item.text}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
