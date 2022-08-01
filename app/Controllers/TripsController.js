import { ProxyState } from "../AppState.js";
import { Reservations } from "../Models/Reservations.js";
import {tripService} from "../Services/TripService.js"
import { loadState, SaveState } from "../Utils/LocalStorage.js";
import{Pop} from "../Utils/Pop.js"

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
      ProxyState.on('reservations', _draw)
      ProxyState.on('trips', SaveState)
      loadState()
        _draw()
        

        


  }
  

 createtrip(){
    window.event.preventDefault()
    console.log('creating trip');
    let form = window.event.target
    let newTrip = {
      name: form.name.value,
     
      size: parseInt(form.size.value),
    }
    console.log(newParty);
     
     tripService.createTrip(newTrip)
    Pop.toast('Trip Created', 'success')

  }




  async deleteTrip(id) {
    if(await Pop.confirm()){
    console.log('deleteing', id);
    tripService.deleteTrip(id)
    _draw()
    }
  }
}


