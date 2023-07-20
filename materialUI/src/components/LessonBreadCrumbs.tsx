import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

function LessonBreadCrumbs() {
  return (
    <Breadcrumbs separator="-">
      <Link href="/" underline="hover">
        Anasayfa
      </Link>
      <Link href="/" underline="always">
        Blog
      </Link>
      <Link href="/" underline="none">
        Onur
      </Link>
    </Breadcrumbs>
  );
}

export default LessonBreadCrumbs;
