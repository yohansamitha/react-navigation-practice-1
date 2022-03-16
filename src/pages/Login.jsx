import {
   Avatar,
   Box,
   Button,
   Checkbox,
   CssBaseline,
   FormControlLabel,
   Grid,
   Paper,
   TextField,
   Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import LockIcon from "@mui/icons-material/Lock";

export default function Login(props) {
   const navigate = useNavigate();

   const [username, setUsername] = React.useState("");
   const [password, setPassword] = React.useState("");

   const handelLogin = () => {
      alert("username : " + username + " | password " + password);
      navigate("/admin/home");
   };

   return (
      <Grid
         height="100vh"
         display="flex"
         alignItems={"center"}
         justifyContent={"center"}
         container
         component="main"
      >
         <CssBaseline />
         <Grid
            item
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={1}
            square
            sx={{ p: 2 }}
         >
            <Box
               display="flex"
               flexDirection={"column"}
               alignItems={"center"}
               justifyContent={"center"}
            >
               <Avatar sx={{ m: 2 }}>
                  <LockIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign in
               </Typography>
               <form noValidate>
                  <TextField
                     onChange={(event) => setUsername(event.target.value)}
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="username"
                     label="Username"
                     name="username"
                     autoFocus
                  />
                  <TextField
                     onChange={(event) => setPassword(event.target.value)}
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <FormControlLabel
                     control={<Checkbox value="remember" color="primary" />}
                     label="Remember me"
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     onClick={handelLogin}
                  >
                     Sign In
                  </Button>
                  <Box mt={5}>
                     <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                     >
                        {"Copyright © "}
                        {new Date().getFullYear()}
                        {"."}
                     </Typography>
                  </Box>
               </form>
            </Box>
         </Grid>
      </Grid>
   );
}
