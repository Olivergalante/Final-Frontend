import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<CreateUser />} />
			</Routes>
		</Router>
	);
}

export default App;
