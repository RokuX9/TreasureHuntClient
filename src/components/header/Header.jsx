import React from "react";
import "./Header.css";

export default function Header({ children, className, ...props }) {
	console.log(children);
	return <header className={"header " + className}>{...children}</header>;
}
