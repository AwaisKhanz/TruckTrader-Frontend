import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logoBlack from "../../assets/logo_black.png";
import logoWhite from "../../assets/logo_white.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { languages } from "../../constants/Languages";
import Logo from "./logo";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(
    () => languages.find((lan) => lan.code === i18n.language) || languages[0]
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(languages.find((lan) => lan.code === lang));
    handleMenuClose();
  };

  const drawerItems = [
    { text: t("navbar.home"), icon: <HomeIcon />, link: "/" },
    { text: t("navbar.about"), icon: <InfoIcon />, link: "/about-us" },
    { text: t("navbar.faq"), icon: <HelpOutlineIcon />, link: "/faq" },
    { text: t("navbar.contact"), icon: <ContactMailIcon />, link: "/contact" },
    {
      text: t("navbar.advertise"),
      icon: <AttachMoneyIcon />,
      link: "/advertise",
    },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        py: "23px",
        background: "#F6F6F6",
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          p: "0 !important",
        }}
      >
        {/* Logo */}
        <Logo color="red" />

        {/* Links for Large Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "28px",
            alignItems: "center",
          }}
        >
          {drawerItems.map((item) => {
            const isActive = location.pathname === item.link;

            return (
              <Link
                key={item.text}
                to={item.link}
                className={`${
                  isActive ? "text-black font-bold" : "text-[#6A6A6A]"
                } text-[16px] hover:text-black font-medium`}
              >
                {item.text}
              </Link>
            );
          })}
        </Box>

        {/* Language Selector */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "12px" }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Button
              startIcon={
                <img
                  loading="lazy"
                  src={currentLang.flag}
                  alt={currentLang.name}
                  style={{ width: 20, height: 20 }}
                />
              }
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenuOpen}
              sx={{
                padding: "16px",
                backgroundColor: "#fff",
                fontSize: "16px",
                color: "black",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f7f7f7",
                },
              }}
            >
              {currentLang.name}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPaper-root": {
                  minWidth: anchorEl ? anchorEl.offsetWidth : "auto",
                },
              }}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    loading="lazy"
                    src={lang.flag}
                    alt={lang.name}
                    style={{ width: 20, height: 20 }}
                  />
                  {lang.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Login/Register Button */}
          <Button variant="contained" color="primary">
            {t("navbar.login")}
          </Button>
        </Box>

        {/* Menu Icon for Small Screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "90%",
            backgroundColor: "#1A1A1A",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            padding: "36px 20px",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Logo color="white" />

          <Divider sx={{ background: "#323232", my: "24px" }} />

          <Box sx={{ px: "16px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#6A6A6A",
                mb: "10px",
              }}
            >
              Menu
            </Typography>
            <List>
              {drawerItems.map((item) => {
                const isSelected = location.pathname === item.link;

                return (
                  <ListItem
                    button
                    component={Link}
                    onClick={toggleDrawer(false)}
                    key={item.text}
                    to={item.link}
                    sx={{
                      color: "#fff",
                      ml: 0,
                      pl: 2,
                      backgroundColor: isSelected ? "#303030" : "transparent",
                      borderRadius: "8px",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "#fff",
                        mr: "24px",
                        minWidth: "auto",
                        padding: "8px",
                        background: isSelected ? "#505050" : "#303030",
                        borderRadius: "16px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        fontWeight: isSelected ? "700" : "400",
                        color: isSelected ? "#FFFFFF" : "#B0B0B0",
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Divider sx={{ background: "#323232", my: "24px" }} />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: "20px", px: 3, mb: 2 }}
            >
              {t("navbar.login")}
            </Button>

            <Box
              sx={{
                gap: "12px",
                alignItems: "center",
              }}
            >
              <Button
                startIcon={
                  <img
                    loading="lazy"
                    src={currentLang.flag}
                    alt={currentLang.name}
                    style={{ width: 20, height: 20 }}
                  />
                }
                fullWidth
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleMenuOpen}
                sx={{
                  padding: "16px",
                  backgroundColor: "#fff",
                  fontSize: "16px",
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f7f7f7",
                  },
                }}
              >
                {currentLang.name}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    minWidth: anchorEl ? anchorEl.offsetWidth : "auto",
                  },
                }}
              >
                {languages.map((lang) => (
                  <MenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={lang.flag}
                      alt={lang.name}
                      style={{ width: 20, height: 20 }}
                    />
                    {lang.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
