import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [items, setItems] = useState([]);

	function addNewItem(newItem) {
		setItems((prevValue) => {
			return [...prevValue, newItem];
		});
	}

	console.log(items);

	return (
		<div>
			<Header />
			<CreateArea addItem={addNewItem} />
			{items.map((item, index) => (
				<Note key={index} title={item.title} content={item.content} />
			))}
			<Footer />
		</div>
	);
}

export default App;
