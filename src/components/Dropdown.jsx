// Kopiert von https://mui.com/material-ui/react-select/, angepasst auf dei hier Vorliegenden Bedürfnisse

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Dropdown = ({
  list,
  noItem,
  selectedItem,
  selectedItemFunction,
  label,
}) => {
  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{label}</InputLabel>
        <Select value={selectedItem} onChange={selectedItemFunction}>
          <MenuItem>
            <em>{noItem}</em>
          </MenuItem>
          {list.map((element) => (
            <MenuItem value={element}>{element}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
