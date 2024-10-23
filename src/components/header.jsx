// Kopiert von https://mui.com/material-ui/react-app-bar/, angepasst auf dei hier Vorliegenden Bedürfnisse

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Dropdown } from "./Dropdown";

export const Header = ({
  ktListe,
  typListe,
  selectedKt,
  selectedTyp,
  selectedKtFunction,
  selectedTypFunction,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "RGB(97, 194, 171)",
        }}
      >
        <Toolbar>
          <div>
            <img src="geoharvester.png" width="250" />
          </div>
          <Typography
            variant="h6"
            align="center"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              display: { xs: "none", sm: "block" },
            }}
          >
            Ein Katallog für Schweizer Geodienste
          </Typography>

          <Dropdown
            list={ktListe}
            noItem={"Kein Kanton"}
            selectedItem={selectedKt}
            selectedItemFunction={selectedKtFunction}
            label={"Anbieter"}
          />

          <Dropdown
            list={typListe}
            noItem={"Kein Typ"}
            selectedItem={selectedTyp}
            selectedItemFunction={selectedTypFunction}
            label={"Service"}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
