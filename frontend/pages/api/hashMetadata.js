// pinataのnameは変更できた
// その他の変更は[ more ]の中身だけ変更できる
// テストok
export default function helloAPI(req, res) {
  const pinataSDK = require("@pinata/sdk");
  const pinata = pinataSDK(
    process.env.pinataAPIKey,
    process.env.pinataAPISecret
  );
  const metadata = {
    name: "kononame",
    keyvalues: {
      description: "second commit test",
      Key: "test",
      newKey: "test",
      existingKey: "test",
      add: "test",
    },
  };
  pinata
    .hashMetadata("Qmb7ZPYxHz4k9hmaVZBzKBw8WiGRvU7q2zyPywRAMkMdnZ", metadata)
    .then((result) => {
      //handle results here
      console.log(result);
      res.status(200).json({ name: result });
    })
    .catch((err) => {
      //handle error here
      console.log(err);
      res.status(200).json({ name: err });
    });
}
