const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const Routes = require("./Routes/Routes");
const { Login } = require("./Controllers/Login/Login"); 

app.post("/login", Login); 
app.use("/api", Routes); 

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
