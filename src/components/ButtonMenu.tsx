import { useContext } from "react";
import { menuContext } from "../hooks/appState";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonMenu() {
  const { isOpened, setOpened } = useContext(menuContext);
  const toggleOpen = () => setOpened(!isOpened);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleOpen}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
