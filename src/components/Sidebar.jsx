import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { categories } from "../utils/constants";
import { logo_fam } from "../Assets";
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, List } from "@mui/material";

import { useState } from "react";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? `0px` : `-${drawerWidth}px`, // Adjust marginLeft based on open state
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  appBarTitle,
  setAppBarTitle,
  toggleComponent,
  children,
  historyStack,
  setHistoryStack,
  setDisplayedComponent,
  onSearch,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLanguageChange = () => {
    setDisplayedComponent("ChangeLanguage");
    toggleComponent("ChangeLanguage", "Select Language");
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  const handleBackButtonClick = () => {
    if (historyStack.length > 0) {
      const [previousComponent, previousTitle] = historyStack.pop();
      setSelectedCategory(previousComponent);
      setAppBarTitle(previousTitle);
      // Update displayed component based on the previous component
      toggleComponent(previousComponent, previousTitle);
      // Update displayedComponent state to "MyCarePortfolio"
      setDisplayedComponent("MyCarePortfolio");
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "My Care Portfolio") {
      setDisplayedComponent("MyCarePortfolio");
      setHistoryStack([]);
    } else if (categoryName === "Preventive Exams") {
      setDisplayedComponent("PreventiveExams");
      setHistoryStack([]);
    } else if (categoryName === "My Earnings") {
      setDisplayedComponent("MyEarnings");
      setHistoryStack([]);
    } else if (categoryName === "My Profile") {
      setDisplayedComponent("MyProfile");
      setHistoryStack([]);
    } else {
      setDisplayedComponent(categoryName);
      setHistoryStack([]);
      setSelectedCategory(categoryName);
      setAppBarTitle(categoryName);
    }
  };

  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);

  const handleNotificationDrawerOpen = () => {
    setNotificationDrawerOpen(true);
  };

  const handleNotificationDrawerClose = () => {
    setNotificationDrawerOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#f5f4f9",
          boxShadow: "none",
          mb: 1,
          pt: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }), color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            {historyStack.length > 0 && (
              <IconButton
                color="inherit"
                aria-label="go back"
                onClick={handleBackButtonClick}
                edge="start"
                sx={{
                  marginRight: 2,
                  color: "white",
                  backgroundColor: "#7338ac",
                  borderRadius: "50%",
                  ":hover": {
                    backgroundColor: "#b262fe",
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
            )}

            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              {appBarTitle}
            </Typography>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar
              onSearch={onSearch} // Make sure to pass onSearch here
              toggleComponent={toggleComponent}
              setDisplayedComponent={setDisplayedComponent}
            />

            <IconButton
              onClick={handleNotificationDrawerOpen}
              sx={{
                backgroundColor: "#7338ac",
                mr: 3,
                borderRadius: "50%",
                color: "white",
                ":hover": {
                  backgroundColor: "#b262fe",
                },
              }}
            >
              <NotificationsNoneIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={notificationDrawerOpen}
              onClose={handleNotificationDrawerClose}
            >
              <Box
                sx={{
                  width: 600,
                }}
                role="presentation"
                onClick={handleNotificationDrawerClose}
                onKeyDown={handleNotificationDrawerClose}
              >
                {/* Place your notification content here */}
                <Box
                  sx={{
                    pt: 4,
                    pl: 4,
                  }}
                >
                  <Typography variant="h5" fontWeight="600">
                    Notifications
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    border: "1px solid #E3E1E5",
                    mx: 4,
                    my: 2,
                  }}
                >
                  {" "}
                  Notification 1
                </Box>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    border: "1px solid #E3E1E5",
                    my: 2,
                    mx: 4,
                  }}
                >
                  {" "}
                  Notification 2
                </Box>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    border: "1px solid #E3E1E5",
                    my: 2,
                    mx: 4,
                  }}
                >
                  {" "}
                  Notification 3
                </Box>
              </Box>
              <style jsx global>{`
                .MuiDrawer-paper {
                  border-radius: 10px; /* Adjust the value as needed */
                }
              `}</style>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            component="img"
            sx={{
              height: "60px",
              width: "180px",
              mt: "25px",
              mb: "25px",
            }}
            alt="The house from the offer."
            src={logo_fam}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {categories.map((category) => (
            <ListItem key={category.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedCategory(category.name);
                  toggleComponent(category.name, category.name);
                  handleCategoryClick(category.name);
                }}
                style={{
                  background: category.name === selectedCategory && "#7338AC",
                  color: "black",
                }}
                sx={{
                  borderRadius: "50px",
                  mx: 1,
                }}
              >
                <ListItemIcon
                  style={{
                    color:
                      category.name === selectedCategory ? "white" : "black",
                    marginLeft: "10px",
                  }}
                  sx={{
                    position: "absolute",
                  }}
                >
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    marginLeft: "40px",
                  }}
                  primary={category.name}
                  style={{
                    color:
                      category.name === selectedCategory ? "white" : "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ marginTop: "auto" }}>
          <ListItem>
            <Button
              onClick={handleLanguageChange}
              sx={{
                border: "1px solid black ",
                borderRadius: "50px",
                paddingRight: "11px",
                py: "10px",
                pr: 3,
                textTransform: "none",
                color: "black",
                fontSize: "15px",
              }}
            >
              <ListItemIcon sx={{ mr: -2.2 }}>
                <LanguageIcon />
              </ListItemIcon>
              Change Language
            </Button>
          </ListItem>
          <ListItem>
            <Button
              onClick={handleLogout}
              sx={{
                borderRadius: "50px",
                backgroundColor: "#03577b",
                color: "white",
                paddingRight: "101px",
                py: "10px",
                ":hover": {
                  backgroundColor: "#00cbe6",
                },
                textTransform: "none",
                fontSize: "15px",
              }}
            >
              <ListItemIcon sx={{ color: "white", ml: 1, mr: -3 }}>
                {" "}
                <LogoutIcon />
              </ListItemIcon>
              Logout
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open} sx={{ backgroundColor: "#f5f4f9" }}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
