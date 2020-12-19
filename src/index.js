import { lines } from "./data/line.js";
import StationService from "./service/station.service.js";

export default class App {
  constructor() {
    this.lines = lines;
    this.stationService = new StationService();
  }

  getDepartureStationInput() {
    const depatureStationInputField = document.getElementById("departure-station-name-input");
    return depatureStationInputField.value;
  }

  getArrivalStationInput() {
    const arrivalStationInputField = document.getElementById("arrival-station-name-input");
    return arrivalStationInputField.value;
  }

  getSearchTypeInput() {
    const searchTypeInputField = document.querySelector('input[name="search-type"]:checked');
    return searchTypeInputField.value;
  }
}

const app = new App();
