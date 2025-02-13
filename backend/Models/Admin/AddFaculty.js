const pool = require("../../Config/db");
const AddFaculty = async (req, res) => {
    try {
        const {name,password,role} = req.body;
        const query = `insert into auth(username,password,role) values (?,?,?)`;
        const [result] = pool.query(query,[name,password,role]);
        res.status(200).json({ message: "Faculty added successfully",added:{name:name,role:role}});
    } catch (error) {
        console.error("Error adding faculty:", error);
        res.status(500).json({ message: "Server error"});
    }
};

module.exports = { AddFaculty };  
