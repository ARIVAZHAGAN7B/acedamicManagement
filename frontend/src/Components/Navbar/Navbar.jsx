import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [role, setRole] = useState(localStorage.getItem("userRole") || null);

  useEffect(() => {
    if (!role) {
      navigate("/login");
    }
  }, [role, navigate]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setRole(null);
    navigate("/login");
    location.reload();
  };

  
  const menus = {
    admin: [
      { name: "Add Faculty", path: "/admin" },
      { name: "Add Classes", path: "/admin/addclasses" },
      { name: "Delete Faculty", path: "/admin/deletefaculty" },
    ],
    student: [
      { name: "Home", path: "/student" },
      { name: "Marks", path: "/student/marks" },
      { name: "Assignments", path: "/student/assignments" },
    ],
    faculty: [
      { name: "Classes", path: "/faculty" },
      { name: "Add Assignments", path: "/faculty/addassignments" },
      { name: "Update Marks", path: "/faculty/updatemarks" },
      { name: "View All Students", path: "/faculty/allstudents" },
    ],
  };

  return (
    <AppBar position="static">
      <Toolbar>
       
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>

        
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
          My App
        </Typography>

       
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {(menus[role] || []).map((menu, index) => (
            <Button key={index} color="inherit" onClick={() => navigate(menu.path)}>
              {menu.name}
            </Button>
          ))}
          <Button color="error" onClick={handleLogout}>Logout</Button>
        </Box>

       
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {(menus[role] || []).map((menu, index) => (
            <MenuItem key={index} onClick={() => { navigate(menu.path); handleMenuClose(); }}>
              {menu.name}
            </MenuItem>
          ))}
          <MenuItem onClick={handleLogout} sx={{ color: "red" }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
