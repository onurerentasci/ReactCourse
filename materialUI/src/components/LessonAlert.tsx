import React from "react";
import { Alert, Stack, AlertTitle } from "@mui/material";

function LessonAlert() {
  return (
    <Stack spacing={1}>
      <Alert severity="warning">Uyarı mesajı</Alert>
      <Alert severity="error">Hata mesajı</Alert>
      <Alert severity="info">Bilgilendirme Mesajı</Alert>
      <Alert severity="success">Başarılı Mesajı</Alert>
      <Alert>Boş halde Başarılı mesajı</Alert>

      <Alert severity="error">
        <AlertTitle sx={{ fontWeight: "bold" }}>Hata Başlığı</AlertTitle>
        Hata mesajı
      </Alert>
    </Stack>
  );
}

export default LessonAlert;
