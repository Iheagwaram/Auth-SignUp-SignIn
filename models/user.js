const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName : {type : String, required: true},
    middleName: {type: String, required : true},
    gender: {type: String, required : true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // createdAt: {type: Date, default: Date.now},
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});
module.exports = mongoose.model("user", userSchema)