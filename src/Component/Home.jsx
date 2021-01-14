import React, {useState, useEffect} from 'react';
import { getUserAsync } from '../Services/dataService';

import Header from './Header';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Home() {

  const classes = useStyles();

  const [data, setData] = useState([0]);


  console.log('data',data);
  useEffect( async () => {
   
    const getUsers = async () =>{
      let response = await getUserAsync();
      console.log('response',response);
      setData(response);
    }
    getUsers();  
  },[])

    return (
        <div>
            {/* <h2>Home</h2> */}
            <Header />
            <TableContainer >
           <Table className={classes.table} aria-label="customized table">
             <TableHead>
               <TableRow>
                 <StyledTableCell>ID</StyledTableCell>
                 <StyledTableCell align="right">Name</StyledTableCell>
                 <StyledTableCell align="right">Email</StyledTableCell>
                 <StyledTableCell align="right">Address</StyledTableCell>
                 <StyledTableCell align="right">Website</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {data && data.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                  {user.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.name}</StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">{user.address   && user.address.street}</StyledTableCell>
                  <StyledTableCell align="right">{user.website}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
            
        </div>
    )
}
