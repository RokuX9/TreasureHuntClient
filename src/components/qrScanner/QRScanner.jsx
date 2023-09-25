import React from "react";
import "./QRScanner.css";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
import Overlay from "../overlay/Overlay";
import Button from "../button/Button";

export default function QRScanner({
	isOpen,
	closeOverlay,
	openWrongScan,
	answer,
	correct,
	...props
}) {
	const config = {
		formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
		facingMode: "enviroment",
		qrbox: { height: 150, width: 150 },
	};

	const successRead = (decodedText) => {
		if (decodedText === answer) {
			correct();
		} else {
			closeOverlay();
			openWrongScan();
		}
	};

	React.useEffect(() => {
		if (isOpen) {
			const reader = new Html5Qrcode("qr_scanner");
			reader.start({ facingMode: "environment" }, config, successRead);
			return async () => {
				await reader.stop();
				reader.clear();
			};
		}
	}, [isOpen]);

	return (
		<Overlay isOpen={isOpen}>
			<div id="qr_scanner"></div>
			<Button onClick={closeOverlay}>הפסק סריקה</Button>
		</Overlay>
	);
}
