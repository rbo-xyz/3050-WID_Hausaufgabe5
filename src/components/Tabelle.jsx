// Kopiert von https://mui.com/material-ui/react-table/, angepasst auf dei hier Vorliegenden Bedürfnisse

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const Tabelle = ({ dataFiltered }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 575 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Anbieter </TableCell>
              <TableCell align="left">Datensatz</TableCell>
              <TableCell align="left">Zusammenfassung</TableCell>
              <TableCell align="center">Service</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.map((event) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{event.anbieter}</TableCell>
                <TableCell align="left">{event.datensatz}</TableCell>
                <TableCell align="left">{event.zusammenfassung}</TableCell>
                <TableCell align="center">{event.service}</TableCell>
                <TableCell align="center">{event.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
