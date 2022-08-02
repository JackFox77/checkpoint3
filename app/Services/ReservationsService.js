import { ProxyState } from "../AppState.js"
import {Reservations} from "../Models/Reservations.js"







export class ReservationService{
    createReservation(newReservation) {
        // debugger
        console.log('creating')
        
        ProxyState.reservations = [...ProxyState.reservations, new Reservations(newReservation)]
        console.log(ProxyState.reservations)
        
    }


    deleteReservation(id) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id !== id)
    
    }
}







    // createHouse(newHouse) {
    //     let createdHouse = new House(newHouse)
    //     ProxyState.houses = [...ProxyState.houses, createdHouse]
    //     console.log('creating new house', createdHouse)
        
    // }

export const reservationService = new ReservationService()