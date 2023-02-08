const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtAuth = (async (req, res, next) => {

    if (req.headers.authorization) {

        let token = req.headers.authorization.split(" ")[1];
        console.log("Token :", token);

        // verify a token symmetric - synchronous
        // var decodedWithSync = jwt.verify(token, process.env.mySecretKey);
        // console.log("Decoded with symmetric - synchronous :", decodedWithSync);

        // verify a token symmetric
        jwt.verify(token, process.env.mySecretKey, (err, decoded) => {
            try {
                if (decoded) {
                    console.log("Decoded :", decoded);
                    next()
                }
                else {
                    res.json({
                        status: "failed",
                        message: "not_a_valid_token"
                    })
                }
            }
            catch (error) {
                if (err) {
                    console.log("Error", err);
                }
                res.json({
                    status: "failed",
                    message: "error_validating_token", error
                })
            }
        });
    }

    else {
        res.status(403).json({
            status: "failed",
            message: "unauthorized"
        })
    }
}
)

module.exports = jwtAuth;