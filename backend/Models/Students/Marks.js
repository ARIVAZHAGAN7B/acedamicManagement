const Marks = async (req, res) => {
    try {
        res.status(200).json({ message: "Marks retrieved successfully" });
    } catch (error) {
        console.error("Error fetching marks:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Marks };
