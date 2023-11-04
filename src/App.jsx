import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { LoginForm } from "./components/Login";
import { MainPage } from "./components/Mainpage";

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/" element={<CreateUser />} />
				<Route path="/mainpage" element={<MainPage />} />
			</Routes>
		</Router>
	);
}
