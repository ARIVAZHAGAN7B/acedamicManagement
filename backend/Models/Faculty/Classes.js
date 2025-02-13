const Classes = async (req, res) => {
    try {
        res.status(200).json({ message: "Classes retrieved successfully" });
    } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Classes };
