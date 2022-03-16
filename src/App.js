import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";

function App() {
   // const [user, setUser] = useState(true);
   // const routing = useRoutes(routes(user));
   const routing = useRoutes(routes(true));

   // const navigate = useNavigate();
   return (
      <div>
         {/* <Button
            style={{
               margin: "10px",
               padding: "5px",
               background: "transparent",
            }}
            variant="outlined"
            onClick={() => {
               console.log(user);
               setUser(!user);
            }}
         >
            Sign out
         </Button>
         <Button
            style={{
               margin: "10px",
               padding: "5px",
               background: "transparent",
            }}
            variant="outlined"
            onClick={() => {
               navigate("/admin/pageone");
            }}
         >
            Navigate to Page one
         </Button>
         <Button
            style={{
               margin: "10px",
               padding: "5px",
               background: "transparent",
            }}
            variant="outlined"
            onClick={() => {
               navigate("/admin/pagetwo");
            }}
         >
            Navigate to page two
         </Button> */}

         {routing}
      </div>
   );
}

export default App;
