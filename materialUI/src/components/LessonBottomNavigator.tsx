import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function LessonBottomNavigator() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Öncekiler" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Sevdiklerim" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Konumum" />
    </BottomNavigation>
  );
}

export default LessonBottomNavigator;
