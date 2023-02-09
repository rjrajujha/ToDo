const checkId = (usrid) => {
    let valid = "valid";

    // check valid username
    if (usrid.length < 4) {
        return valid = "username must be at least 4 characters"
    }

    return valid;
}

const checkPW = (pword) => {
    let valid = "valid";

    // Check valid PassWord
    if (pword.length < 8) {
        return valid = "Password must be at least 8 characters"
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialChars.test(pword)) {
        return valid = "Password must contain special character"
    }

    return valid;
}


const checkUser = ((req, res, next) => {

    const usrid = req.body.username;
    const pword = req.body.password;

    try {
        if (checkId(usrid) === "valid") {
            if (checkPW(pword) === "valid") {
                next();
            }
            else {
                res.json({
                    status: "failed",
                    message: checkPW(pword)
                })
            }
        }
        else {
            res.json({
                status: "failed",
                message: checkId(usrid)
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.json({
            status: "failed",
            message: error
        });
    }

})

module.exports = checkUser;