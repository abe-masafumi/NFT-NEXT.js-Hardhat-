const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
export default function pinFileToIPFS(res, req) {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  console.log(url);
  //we gather a local file for this example, but any valid readStream source will work here.

  data.append("file", fs.readStream("./yourfile.png"));
  //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //metadata is optional
  const metadata = JSON.stringify({
    name: "testname",
    keyvalues: {
      exampleKey: "exampleValue",
    },
  });
  data.append("pinataMetadata", metadata);
  // pinataOptions are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: "FRA1",
          desiredReplicationCount: 1,
        },
        {
          id: "NYC1",
          desiredReplicationCount: 2,
        },
      ],
    },
  });
  data.append("pinataOptions", pinataOptions);
  return axios
    .post(url, data, {
      maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large files
      headers: {
        "Content-Type": `/form-data; boundary=${data._boundary}`,
        pinata_api_key: "d02f431f590f81d2333f",
        pinata_secret_api_key:
          "a91c49d1f634b0a873583d43265595880b635b1b14b503cf2b5bcc440d499088",
      },
    })
    .then(function (response) {
      //handle response here
      console.log(response);
      console.log("セイコーーーー雨");
      // res.status(200).json({ name: response });
    })
    .catch(function (error) {
      //handle error here
      console.log(error);
      console.log("ハンターーーい");
      // res.status(200).json({ name: error });
    });
}
