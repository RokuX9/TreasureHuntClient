import React from "react";
import "./MoneybagCounter.css";

export default function MoneybagCounter({ amount, className, hide, ...props }) {
	return (
		<div
			className={
				(hide ? "moneybag_counter_hidden " : "moneybag_counter ") + className
			}
		>
			<span className="money_counter__amount">{amount}</span>
		</div>
	);
}
