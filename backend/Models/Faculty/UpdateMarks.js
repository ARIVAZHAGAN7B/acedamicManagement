const UpdateMarks = async (req, res) => {
    try {
        res.status(200).json({ message: "Marks updated successfully" });
    } catch (error) {
        console.error("Error updating marks:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { UpdateMarks };
