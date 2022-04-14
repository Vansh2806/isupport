import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const R2AndR3Configuration = (props) => {
  const { viewTableData } = props;
  return (
    <div style={{ height: '500px', width: '1050px', overflowY: 'scroll' }}>
      <TableContainer component={Paper}>
        <Table
          style={{
            height: '500x',
            maxHeight: '500px',
            width: '1000px',
            minHeight: '500px',
          }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Feild Name</TableCell>
              <TableCell align='center'>E2B</TableCell>
              <TableCell align='center'>R2 DTD</TableCell>
              <TableCell align='center'>R2 Value</TableCell>
              <TableCell align='center'>Organization</TableCell>
              <TableCell align='center'>value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewTableData.map((row) => (
              <TableRow
                key={row.field_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.field_name}
                </TableCell>
                <TableCell align='center'>{row.e2b}</TableCell>
                <TableCell align='center'>{row.r2_dtd}</TableCell>
                <TableCell align='center'>{row.r2_value}</TableCell>
                <TableCell align='center'>{row.organization}</TableCell>
                <TableCell align='center'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default R2AndR3Configuration;
