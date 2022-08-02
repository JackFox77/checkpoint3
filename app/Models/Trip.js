import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";


// PARTY
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
            
        </h4><button  class="col-1 "onclick="app.tripsController.deleteTrip('${this.id}')">Delete Me</button></div>
        <div class="bg-white row">
        <div class="col-12">
        ${this.ReservationsTemplate}</div></div>


        <section class="row">
        <div class="col-3 text-center"></div>
        <div class="col-5 text-center"></div>
        <div class="col-3 text-center"></div>

            <form onsubmit="app.reservationController.createReservation()">
                <section>
              <form
        class="row"
        onsubmit=""
      >
        <div class="col-3">
          <select class="form-control" name="type" id="type" required>
            <option value="hotel">🏨 Hotel</option>
            <option value="cabin">🌳Cabin</option>
            <option value="misc">🏡Misc</option>
          </select>
        </div>
        <div class="col-5 p-1">
          <input class="form-control" type="text" name="name" id="name" placeholder="name">
          </div>
          <div class="col-3 p-1">
          <input class="form-control" type="number" name="price" , id="price" placeholder="price">
          </div>
          <button  class="col-1 btn-rounded  btn btn-info">+</button>
          
           </form>



        `
    }

    get ReservationsTemplate() {
        let template = ''
        ProxyState.reservations
            .filter(r => r.tripId == this.id)
            // let parties = ProxyState.parties.sort((a, b) => a.date - b.date)
            
            // FIXME sort here (see BigBCheese PartiesController line 9)
            .forEach(r => template += r.Template)
            
            
        return template
        console.log(template)
    }
}


function doSomething() {
    console.log('tripper')
}
