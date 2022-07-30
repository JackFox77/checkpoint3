import { ProxyState } from "../AppState.js";

export class TripService{
    constructor() {
        console.log('service connected')
    }
deleteTrip(id) {
        ProxyState.trips= ProxyState.trips.filter(t => t.id !==id)
    }
}



export const tripService = new TripService()