import { useRef, useState } from "react";
import QRCode from "qrcode";

const useQRCode = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return {
    setText,
    generateQrCode,
    imageUrl,
    qrRef,
    handleErrorFile,
    handleScanFile,
    scanResultFile,
    scanResultWebCam,
    handleScanWebCam,
    handleErrorWebCam,
  };
};

export default useQRCode;
