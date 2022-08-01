import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";
import { SaveState } from "../Utils/LocalStorage.js";

export class TripService{
    constructor() {
        console.log('service connected')
    }

  createTrip(newTrip){
    console.log('creating trip in service', newTrip);
    ProxyState.trips = [...ProxyState.trips, new Trip(newTrip)]
    console.log(ProxyState.trips);
  }



    
deleteTrip(id) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id !== id)
    
    }
}



export const tripService = new TripService()