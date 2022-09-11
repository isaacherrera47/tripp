import React, {Dispatch, Fragment, SetStateAction, useState} from "react";
import CitySelector from "./CitySelector";
import {Backdrop, Box, CircularProgress} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import {Itinerary, ItineraryRequest, Place} from "../services/interfaces";
import {fetchItinerary} from "../services/api";
import {get, set} from "idb-keyval";

interface Props {
  setItinerary: Dispatch<SetStateAction<Itinerary>>
}

const ItineraryForm: React.FC<Props> = ({setItinerary}) => {
  const [originPlace, setOriginPlace] = useState<Place>({state: '', city: ''});
  const [destinationPlace, setDestinationPlace] = useState<Place>({state: '', city: ''})
  const [open, isOpen] = useState(false);

  const handleSubmitForm = async () => {
    let result;
    isOpen(true);
    result = await get<Itinerary>(`${originPlace.city}-${destinationPlace.city}`);

    if (!result) {
      const itineraryParams: ItineraryRequest = {
        originState: originPlace.state,
        originCity: originPlace.city,
        destinationState: destinationPlace.state,
        destinationCity: destinationPlace.city
      }

      result = await fetchItinerary(itineraryParams);
      await set(`${originPlace.city}-${destinationPlace.city}`, result);
    }

    setItinerary(result);
    isOpen(false);
  }

  return (
      <Fragment>
        <CitySelector setPlace={setOriginPlace} helperTextCity="Ciudad de origen"/>
        <CitySelector setPlace={setDestinationPlace} helperTextCity="Ciudad destino"/>
        <Box sx={{textAlign: 'center'}}>
          <LoadingButton
              onClick={handleSubmitForm}
              startIcon={<SearchIcon/>}
              loading={open}
              loadingPosition="start"
              variant="contained"
              sx={{mb: 2}}
          >
            Buscar
          </LoadingButton>
        </Box>
        <Backdrop
            sx={{color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1}}
            open={open}
        >
          <CircularProgress color="inherit"/>
        </Backdrop>
      </Fragment>
  );
}

export default ItineraryForm;
