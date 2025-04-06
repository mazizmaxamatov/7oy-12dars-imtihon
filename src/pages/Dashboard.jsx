import { Button } from "antd";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import { FaGraduationCap } from "react-icons/fa"; 
import { BellOutlined,UserAddOutlined,BankOutlined, UpOutlined, PhoneOutlined } from "@ant-design/icons"; 

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const goToTeachers = () => {
    navigate("/teachers");
  };

  return (
    <div className="flex gap-x-[147px] h-screen">
      <Sidebar goToTeachers={goToTeachers} />

      <div className="flex-1 bg-white p-8 relative overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-700 font-[Kumbh Sans]">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <div className="flex gap-6">
            <BellOutlined className="text-2xl" />
            <Button
              type="primary"
              className="bg-blue-900 px-[30px] py-[15px] font-[Kumbh Sans]"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-semibold font-[Kumbh Sans] mb-2 ">
          Welcome to your dashboard, Udemy school
        </h1>
        <h3 className="text-md pl-[52px] mt-[30px] font-[Kumbh Sans] text-gray-500 mb-6">
          Uyo/school/@teachable.com
        </h3>

        <div className="space-y-6 px-[52px] mt-[40px]">
          <div className="flex gap-4">
          <UserAddOutlined className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold font-[Kumbh Sans]">Add other admins</h3>
              <p className="max-w-[500px] text-gray-600 font-[Kumbh Sans]">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
          <BankOutlined className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold font-[Kumbh Sans]">Add classes</h3>
              <p className="max-w-[500px] text-gray-600 font-[Kumbh Sans]">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaGraduationCap className="w-10 h-10 text-blue-700" /> 
            <div>
              <h3 className="text-lg font-semibold">Add students</h3>
              <p className="max-w-[500px] text-gray-600 font-[Kumbh Sans]">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;