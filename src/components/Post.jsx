import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

export default function Post({ movie }) {
   return (
      <Card sx={{ m: 1 }}>
         <CardHeader
            title={movie.title}
            subheader={
               movie.year + " | " + movie.runtime + "min | " + movie.genres
            }
         />
         <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={movie.posterUrl}
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               SUMMARY
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               {movie.plot}
            </Typography>
            <Typography gutterBottom variant="body1">
               {movie.actors}
            </Typography>
         </CardContent>
      </Card>
   );
}
