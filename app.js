const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
const useRoute = require("./route/auth/auth")
const PORT = 5000;

connectDB();

app.use(express.json());

app.use('/api', useRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});