import { useState } from "react";
import { AppBar, Toolbar, Grid, Container } from "@mui/material";

import Course from "./Course";

import AngularImg from "./images/angular.jpg";
import BootstrapImg from "./images/bootstrap5.png";
import CCSImg from "./images/ccsharp.png";
import WebImg from "./images/kompleweb.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kurslarım</Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} sx={{ marginTop: 20 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={AngularImg}
              title="Angular"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias illum culpa, consectetur porro hic dolore cum eos doloribus delectus similique repellat autem quod fuga consequuntur deserunt, voluptate atque perspiciatis?"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={BootstrapImg}
              title="Bootstrap5"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias illum culpa, consectetur porro hic dolore cum eos doloribus delectus similique repellat autem quod fuga consequuntur deserunt, voluptate atque perspiciatis?"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={CCSImg}
              title="C - C#"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias illum culpa, consectetur porro hic dolore cum eos doloribus delectus similique repellat autem quod fuga consequuntur deserunt, voluptate atque perspiciatis?"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={WebImg}
              title="Komple Web"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias illum culpa, consectetur porro hic dolore cum eos doloribus delectus similique repellat autem quod fuga consequuntur deserunt, voluptate atque perspiciatis?"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
