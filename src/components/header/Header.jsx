import React from "react";
import "./Header.css";

export default function Header({ children, className, ...props }) {
	return <header className={"header " + className}>{...children}</header>;
}
