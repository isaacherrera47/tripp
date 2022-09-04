import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import React, {Fragment} from "react";
import {Stop} from "../services/interfaces";

type Props = {
  stop: Stop,
  printDivider: boolean
}
const StopItem: React.FC<Props> = ({stop, printDivider}) => {
  const duration = `${stop.duration}hrs`;
  const distance = `${parseInt(stop.distance)}km`;
  const fee = stop.fee ? `$${parseFloat(stop.fee).toFixed(2)}` : `SIN COSTO`;

  return (
      <Fragment>
        <ListItem sx={{px: 0}}>
          <ListItemAvatar>
            <Avatar>
              <PinDropIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
              primary={stop.name}
              secondary={`${duration} - ${distance} - ${fee}`}
          />
        </ListItem>
        {printDivider && <Divider sx={{ml: '58px'}} variant="inset" component="li"/>}
      </Fragment>
  );
}

export default StopItem;
