import { ProxyState } from "../AppState.js"
import { reservationService, ReservationService } from "../Services/ReservationsService.js"


function _draw() {
    let template = ''
    ProxyState.trips.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
    // console.log(template)
}

export class ReservationsController{
    constructor() {
        console.log('reservation control');
        ProxyState.on('reservations',_draw)
    }
    


    
    createReservation(reservationId) {
        // debugger
        window.event.preventDefault()
        console.log('creating a reservation', reservationId)
        let form = window.event.target
        let newReservation = {
            type: form.type.value,
            name: form.name.value,
            price: parseInt(form.price.value),
            reservationId:reservationId
        }
        console.log(newReservation);
        reservationService.createReservation(newReservation)
    }
}




 


//   createHouse(){
//     console.log('house form submitted');
//     // NOTE window.event.preventDefault grabs the submit event from the form submit and keeps the page from refreshing
//     window.event.preventDefault()
//     let form = window.event.target
//     console.log(form);

//    let newHouse ={
//     type: form.type.value,
//     area: form.area.value,
//     price: form.price.value,
//     year: form.year.value,
//     img: form.img.value,
//     description: form.description.value,
//    }
//     houseService.createHouse(newHouse)
//     form.reset()
//     // NOTE replaced by listeners in constructor
//     // _drawCars()
//   }