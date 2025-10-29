import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

// 実データ
const rows = [
  { id: 1, name: "hiro", age: 28 },
  { id: 2, name: "aki", age: 27 },
  { id: 3, name: "ta", age: 12 },
  { id: 1, name: "hiro", age: 28 },
  { id: 2, name: "aki", age: 27 },
  { id: 3, name: "ta", age: 12 },
];

export default function Datatable() {
  return (
    <Box>
      <Box></Box>
      <Box display="flex">
        <TableContainer component={Paper} sx={{ height: "250px" }}>
          <Table size="small" stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
