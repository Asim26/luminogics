import React, {useState, useEffect} from 'react'
// API Calling
import { getUserAsync } from './Services/dataService'

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home';

// import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

function App() {
  
  return (
    // <BrowserRouter>
    //   <div>
    //   <Header/>
    //     <Route path="/" exact component= {Home} />
    //     <Route path="/about" component= {About} />
    //     <Route path="/contact" component= {Contact} />

    //     {/* { data.map(user=>{
    //         return <p> {user.name} {user.email}{user.address.street} </p>
    //     })}     */}
        
    //   </div>
    // </BrowserRouter>
    <div>
      <Header/>
    </div>
  );
}


// const Home = () =>{

//   // const classes = useStyles();

//   // const [data, setData] = useState([]);

//   //  const  getUsers = async() =>{
//   //   let response = await getUserAsync();
//   //   console.log('response',response);
//   //   setData(response);

//   // }

//   // console.log('data',data);
//   // useEffect(() => {
//   //   getUsers();
//   // },[])


//   return(
//       <div>
//           <h2>Welcome to Home</h2>
//           <Home/>
//           {/* <TableContainer >
//           <Table className={classes.table} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>ID</StyledTableCell>
//                 <StyledTableCell align="right">Name</StyledTableCell>
//                 <StyledTableCell align="right">Email</StyledTableCell>
//                 <StyledTableCell align="right">Address</StyledTableCell>
//                 <StyledTableCell align="right">Website</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((user) => (
//                 <StyledTableRow key={user.id}>
//                   <StyledTableCell component="th" scope="row">
//                   {user.id}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{user.name}</StyledTableCell>
//                   <StyledTableCell align="right">{user.email}</StyledTableCell>
//                   <StyledTableCell align="right">{user.address.street}</StyledTableCell>
//                   <StyledTableCell align="right">{user.website}</StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer> */}
//       </div>
//   )
// }

export default App;
