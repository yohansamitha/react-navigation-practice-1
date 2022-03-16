import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import image1 from "../images/image 1.jpg";
import image2 from "../images/image 2.jpg";
import image3 from "../images/image 3.jpg";
import image4 from "../images/image 4.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
   {
      id: 1,
      imgPath: image1,
   },
   {
      id: 2,
      imgPath: image2,
   },
   {
      id: 3,
      imgPath: image3,
   },
   {
      id: 4,
      imgPath: image4,
   },
];

export default function HomeCarousel() {
   const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);

   const handleStepChange = (step) => {
      setActiveStep(step);
   };

   return (
      <Box>
         <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
         >
            {images.map((step, index) => (
               <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                     <Box
                        component="img"
                        sx={{
                           height: "89vh",
                           display: "block",
                           maxWidth: "100vw",
                           overflow: "hidden",
                           width: "100%",
                        }}
                        src={step.imgPath}
                        alt={"image not found"}
                     />
                  ) : null}
               </div>
            ))}
         </AutoPlaySwipeableViews>
      </Box>
   );
}
