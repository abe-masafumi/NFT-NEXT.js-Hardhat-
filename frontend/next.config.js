require("dotenv").config()
module.exports = {
  env: {
    pinataAPIKey: process.env.APIKey,
    pinataAPISecret: process.env.APISecret,
    pinataJWT: process.env.JWT,
  },
}
