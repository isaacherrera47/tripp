import React, {useState} from 'react';
import {Container} from "@mui/material";
import ItineraryForm from "./components/ItineraryForm";
import {Itinerary} from "./services/interfaces";
import ItineraryCard from "./components/ItineraryCard";
import Header from "./components/Header";
import UnsupportedPlatform from "./components/UnsupportedPlatform";

const isMobile = () => {
  return window.matchMedia("only screen and (max-width: 480px)").matches;
}
const App: React.FC = () => {
  const [itinerary, setItinerary] = useState<Itinerary>({} as Itinerary);
  if (!isMobile()) {
    return <UnsupportedPlatform/>
  }

  return (
      <Container maxWidth={"xs"} sx={{mt: 2, bgcolor: 'background.paper'}}>
        <Header/>
        <ItineraryForm setItinerary={setItinerary}/>
        <ItineraryCard itinerary={itinerary}/>
      </Container>
  );
}

export default App;
