import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const LessonCard = () => {
  return (
    <Card
      sx={{
        width: "350px",
      }}
    >
      <CardMedia
        height="150px"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit?
          Voluptate enim eveniet dolores inventore unde numquam similique fuga
          vel corrupti delectus incidunt repellat adipisci ratione, cumque
          laudantium est. Ab!
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button>Kaydet</Button>
      </CardActions>
    </Card>
  );
};
