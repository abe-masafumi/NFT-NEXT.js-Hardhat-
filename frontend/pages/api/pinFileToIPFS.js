export default async function pinFileToIPFS(req, res) {
// テストok
// pinatにfailを追加（写真）
  const axios = require("axios");

  var FormData = require("form-data");
  var fs = require("fs");
  var data = new FormData();
  data.append(
    "file",
    fs.createReadStream("/Users/Masa/Desktop/img/画像1.1.png")
  ); //変var更

  var config = {
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    headers: {
      pinata_api_key: "d02f431f590f81d2333f",
      pinata_secret_api_key:
        "a91c49d1f634b0a873583d43265595880b635b1b14b503cf2b5bcc440d499088",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTlkZGMwZi1kNzdmLTRjMTMtODA4NC1kY2UxZjk3NDdlNzYiLCJlbWFpbCI6Im1hc2E0NTUud3ZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQwMmY0MzFmNTkwZjgxZDIzMzNmIiwic2NvcGVkS2V5U2VjcmV0IjoiYTkxYzQ5ZDFmNjM0YjBhODczNTgzZDQzMjY1NTk1ODgwYjYzNWIxYjE0YjUwM2NmMmI1YmNjNDQwZDQ5OTA4OCIsImlhdCI6MTYzNTIzNjk5Mn0.YpxlDkXxbP0_fRJqCbKwxurlMXlDLLdw7U2pb1-J4eU",
      ...data.getHeaders(),
    },
    data: data,
  };

  await axios(config)
  .then(function (response) {
    res.status(200).json({ name: response.data });
    return response;
  });
}
