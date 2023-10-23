import React from "react";
import "./LockerGate.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function LockerGate(props) {
	const [slider1, instance1] = useKeenSlider({
		vertical: true,
		loop: true,
		slides: {
			origin: "center",
		},
	});

	const [slider2, instance2] = useKeenSlider({
		vertical: true,
		loop: true,
		slides: {
			origin: "center",
		},
	});

	const [slider3, instance3] = useKeenSlider({
		vertical: true,
		loop: true,
		slides: {
			origin: "center",
		},
	});

	const [slider4, instance4] = useKeenSlider({
		vertical: true,
		loop: true,
		slides: {
			origin: "center",
		},
	});

	return (
		<div className="locker_gate">
			<div
				className="locker_gate__slider keen-slider"
				ref={slider1}
			>
				{numberArray.map((number) => (
					<div
						className={
							"locker_gate__slide keen-slider__slide number-slide" + number
						}
						key={number}
					>
						{number}
					</div>
				))}
			</div>
			<div
				className="locker_gate__slider keen-slider"
				ref={slider2}
			>
				{numberArray.map((number) => (
					<div
						className={
							"locker_gate__slide keen-slider__slide number-slide" + number
						}
						key={number}
					>
						{number}
					</div>
				))}
			</div>
			<div
				className="locker_gate__slider keen-slider"
				ref={slider3}
			>
				{numberArray.map((number) => (
					<div
						className={
							"locker_gate__slide keen-slider__slide number-slide" + number
						}
						key={number}
					>
						{number}
					</div>
				))}
			</div>
			<div
				className="locker_gate__slider keen-slider"
				ref={slider4}
			>
				{numberArray.map((number) => (
					<div
						className={
							"locker_gate__slide keen-slider__slide number-slide" + number
						}
						key={number}
					>
						{number}
					</div>
				))}
			</div>
		</div>
	);
}
