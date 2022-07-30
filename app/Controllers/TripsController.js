import { ProxyState } from "../AppState.js";
import { Reservations } from "../Models/Reservations.js";
import {tripService} from "../Services/TripService.js"

function _draw() {
    let template = ''
    ProxyState.trips.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
    // console.log(template)
}

export class TripsController{
    constructor() {
        console.log('controller connected')
    
        ProxyState.on('trips', _draw)
        ProxyState.on('reservations',_draw)
        _draw()
        

        


    }

      deleteTrip(id){
    console.log('deleteing', id);
    tripService.deleteTrip()
    _draw()
  }
}


