import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis harum placeat fugiat totam laudantium quaerat ea aperiam ad
        repudiandae, nobis beatae fugit! Rerum nobis atque velit eligendi
        aspernatur ad voluptate.
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis harum placeat fugiat totam laudantium quaerat ea aperiam ad
        repudiandae, nobis beatae fugit! Rerum nobis atque velit eligendi
        aspernatur ad voluptate.
      </Typography>
      <Typography variant="h1">H1 görünümü</Typography>
      <Typography variant="h2">H2 görünümü</Typography>
      <Typography variant="h3">H3 görünümü</Typography>
      <Typography variant="h4">H4 görünümü</Typography>
      <Typography variant="h5">H5 görünümü</Typography>
      <Typography variant="h6">H6 görünümü</Typography>

      <Typography variant="h1" component="h4">
        H1 görünümü
        {/* h1 css özelliklerini h4 componentine uygula */}
      </Typography>
      <Typography variant="h1" component="h4" align="right">
        H1 görünümü
      </Typography>
      <Typography variant="h1" component="h4" align="center">
        H1 görünümü
      </Typography>
      <Typography variant="h1" component="h4" align="left">
        H1 görünümü
      </Typography>
      <Typography variant="subtitle1">H1 görünümü</Typography>
      <Typography variant="subtitle2">H1 görünümü</Typography>
    </div>
  );
};
