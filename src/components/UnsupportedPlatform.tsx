import {Box, Typography} from "@mui/material";

const UnsupportedPlatform: React.FC = () => {
  return (
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h2" gutterBottom>
          Plataforma no soportada
        </Typography>
        <Typography variant="h5">
          Aplicación disponible solo para dispositivos móviles
        </Typography>
      </Box>
  );
}

export default UnsupportedPlatform;