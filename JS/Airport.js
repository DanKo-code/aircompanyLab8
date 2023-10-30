// 1) getPassengerPlanes/getMilitaryPlanes -> Array.filter
// 2) getPassengerPlaneWithMaxPassengersCapacity -> Array.reduce
// 3) Array.sort

const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        return this.planes.filter(plane => plane instanceof PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.planes.filter(plane => plane instanceof MilitaryPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengerPlanes();
        return passengerPlanes.reduce((maxCapacityPlane, plane) => {
            if (plane.passengersCapacity > maxCapacityPlane.passengersCapacity) {
                return plane;
            } else {
                return maxCapacityPlane;
            }
        }, passengerPlanes[0]);
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.MilitaryType === MilitaryType.TYPE_TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.MilitaryType === MilitaryType.BOMBER);
    }

    getExperimentalPlanes() {
        return this.planes.filter(plane => plane instanceof experimentalPlane);
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.maxFlightDistance > b.maxFlightDistance) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.maxSpeed > b.maxSpeed) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.MinLoadCapacity > b.MinLoadCapacity) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
