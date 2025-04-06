import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider"; 

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const onFinish = ({ username, password }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.username === username && user?.password === password) {
      login(); 
      notification.success({
        message: "Success",
        description: "You are logged in successfully!",
      });
      navigate("/dashboard"); 
    } else {
      notification.error({
        message: "Login failed",
        description: "Incorrect username or password",
      });
    }
  };

  return (
    <div className="min-h-screen max-w-[612px] h-[382px] mx-auto mt-[50px] flex flex-col items-center justify-center">
      <h1 className="text-[rgb(156, 49, 49)] font-semibold font-[Kumbh Sans] text-[36px] leading-none text-center mb-[53px]">
        Welcome, Log into your account
      </h1>

      <Form
        onFinish={onFinish}
        className="w-[512px] px-[130px] mt-[53px] py-[72px] rounded-lg bg-white shadow-xl border"
      >
        <p className="font-medium font-[Kumbh Sans] text-[16px] leading-[25px] text-[rgba(102,112,133,1)] text-center mb-[34px]">
          It is our great pleasure to have you on board!
        </p>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Enter your Login" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>

        <div className="mt-4 text-center">
          <Button
            type="link"
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:text-blue-700 font-[Kumbh Sans]"
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
