import React, { useState } from "react";
import "../styles/FormComponent.css";

const FormComponent = ({ isLogin, apiEndpoint, title, redirectPath }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    const result = await response.json();
    setResponseMessage(result.message);
  
    if (response.ok && isLogin) {
      // Fetch user location information
    //   const locationResponse = await fetch(
    //     "https://ipinfo.io/json?token=604f092ab8cd61"
    //   );
    //   const locationData = await locationResponse.json();
  
    //   // Prepare log details
    //   const logDetails = {
    //     username: username,
    //     ip_addr: locationData.ip,
    //     city: locationData.city,
    //     region: locationData.region,
    //     country: locationData.country,
    //   };
  
    //   // Log the login event
    //   await fetch("http://127.0.0.1:5000/api/log", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(logDetails),
    //   });
  
      // Store the user role in sessionStorage
      sessionStorage.setItem("userRole", result.role);
  
      // Navigate to the appropriate page based on the role
      if (result.role === "teacher") {
        window.location.href = "/teacher";
      } else {
        window.location.href = "/student";
      }
    } else if (!isLogin && response.ok) {
      window.location.href = redirectPath;
    } else {
      // Handle case where login fails
      setResponseMessage("Invalid credentials or error during login.");
    }
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <div id="response" className="error">
        {responseMessage}
      </div>
      <form id={isLogin ? "loginForm" : "registerForm"} onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value={isLogin ? "Login" : "Register"} />
      </form>
      {isLogin && (
        <div className="register-link">
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
