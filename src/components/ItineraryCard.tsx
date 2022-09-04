import {Box, Chip, List, Typography} from "@mui/material";
import React, {Fragment} from "react";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import {Itinerary} from "../services/interfaces";
import StopItem from "./StopItem";

interface Props {
  itinerary: Itinerary
}

const ItineraryCard: React.FC<Props> = ({itinerary}) => {
  if (Object.keys(itinerary).length === 0) {
    return (<Fragment/>);
  }
  const trip = itinerary.trip.split('-');
  return (
      <Box sx={{mb: 2}}>
        <Chip sx={{mb: 1, mr: 1}} color="info" size={"small"} label={trip[0]} icon={<TripOriginIcon/>}/>
        <Chip sx={{mb: 1}} color="success" size={"small"} label={trip[1]} icon={<WhereToVoteIcon/>}/>
        <Typography variant="h5" component="div">
          ${parseFloat(itinerary.total.total.replace(',', '')).toFixed(2)} - {itinerary.total.time}hrs
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          <TimelineOutlinedIcon sx={{verticalAlign: 'middle'}}
                                fontSize="small"/> {parseInt(itinerary.total.distance.replace(',', ''))}km
        </Typography>
        <List>
          {itinerary.stops.map((stop, index) => (
              <StopItem stop={stop} printDivider={index !== itinerary.stops.length - 1} key={index}/>
          ))}
        </List>
      </Box>
  );
}

export default ItineraryCard;
