const pool = require("../../Config/db");

const Login = async (req, res) => {
  try {
    const { username } = req.body;
    const query = "SELECT role,username FROM auth WHERE username = ?";
    const [rows] = await pool.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({ role: rows[0].role ,username:rows[0].username});
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = { Login };
