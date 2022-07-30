import { ValuesController } from "./Controllers/ValuesController.js";
import { TripsController } from "./Controllers/TripsController.js"
import { ReservationsController } from "./Controllers/ReservationsController.js";

class App {
  // valuesController = new ValuesController();x
  tripsController = new TripsController()
  reservationController= new ReservationsController()
}

window["app"] = new App();
