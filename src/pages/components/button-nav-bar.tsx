import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CameraIcon from "@mui/icons-material/Camera";
import { Link, Outlet } from "react-router-dom";
import { Container, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ButtonNavBar() {
  const [lang, setLang] = React.useState("english");
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary" sx={{ background: "none" }}>
          <Toolbar>
            <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <CameraIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/talley" className="no-decoration">
                Trade
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/govlead" className="no-decoration">Pool</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Explore</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Farm</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Lending</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Launchpad</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Analytics</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/govover" className="no-decoration">Portfolio</Link>
            </Typography>
            <React.Fragment>
              <Button variant="contained" color="secondary" size="small">
                Connect Wallet
              </Button>
              <FormControl>
                <Select
                  sx={{ color: "white" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="English"
                  value={lang}
                  onChange={handleChange}>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
              </FormControl>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ backgroundColor: "#15081D", color: "white", marginTop: "100px" }} maxWidth="lg">
        <Outlet />
      </Container>
    </React.Fragment>
  );
}
