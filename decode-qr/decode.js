/* eslint-disable no-undef */
const base45 = require("base45");
const cbor = require("cbor");
const fs = require("fs");
let decode = require("image-decode");
const jpeg = require("jpeg-js");
const jsQR = require("jsqr");
const pako = require("pako");

// Set the path to the green pass QR
const FILE_PATH = __dirname + "/qrcodes/qrcode.jpg";

// Read image file
const greenpassJpeg = fs.readFileSync(FILE_PATH);
const greenpassImageData = jpeg.decode(greenpassJpeg, { useTArray: true });

// Decode QR
const decodedGreenpass = jsQR(
  greenpassImageData.data,
  greenpassImageData.width,
  greenpassImageData.height
);

// Remove `HC1:` from the string
const greenpassBody = decodedGreenpass.data.substr(4);

// Data is Base45 encoded
const decodedData = base45.decode(greenpassBody);

// And zipped
const output = pako.inflate(decodedData);

const results = cbor.decodeAllSync(output);

[headers1, headers2, cbor_data, signature] = results[0].value;

const greenpassData = cbor.decodeAllSync(cbor_data);

// console.log("headers1 :", JSON.stringify(headers1));
// // console.log("headers2 :", JSON.stringify(headers2));
// // console.log("cborData :", JSON.stringify(cbor_data));
// console.log("signature :", JSON.stringify(signature));
// console.log("full data :", greenpassData);

console.log(
  "Decrypted Result :",
  JSON.stringify(greenpassData[0].get(-260).get(1), null, 2)
);
