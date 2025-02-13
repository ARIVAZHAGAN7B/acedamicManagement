const AddAssignments = async (req, res) => {
    try {
        res.status(200).json({ message: "Assignment added successfully" });
    } catch (error) {
        console.error("Error adding assignment:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { AddAssignments };
