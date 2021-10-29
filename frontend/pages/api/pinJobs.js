// テストng
export default function helloAPI(req, res) {
  const pinataSDK = require("@pinata/sdk");
  const pinata = pinataSDK(
    process.env.pinataAPIKey,
    process.env.pinataAPISecret
  );
  const filters = {
    sort: "ASC",
    status: "searching",
    ipfs_pin_hash: "Qma6e8dovfLyiG2UUfdkSHNPAySzrWLX9qVXb44v1muqcp",
    limit: 10,
    offset: 0,
  };
  pinata
    .pinJobs("Qmb7ZPYxHz4k9hmaVZBzKBw8WiGRvU7q2zyPywRAMkMdnZ", filters)
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
