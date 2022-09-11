import React, {Dispatch, SetStateAction} from "react";
import {Autocomplete, Box, TextField} from "@mui/material";
import options from "../data/cities.json";
import {Place} from "../services/interfaces";

interface Props {
  helperTextCity: string
  setPlace: Dispatch<SetStateAction<Place>>
}

const CitySelector: React.FC<Props> = ({helperTextCity, setPlace}) => {
  const handleChangeCity = (event: any, value: any) => {
    setPlace({state: value.state_id, city: value.city_id});
    console.log(value);
  }

  return (
      <Box sx={{display: 'grid', mb: 2}}>
        <Autocomplete
            id="grouped-demo"
            options={options}
            groupBy={(option) => option.state}
            getOptionLabel={(option) => option.city}
            onChange={handleChangeCity}
            renderInput={(params) =>
                <TextField helperText="Selecciona una opción" {...params} label={helperTextCity}/>}
        />
      </Box>
  );
}

export default CitySelector;