import React from "react";
import {Avatar, Box, Typography} from "@mui/material";

const Header: React.FC = () => {
  return (
      <Box sx={{textAlign: 'center'}}>
        <Avatar
            alt="tripp icon"
            src="./favicon.png"
            sx={{width: '100%', height:'auto', display: 'block'}}
        />
        <Typography variant="overline" gutterBottom>
          RUTAS PUNTO A PUNTO
        </Typography>
      </Box>
  );
}

export default Header;