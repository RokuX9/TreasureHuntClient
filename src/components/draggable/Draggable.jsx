import React from "react";
import interact from "interactjs";
import "./Draggable.css";

const position = { x: 0, y: 0 };

export default function Draggable({ children, className, ...props }) {
	const draggableRef = React.useRef(null);
	const dropzoneRef = React.useRef(null);

	React.useEffect(() => {
		if (draggableRef.current && dropzoneRef.current) {
			interact(draggableRef.current).draggable({
				listeners: {
					start(event) {
						event.target.classList.add("draggable_active");
					},

					move(event) {
						position.x += event.dx;
						position.y += event.dy;
						event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
					},
					end(event) {
						event.target.style.transform = `translate(0px, 0px)`;
						event.target.classList.remove("draggable_active");
						position.x = 0;
						position.y = 0;
					},
				},
				modifiers: [
					interact.modifiers.restrictRect({
						restriction: ".draggable_border",
					}),
				],
			});
			interact(dropzoneRef.current).dropzone({
				accept: ".draggable_active",

				listeners: {
					drop(event) {
						console.log("dropped");
					},
				},
			});
		}
		return () => {
			interact(draggableRef.current).unset();
			interact(dropzoneRef.current).unset();
		};
	}, [draggableRef.current]);

	return (
		<div
			className={"draggable " + className}
			ref={draggableRef}
		>
			<div
				className="dropzone"
				ref={dropzoneRef}
			>
				{children}
			</div>
		</div>
	);
}
