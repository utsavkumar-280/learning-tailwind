import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
			<div className="shrink-0">
				<img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
			</div>
			<div>
				<div className="text-xl font-medium text-black">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	);
}

export default App;
