// テストok
export default function helloAPI(req, res) {
  const pinataSDK = require("@pinata/sdk");
  const pinata = pinataSDK(
    process.env.pinataAPIKey,
    process.env.pinataAPISecret
  );

  pinata
    .testAuthentication()
    .then((result) => {
      //handle successful authentication here
      // console.log(result);
      res.status(200).json({ name: result });
    })
    .catch((err) => {
      //handle error here
      // console.log(err);
      res.status(200).json({ name: err });
    });
}
