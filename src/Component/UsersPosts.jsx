import React, { useState, useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";


import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function UsersPosts(props) {
    
    const classes = useStyles();
    console.log('props user post ',props)

    return (
        <div>
            <Header />

            <h1>User post</h1>

            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.posts.usersPostsData.map((post, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="center">{post.id}</TableCell>
                <TableCell align="center">{post.title}</TableCell>
                <TableCell align="center">{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}


const mapStateToProps = (state) => ({
    posts: state.usersPostsData,
  });
  
export default connect(mapStateToProps, null)(UsersPosts);