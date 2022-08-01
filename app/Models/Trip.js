import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";



export class Trip{
    constructor(data) {
        this.name = data.name
        this.id = data.id || generateId()
        
        
    }

    get Template() {
        return `
        <div class="row ">
        <h4 class=" col-3 bg-secondary pb-0 mb-0 mt-5">
            ${this.name}
            
        </h4><button  class="col-1"onclick="app.tripsController.deleteTrip('${this.id}')">Delete Me</button></div>
        <div class="bg-white row">
        <div class="col-12">
        ${this.ReservationsTemplate}</div></div>


        <section class="row">
        <div class="col-3 text-center">Lodgings</div>
        <div class="col-5 text-center">Name</div>
        <div class="col-3 text-center">Price</div>



        `
    }

    get ReservationsTemplate() {
        let template = ''
        ProxyState.reservations
            .filter(r => r.tripId == this.id)
            .forEach(r => template += r.Template)
            
            
        return template
        console.log(template)
    }
}


function doSomething() {
    console.log('tripper')
}
