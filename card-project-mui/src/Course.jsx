import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

function Course({ desc, title, image }) {
  return (
    <Card>
      <CardMedia component="img" image={image} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body" component="div" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
