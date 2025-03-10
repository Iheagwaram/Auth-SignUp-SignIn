const { signUp, signIn } = require("../../service/auth/auth");

const signUpController = async (req, res) => {
    try {
        const userBody = req.body;
        const newUser = await signUp(userBody);
        res.status(201).json({
            message: `User details saved successfully`,
            data: newUser,
            status: true,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false });
    }
};
const signInController = async (req, res) => {
    try {
        const userObj = req.body;
        const userData = await signIn(userObj);
        return res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message, data: [], status: false })
    }
};

module.exports = { signUpController, signInController };