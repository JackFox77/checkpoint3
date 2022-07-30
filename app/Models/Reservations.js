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
        <div><p>${this.type}</p>
        <p>${this.name}</p>
        <p>${this.price}</p>
        <p>${this.tripId}</p>
        <p id=""></p>
        <p id=""></p>
        </div>
        `
    }
}