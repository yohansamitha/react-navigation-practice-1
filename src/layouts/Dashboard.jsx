import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";

const pages = [
   {
      id: 1,
      href: "/admin/home",
      title: "Home",
   },
   {
      id: 2,
      href: "/admin/pageone",
      title: "PageOne",
   },
   {
      id: 3,
      href: "/admin/about",
      title: "About",
   },
];
const settings = ["Logout"];

export default function Dashboard() {
   const navigate = useNavigate();
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = (href) => {
      navigate(href);
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <div>
         <AppBar position="static" style={{ margin: 0 }}>
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                  >
                     LOGO
                  </Typography>

                  {/* menu hambuger button */}
                  <Box
                     sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: "bottom",
                           horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                           display: { xs: "block", md: "none" },
                        }}
                     >
                        {pages.map((page) => (
                           <MenuItem
                              key={page.id}
                              onClick={() => {
                                 handleCloseNavMenu(page.href);
                              }}
                           >
                              <Typography textAlign="center">
                                 {page.title}
                              </Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
                  <Box
                     sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                     {pages.map((page) => (
                        <Button
                           key={page.href}
                           onClick={() => {
                              handleCloseNavMenu(page.href);
                           }}
                           sx={{ my: 2, color: "white", display: "block" }}
                        >
                           {page.title}
                        </Button>
                     ))}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                           <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/2.jpg"
                           />
                        </IconButton>
                     </Tooltip>
                     <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                     >
                        {settings.map((setting) => (
                           <MenuItem
                              key={setting}
                              onClick={() => {
                                 handleCloseUserMenu();
                                 navigate("/");
                              }}
                           >
                              <Typography textAlign="center">
                                 {setting}
                              </Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <Outlet />
      </div>
   );
}
