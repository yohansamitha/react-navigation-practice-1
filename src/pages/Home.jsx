import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import Post from "../components/Post";
import Data from "../data";
import Typography from "@mui/material/Typography";

export default function Home() {
   // const getPosts = async () => {
   //    await fetch("https://jsonplaceholder.typicode.com/photos")
   //       .then((response) => response.json())
   //       .then((json) => console.log(json));
   // };

   const movies = new Data();

   // useEffect(() => {
   //    // getPosts();
   //    movies.movies.map((movie) => {
   //       console.log("====================================");
   //       console.log(movie);
   //       console.log("====================================");
   //    });
   // }, []);

   // const movie = {
   //    id: 146,
   //    title: "The Big Short",
   //    year: "2015",
   //    runtime: "130",
   //    genres: ["Biography", "Comedy", "Drama"],
   //    director: "Adam McKay",
   //    actors: "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
   //    plot: "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
   //    posterUrl: "https://via.placeholder.com/600/771796",
   // };

   return (
      <>
         <HomeCarousel />
         <section>
            <Box
               sx={{
                  textAlign: "center",
                  m: 1,
                  fontSize: 20,
                  fontWeight: "bold",
               }}
            >
               Post Section
            </Box>
            <Divider variant="middle" />
            <Grid container spacing={2}>
               {movies.movies?.length > 0 ? (
                  movies.movies.map((movie) => (
                     <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Post movie={movie} />
                     </Grid>
                  ))
               ) : (
                  <Typography gutterBottom variant="h5" component="div">
                     No Movies Found
                  </Typography>
               )}

               {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Post movie={movie} />
               </Grid> */}
            </Grid>
         </section>
      </>
   );
}
