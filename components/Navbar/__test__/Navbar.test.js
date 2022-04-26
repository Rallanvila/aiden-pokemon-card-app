import React from "react";
import ReactDOM from "react-dom";
import { isExternalModuleNameRelative } from "typescript";
import Navbar from "../Navbar";

it("renders without crashing", () => {
	const div = document.createElement("nav");
	ReactDOM.render(<Navbar />, nav);
});
