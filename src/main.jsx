import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./components/Login";
import CreateUser from "./components/CreateUser";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CreateUser />
		<LoginForm />
	</React.StrictMode>
);
