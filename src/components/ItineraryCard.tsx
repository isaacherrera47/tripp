import {Avatar, Box, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import React, {Fragment} from "react";
import PinDropIcon from '@mui/icons-material/PinDrop';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import {Itinerary} from "../services/interfaces";

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
          ${parseFloat(itinerary.total.total.replace(',', '')).toFixed(2)} - {itinerary.total.time} hrs
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          <TimelineOutlinedIcon sx={{verticalAlign: 'middle'}}
                                fontSize="small"/> {parseInt(itinerary.total.distance.replace(',', ''))} kms
        </Typography>
        <List>
          {itinerary.stops.map((stop, index) => (
              <Fragment key={index}>
                <ListItem sx={{px: 0}}>
                  <ListItemAvatar>
                    <Avatar>
                      <PinDropIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                      primary={stop.name}
                      secondary={`${stop.duration}hrs - ${parseInt(stop.distance)}kms - $${stop.fee ? parseFloat(stop.fee).toFixed(2) : ' SIN COSTO'}`}
                  />
                </ListItem>
                {index !== itinerary.stops.length - 1 && <Divider sx={{ml: '58px'}} variant="inset" component="li"/>}
              </Fragment>
          ))}
        </List>
      </Box>
  );
}

export default ItineraryCard;
