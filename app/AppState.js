import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Trip } from "./Models/Trip.js"
import {Reservations} from "./Models/Reservations.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  trips = [
    new Trip({
      name: 'Fresno',
      id: '1234',
    }),
    new Trip({
      name: 'Houston',
      id: '4123',
    })
  ];
  reservations = [
    new Reservations({
      type: 'hotel',
      name: 'Hamilton',
      price: '125',
      tripId: '1234',
      address: '53 Bulberry lane',
      date:  '05-12-2000'
    }),
    new Reservations({
      type: 'cabin',
      name: 'Private Heights',
      price: '155',
      tripId: '4123'
    })
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
