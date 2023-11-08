import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateUser } from "./CreateUser";
import { LoginForm } from "./Login";
import { MainPage } from "../Maincontent/Mainpage";
import { Errorpage } from "./Errorpage";
import CreatePost from "../Maincontent/CreatePost";

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="/createuser" element={<CreateUser />} />
				<Route path="/mainpage" element={<MainPage />} />
				<Route path="/createpost" element={<CreatePost />} />
				<Route path="/errorpage" element={<Errorpage />} />
			</Routes>
		</Router>
	);
}
