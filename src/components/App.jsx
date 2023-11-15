import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateUser } from "./CreateUser";
import { LoginForm } from "./Login";
import { MainPage } from "../Maincontent/Mainpage";
import { Errorpage } from "./Errorpage";
import CreatePost from "../Maincontent/CreatePost";
import ExpandedPost from "../Maincontent/ExpandedPost";
import EditPost from "../Maincontent/EditPost"; // Import the EditPost component
import NavBar from "../Maincontent/NavBar";
import ProfilePage from "../Maincontent/ProfilePage";

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginForm />} />
				<Route path="/createuser" element={<CreateUser />} />
				<Route path="/mainpage" element={<MainPage />} />
				<Route path="/createpost" element={<CreatePost />} />
				<Route path="/errorpage" element={<Errorpage />} />
				<Route path="/posts/:postId" element={<ExpandedPost />} />
				<Route path="/posts/:postId/edit" element={<EditPost />} />
				<Route path="/navbar" element={<NavBar />} />
				<Route path="/profilepage" element={<ProfilePage />} />
			</Routes>
		</Router>
	);
}
