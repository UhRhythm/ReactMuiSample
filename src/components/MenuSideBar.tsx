import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemText } from "@mui/material";

type Props = {
  open: boolean;
};

export const MenuSideBar: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 200,
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton>
              <ListItemText
                sx={{ my: 0 }}
                primary="home"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              ></ListItemText>
              <ListItem />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
