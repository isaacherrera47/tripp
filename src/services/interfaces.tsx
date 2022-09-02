export interface ItineraryRequest {
  originState: string,
  destinationState: string,
  originCity: string,
  destinationCity: string
}

export interface Itinerary {
  stops: Array<{
    name: string,
    state: string,
    route: string,
    distance: string,
    toll: string,
    fee: string,
    duration: string
  }>,
  total: {
    distance: string,
    time: string,
    total: string
  },
  trip: string
}

export interface Place {
  state: string
  city: string
}