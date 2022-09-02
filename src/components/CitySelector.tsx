import React, {Dispatch, SetStateAction, useState} from "react";
import {Box, MenuItem, TextField} from "@mui/material";
import countryData from "../data/states.json";
import {Place} from "../services/interfaces";

interface Props {
  helperTextState: string
  helperTextCity: string
  setPlace: Dispatch<SetStateAction<Place>>
}

const CitySelector: React.FC<Props> = ({helperTextCity, helperTextState, setPlace}) => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cityList, setCityList]: Array<any> | [] = useState(countryData[0].cities);

  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = event.target.value;
    setState(value);
    setCityList(countryData[value].cities);
    setPlace({state: value, city});
  }
  const handleChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
    setPlace({state, city: event.target.value});
  }
  return (
      <Box sx={{display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', mb: 2}}>
        <TextField
            select
            label="Estado"
            helperText={helperTextState}
            value={state}
            onChange={handleChangeState}
            sx={{mb: 2}}
        >
          {countryData.map((v, i) => (
              <MenuItem value={i} key={i}>
                {v.value}
              </MenuItem>
          ))}
        </TextField>
        <TextField
            select
            label="Ciudad"
            helperText={helperTextCity}
            value={city}
            onChange={handleChangeCity}
        >
          {cityList.map((v: any) => (
              <MenuItem value={v.id} key={v.id}>
                {v.value}
              </MenuItem>
          ))}
        </TextField>
      </Box>
  );
}

export default CitySelector;