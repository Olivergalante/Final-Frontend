// import { useRef } from "react";
// import { useRevalidator } from "react-router-dom";
// import { Button } from "./StyleButtons";
// import { Form } from "./StyleForm";

// export default function ListingForm() {
// 	const auth = localStorage.getItem("access_token");
// 	const revalidator = useRevalidator();
// 	const updateForm = useRef(null);

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const formData = new FormData(updateForm.current);

// 		const url = "http://127.0.0.1:8000/posts/";
// 		const data = await fetch(url, {
// 			method: "POST",
// 			headers: {
// 				Authorization: `Bearer ${auth}`,
// 			},
// 			body: formData,
// 		});
// 		updateForm.current.reset();
// 		revalidator.revalidate();
// 	};

// 	return (
// 		<Form onSubmit={(e) => handleSubmit(e)} ref={updateForm}>
// 			<label>Listing Title</label>
// 			<input type="text" name="title" />
// 			<label>Description</label>
// 			<input type="text" name="description" />
// 			<label>Price</label>
// 			<input type="number" name="price" />
// 			<input type="hidden" name="user" value={localStorage.getItem("userId")} />
// 			<Button type="submit">Post Listing</Button>
// 		</Form>
// 	);
// }
