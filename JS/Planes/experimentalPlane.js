// 1) Переименован класс experimentalPlane в ExperimentalPlane
// 2) Удалены избыточные объявления свойств _model, _maxSpeed, _maxFlightDistance, _maxLoadCapacity, так как они уже унаследованы от класса Plane.
// Оставлены только свойства _type и _classificationLevel, которые специфичны для класса ExperimentalPlane.
// 3) Использован краткий синтаксис для объявления геттеров и сеттеров для свойств _type и _classificationLevel
const Plane = require('./Plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._type = type;
        this._classificationLevel = classificationLevel;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = ExperimentalPlane;