import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png";
import { FaGraduationCap } from "react-icons/fa";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  SettingOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const navigate = useNavigate();
  
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "dashboard") {
      navigate("/dashboard");
    } else if (menu === "teachers") {
      navigate("/teachers");
    }
  };

  return (
    <div className="max-w-[300px] w-[100%] bg-[#0B1C49] text-white p-6 flex flex-col justify-between h-screen">
      <div>
        <div className="mb-8 border-b border-gray-300 pb-4">
          <img src={Ellipse} alt="Profile" className="w-10 h-10 mb-4 mx-auto" />
          <h2 className="text-lg font-semibold text-center font-[Kumbh Sans]">
            Udemy Inter. school
          </h2>
        </div>

        <ul className="space-y-4">
          <li
            className={`flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${
              activeMenu === "dashboard" ? "bg-[#509CDB]" : "hover:bg-[#3A4C8B]"
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
            <DashboardOutlined /> Dashboard
          </li>
          <li
            className={`flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${
              activeMenu === "teachers" ? "bg-[#509CDB]" : "hover:bg-[#3A4C8B]"
            }`}
            onClick={() => handleMenuClick("teachers")}
          >
            <TeamOutlined /> Teachers
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded cursor-pointer hover:bg-[#3A4C8B]"
          >
            <UserOutlined /> Students
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded cursor-pointer hover:bg-[#3A4C8B]"
          >
            <CreditCardOutlined /> Billing
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded cursor-pointer hover:bg-[#3A4C8B]"
          >
            <SettingOutlined /> Settings and profile
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded cursor-pointer hover:bg-[#3A4C8B]"
          >
            <FileDoneOutlined /> Exams
          </li>
        </ul>
      </div>

      <div className="text-sm text-white">
        <span className="flex items-center gap-3 text-white py-1 px-2 rounded text-center">
          <FaGraduationCap className="w-6 h-6 text-white-700 font-[Kumbh Sans]" />
          Features{" "}
          <span className="bg-blue-400 px-1 ml-[10px] text-xs text-black py-[2px] font-[Kumbh Sans] rounded-xl px-[11px]">
            NEW
          </span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;













// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Ellipse from "../assets/Ellipse.png";
// import { FaGraduationCap } from "react-icons/fa";
// import {
//   DashboardOutlined,
//   TeamOutlined,
//   UserOutlined,
//   CreditCardOutlined,
//   SettingOutlined,
//   FileDoneOutlined,
// } from "@ant-design/icons";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const Dashboard = () => {
//     navigate("/dashboard");
//   };

//   const Teachers = () => {
//     navigate("/teachers");
//   };

//   return (
//     <div className="max-w-[300px] w-[100%] bg-[#0B1C49] text-white p-6 flex flex-col justify-between h-screen">
//       <div>
//         <div className="mb-8 border-b border-gray-300 pb-4">
//           <img src={Ellipse} alt="Profile" className="w-10 h-10 mb-4 mx-auto" />
//           <h2 className="text-lg font-semibold text-center font-[Kumbh Sans]">
//             Udemy Inter. school
//           </h2>
//         </div>

//         <ul className="space-y-4">
//           <li
//             className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer"
//             onClick={Dashboard}
//           >
//             <DashboardOutlined /> Dashboard
//           </li>
//           <li
//             className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer"
//             onClick={Teachers}
//           >
//             <TeamOutlined /> Teachers
//           </li>
//           <li className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer">
//             <UserOutlined /> Students
//           </li>
//           <li className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer">
//             <CreditCardOutlined /> Billing
//           </li>
//           <li className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer">
//             <SettingOutlined /> Settings and profile
//           </li>
//           <li className="flex items-center gap-2 hover:bg-[#3A4C8B] font-[Kumbh Sans] py-2 px-4 rounded cursor-pointer">
//             <FileDoneOutlined /> Exams
//           </li>
//         </ul>
//       </div>

//       <div className="text-sm text-white">
//         <span className="flex items-center gap-3 text-white py-1 px-2 rounded text-center">
//           <FaGraduationCap className="w-6 h-6 text-white-700 font-[Kumbh Sans]" />
//           Features{" "}
//           <span className="bg-blue-400 px-1 ml-[10px] text-xs text-black py-[2px] font-[Kumbh Sans] rounded-xl px-[11px]">
//             NEW
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
