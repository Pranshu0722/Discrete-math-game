import React from "react";
import FormComponent from "./FormComponent";
import Navbar from "./Navbar";

const RegisterPage = () => {
  return (
    <div>
      <Navbar title="Discrete Mathematics Game" showBackButton={false} />
      <FormComponent
        isLogin={false}
        apiEndpoint="http://127.0.0.1:5000/api/register"
        title="Register"
        redirectPath="/"
      />
    </div>
  );
};

export default RegisterPage;
