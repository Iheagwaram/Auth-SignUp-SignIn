const jwt = require("jsonwebtoken");
const user = require("../../models/user");
require("dotenv").config();


const signUp = async (userObj) => {
    if (!userObj) {
        throw new Error("No details supplied");
    }
    const newUser = await user.create(userObj);
    return newUser;
};

const signIn = async (userObj) => {
    const { email } = userObj;
    const userData = user.find({ email: email });
    if (!userData) throw new Error("Invalid credentilas supplied");

    const token = this.generateToken(userObj)
    const userResponse = {
        message: `User logged in successfully`,
        data: userData,
        status: true,
        token: token,
    };
    return userResponse;
};

const generateToken = async (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1hr",
    });
    return token;
}

module.exports = { signUp, signIn };