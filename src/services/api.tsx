import axios from "axios";
import {ItineraryRequest, Itinerary} from "./interfaces";

export const fetchItinerary = async (params: ItineraryRequest): Promise<Itinerary> => {
  const {data} = await axios.get<Itinerary>(
      'https://dev--rutas.yukarf10.autocode.gg/',
      {params}
  );

  return data;
}