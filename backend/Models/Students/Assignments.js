const Assignments = async (req, res) => {
    try {
        res.status(200).json({ message: "Assignments retrieved successfully" });
    } catch (error) {
        console.error("Error fetching assignments:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Assignments };
