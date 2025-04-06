import React, { useState } from "react";
import { Button, Modal, Input, Table } from "antd";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import notif from "../assets/notif.svg";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";

const Teachers = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    about: "",
  });

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setTeachers([...teachers, { ...formData, key: teachers.length }]);
    setIsModalVisible(false);
    setFormData({
      fullName: "",
      email: "",
      age: "",
      about: "",
    });
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "About", dataIndex: "about", key: "about" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="link" onClick={() => handleDelete(record.key)}>
          Delete
        </Button>
      ),
    },
  ];

  const handleDelete = (key) => {
    setTeachers(teachers.filter((teacher) => teacher.key !== key));
  };

  return (
    <div className="flex justify-between gap-6">
      <Sidebar />

      <div className="mt-[5px] w-[100%] flex flex-col gap-6 p-6 relative">
        <div className="flex justify-end items-center gap-2">
          <BellOutlined className="text-2xl" />
          <Button type="" className="border-none font-semibold font-[Kumbh Sans]" onClick={handleLogout}>
            Log out
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="font-medium font-[Kumbh Sans] text-[20px] leading-none tracking-[0%] text-[rgba(79,79,79,1)]">
            Teachers
          </h1>
          <Button
            type="primary"
            className="bg-blue-500 px-[14px] py-[12px] text-[rgba(255,255,255,1)] font-semibold font-[Kumbh Sans] text-[14px] leading-none tracking-[0%] text-center"
            onClick={showModal}
          >
            Add Teachers
          </Button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for a student by name or email"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full px-4 py-4 border rounded-lg outline-none border-none bg-[#FCFAFA] pl-10"
          />
          <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {filteredTeachers.length === 0 ? (
          <div className="w-[100%] h-[500px] bg-[#FCFAFA] flex flex-col justify-center text-center">
            <img
              className="w-[340px] h-[255px] my-[5px] font-[Kumbh Sans] mx-auto"
              src={notif}
              alt="Notification"
            />
            <h1>No Teachers at this time</h1>
            <p>Teachers will appear here after they enroll in your school.</p>
          </div>
        ) : (
          <Table
            dataSource={filteredTeachers}
            columns={columns}
            rowKey="email"
            onRow={(record) => ({
              onClick: () => handleTeacherClick(record),
            })}
          />
        )}
      </div>

      {selectedTeacher && (
        <Modal
          title="Teacher Information"
          visible={true}
          onCancel={() => setSelectedTeacher(null)}
          footer={null}
        >
          <div>
            <h3>Full Name: {selectedTeacher.fullName}</h3>
            <p>Email: {selectedTeacher.email}</p>
            <p>Age: {selectedTeacher.age}</p>
            <p>About: {selectedTeacher.about}</p>
          </div>
        </Modal>
      )}

      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="100vw"
        height="100vh"
        bodyStyle={{ padding: 0 }}
        style={{ top: 0, left: 0, right: 0, bottom: 0, padding: 0 }}
        destroyOnClose={true}
      >
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full ml-6 overflow-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold mb-4">Add Teacher</h2>
              <Button
                type="primary"
                className="mt-4 py-[12px] px-[14px]"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>

            <div className="">
              <div>
                <label className="block">Full Name</label>
                <Input
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full h-[42px]"
                />
              </div>

              <div>
                <label className="block">Email Address</label>
                <Input
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-[42px]"
                />
              </div>

              <div>
                <label className="block">Age</label>
                <Input  
                  placeholder="Age"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full h-[42px]"
                />
              </div>

              <div className="col-span-2">
                <label className="block">About</label>
                <Input.TextArea
                  placeholder="About"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Teachers;
