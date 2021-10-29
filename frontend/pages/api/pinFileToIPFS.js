const fs = require("fs");
export default function helloAPI(req, res) {
  const pinataSDK = require("@pinata/sdk");
  const pinata = pinataSDK(
    process.env.pinataAPIKey,
    process.env.pinataAPISecret
  );
  const readableStreamForFile = fs.createReadStream("./test");
  const options = {
    pinataMetadata: {
      name: "MyCustomName",
      keyvalues: {
        customKey: "customValue",
        customKey2: "customValue2",
      },
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      //handle results here
      console.log(result);
      // res.status(200).json({ name: result });
      console.log("okデーーーーす");
    })
    .catch((err) => {
      //handle error here
      console.log(err);
      console.log("🤗だめでーーーーーす");
      // res.status(200).json({ name: err });
    });
}
