import React from "react";
import FormComponent from "./FormComponent";
import Navbar from "./Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar title="Discrete Mathematics Game" showBackButton={false} />
      <FormComponent
        isLogin={true}
        apiEndpoint="http://127.0.0.1:5000/api/login"
        title="Login"
        redirectPath="/student"
      />
    </div>
  );
};

export default LoginPage;
