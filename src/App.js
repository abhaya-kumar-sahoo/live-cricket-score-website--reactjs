import React, { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Navbar'
import MyCard from './components/Mycard'
import {getMatches} from './API/Api'
import { Container, Grid, Typography } from "@material-ui/core";

function App() {
    const [matches, setMatches] = useState([]);
   
    useEffect(() => {
      getMatches()
        .then((data) => {
          console.log(data);
          setMatches(data.matches);
        })
        .catch((error) => {});
    }, []);
  
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container>
          <Grid container>
            <Grid item xs={12}>
            {
      matches.map((match)=>(
  <MyCard match= {match}/>
      ))
  }
  
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

export default App;










//API KEY OF LIVE SCORE= 9gAVXVbvoeWbjKOpYZbbC4US4x73