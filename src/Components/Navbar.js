import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openFormPopup, setOpenFormPopup] = useState(false);

  const handleSponsorshipClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenFormPopup = () => {
    setOpenFormPopup(true);
  };

  const handleCloseFormPopup = () => {
    setOpenFormPopup(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Achievements",
      icon: <FontAwesomeIcon icon={faMedal} />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Sponsorship",
      icon: <MonetizationOnIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="netxus_logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option) => (
          <ScrollLink
            key={option.text}
            activeClass="active"
            to={option.text.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            onClick={option.text === "Sponsorship" ? handleSponsorshipClick : null}
          >
            {option.text}
          </ScrollLink>
        ))}
        <button className="primary-button" onClick={handleOpenFormPopup}>
          Booking Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Why Sponsorship?</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "justify", lineHeight: "1.5" }}>
            NetXus aims to transform access to clean, sustainable energy in Nigeria and beyond. With 65% of Nigerian students facing daily energy poverty due to extensive power outages, our innovative renewable energy solutions offer a vital solution. By combining solar energy with human power, we deliver reliable and affordable energy, benefiting households, businesses, and educational institutions. However, to achieve our goals, we need sponsorship to scale our operations and reach more communities. By sponsoring NetXus, you're investing in a brighter, more sustainable future, creating opportunities for education, economic growth, and environmental preservation. Together, we can make a meaningful impact, lighting up lives one charge at a time. For sponsorship inquiries, please contact us at{" "}
            <a href="mailto:yekinirasheed2002@gmail.com" target="_blank" rel="noreferrer noopener">yekinirasheed2002@gmail.com</a> or visit our{" "}
            <a href="https://www.linkedin.com/company/netxus" target="_blank" rel="noreferrer noopener">LinkedIn page</a>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openFormPopup} onClose={handleCloseFormPopup}>
        <DialogTitle>Booking Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFormPopup}>Cancel</Button>
          <Button onClick={handleCloseFormPopup}>Submit</Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;