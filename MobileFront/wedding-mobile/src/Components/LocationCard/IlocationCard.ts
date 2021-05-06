export interface IlocationCard {
  name: string,
  date: {
    day: string,
    date: string
  },
  eventDuration: {
    start: string,
    ends: string
  },
  location: {
    address: string,
    state: string,
    map: string
  }
}