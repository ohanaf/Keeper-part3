import React, { useState } from "react";

function CreateArea(props) {
	console.log(props);

	const [input, setInput] = useState({
		title: "",
		content: ""
	});

	function HandleInput(event) {
		const { name, value } = event.target;

		setInput((prevValue) => {
			console.log(prevValue);
			if (name === "title") {
				return { [name]: value, content: prevValue.content };
			} else {
				return { title: prevValue.title, [name]: value };
			}
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div>
			<form onChange={HandleInput} onSubmit={handleSubmit}>
				<input name="title" value={input.title} placeholder="Title" />
				<textarea
					name="content"
					value={input.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button
					onClick={() => {
						props.addItem(input);
					}}>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
