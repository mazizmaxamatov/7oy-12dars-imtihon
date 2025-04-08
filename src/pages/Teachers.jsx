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
  const [editMode, setEditMode] = useState(false);
  const [editingKey, setEditingKey] = useState(null); 

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const showModal = () => {
    setIsModalVisible(true);
    setEditMode(false); 
    setFormData({ fullName: "", email: "", age: "", about: "" });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingKey(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editMode) {
      const updated = teachers.map((t) =>
        t.key === editingKey ? { ...formData, key: editingKey } : t
      );
      setTeachers(updated);
    } else {
      setTeachers([...teachers, { ...formData, key: teachers.length }]);
    }

    setIsModalVisible(false);
    setEditingKey(null);
    setFormData({ fullName: "", email: "", age: "", about: "" });
  };

  const handleSearchChange = (e) => setSearchText(e.target.value);

  const handleTeacherClick = (teacher) => setSelectedTeacher(teacher);

  const handleDelete = (key) => {
    setTeachers((prev) => prev.filter((teacher) => teacher.key !== key));
  };

  const handleEdit = (teacher) => {
    setFormData(teacher);
    setEditMode(true);
    setEditingKey(teacher.key);
    setIsModalVisible(true);
  };

  const filteredTeachers = teachers.filter(
    (t) =>
      t.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
      t.email.toLowerCase().includes(searchText.toLowerCase())
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
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => handleDelete(record.key)} danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-between gap-6">
      <Sidebar />

      <div className="flex flex-col gap-6 p-6 w-full">
      
        <div className="flex justify-end items-center gap-2">
          <BellOutlined className="text-2xl" />
          <Button onClick={handleLogout} className="border-none font-semibold">
            Log out
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-medium text-gray-700">Teachers</h1>
          <Button type="primary" className="bg-blue-500" onClick={showModal}>
            Add Teacher
          </Button>
        </div>

        <div className="relative mb-6">
          <Input
            placeholder="Search for a teacher by name or email"
            value={searchText}
            onChange={handleSearchChange}
            prefix={<SearchOutlined className="text-gray-500" />}
            className="bg-[#FCFAFA]"
          />
        </div>

        {filteredTeachers.length === 0 ? (
          <div className="w-full h-[500px] bg-[#FCFAFA] flex flex-col justify-center items-center text-center">
            <img src={notif} alt="Notification" className="w-[340px] h-[255px]" />
            <h1>No Teachers at this time</h1>
            <p>Teachers will appear here after they enroll in your school.</p>
          </div>
        ) : (
          <Table
            dataSource={filteredTeachers}
            columns={columns}
            pagination={false} 
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
          open={true}
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
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {editMode ? "Edit Teacher" : "Add Teacher"}
            </h2>
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </div>

          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <Input.TextArea
            placeholder="About"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            rows={4}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Teachers;
