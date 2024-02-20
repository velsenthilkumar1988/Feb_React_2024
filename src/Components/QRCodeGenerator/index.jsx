import QRCode from "react-qr-code";
import "../QRCodeGenerator/style.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput('')
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter Your Name and URL Link"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate QR Code
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
}
