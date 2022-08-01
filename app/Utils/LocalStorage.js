import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";
import { Reservations } from "../Models/Reservations.js";

export function SaveState() {
    console.log('saving');
    let tripData = JSON.stringify(ProxyState.trips)
    localStorage.setItem('trips', tripData)
    let reservationData = JSON.stringify(ProxyState.reservations)
    localStorage.setItem('reservations',reservationData )
}
export function loadState() {
    console.log('loading')
    let rawTrips = localStorage.getItem('trips')
    let rawReservations = localStorage.getItem('reservations')
    if(rawTrips){
    let tripData = JSON.parse(rawTrips)
    console.log(tripData);
    ProxyState.trips = tripData.map(t => new Trip(t))
    }
    if (rawReservations) {
        let reservationData = JSON.parse(rawReservations)
        console.log(reservationData)
        ProxyState.reservations=reservationData.map(r=>new Reservations(r))
    }
}