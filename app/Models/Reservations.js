import { generateId } from "../Utils/generateId.js"




export class Reservations{
    constructor(data) {
        this.tripId=data.tripId
        this.type= data.type
        this.name = data.name
        this.date= data.date
        this.id = data.id || generateId()
        this.address = data.address
        this.price= data.price
    }

    get Template() {
        return `
        <div class="row pt-3 bg-warning"><p class="col-2 ">Lodgings | ${this.type}</p>
        <p class="col-2 ">Name | ${this.name}</p>
        <p class="col-2 ">Price | ${this.price}</p>
        <p class="col-2 ">Trip Id | ${this.tripId}</p>
        <p class="col-2 ">Date | ${this.date}</p>
        <p class="col-2 ">Address | ${this.address}</p>
        <p class="col-2 ">Confirmation | ${this.id}</p>
        </div>
        `
    }
}