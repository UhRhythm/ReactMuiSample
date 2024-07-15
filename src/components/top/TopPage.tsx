import * as React from "react";
import ButtonAppBar from "../ButtonAppBar";
import { MenuSideBar } from "../MenuSideBar";
import { menuContext } from "../../hooks/appState";
import { useState } from "react";

export default function TopPage() {
  const [isOpened, setOpened] = React.useState(true);
  return (
    <>
      <menuContext.Provider value={{ isOpened, setOpened }}>
        <ButtonAppBar />
        <MenuSideBar open={isOpened} />
      </menuContext.Provider>
    </>
  );
}
