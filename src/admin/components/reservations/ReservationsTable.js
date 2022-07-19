import React, { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TablePagination,
  Container
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import {
  collection,
  query,
  onSnapshot,
  orderBy
} from "firebase/firestore";

import { db } from '../../../firebase-config';


export default function ReservationsTable() {
  const [expanded, setExpanded] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (index) => {
    setExpanded(
      expanded.map((boolean_value, i) => {
        if (index === i) {
          // once we retrieve the collapse index, we negate it
          return !boolean_value;
        } else {
          // all other collapse will be closed
          return false;
        }
      })
    );
  };

  useEffect(() => {
    const q = query(collection(db, 'reservations'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let reservationsArray = [];
      querySnapshot.forEach((doc) => {
        reservationsArray.push({ ...doc.data(), id: doc.id });
      });
      setReservations(
        reservationsArray.map((reservation) => ({
          reservation_data: {
            createdAt: reservation.createdAt,
            id: reservation.id,
            name: reservation.name,
            surname: reservation.surname,
            departing: reservation.departing,
            travellingDate: reservation.travellingDate,
            arriving: reservation.arriving,
          },
          other_data: {
            email: reservation.email,
            phone: reservation.phone,
            passengers: reservation.passengers
          }
        }))
      );
      setExpanded([...Array(reservationsArray.length)].map((val) => false));
    });
    return () => unsub();


  }, []);




  return (
    <Container>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="ccg">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Customer</TableCell>
              <TableCell>Departing</TableCell>
              <TableCell>Travelling Date</TableCell>
              <TableCell align="right">Arriving</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((reservation, index) => (
                <React.Fragment key={uuid()}>
                  <TableRow
                    style={{
                      borderBottom: "unset"
                    }}
                  >
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleClick(index)}
                      >
                        {expanded[index] ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {reservation.reservation_data.name} {reservation.reservation_data.surname}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {reservation.reservation_data.departing}
                    </TableCell>
                    <TableCell align="right">{reservation.reservation_data.travellingDate}</TableCell>
                    <TableCell align="right">{reservation.reservation_data.arriving}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse
                        in={expanded[index]}
                        timeout="auto"
                        unmountOnExit={true}
                      >
                        <Box margin={1}>
                          <Typography variant="h6" gutterBottom component="div">
                            More Details
                          </Typography>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Passengers</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow key={uuid()}>
                                <TableCell>
                                  {reservation.other_data.phone}
                                </TableCell>
                                <TableCell>
                                  {reservation.other_data.email}
                                </TableCell>
                                <TableCell>
                                  {reservation.other_data.passengers}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={reservations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
}


