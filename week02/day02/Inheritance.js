"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Koenigsegg = exports.Hennessey = exports.Cars1 = void 0;
var Cars1 = /** @class */ (function () {
    function Cars1(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    Cars1.prototype.getBrand = function () {
        return this.brand;
    };
    Cars1.prototype.getSpeed = function () {
        return this.speed;
    };
    Cars1.prototype.getPrice = function () {
        return "$".concat(this.price);
    };
    Cars1.prototype.getName = function () {
        return this.brand;
    };
    Cars1.prototype.move = function () {
        console.log("".concat(this.brand, " berjalan dengan kencang"));
    };
    return Cars1;
}());
exports.Cars1 = Cars1;
var Hennessey = /** @class */ (function (_super) {
    __extends(Hennessey, _super);
    function Hennessey(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    /* Overriding */
    Hennessey.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Hennessey.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Hennessey;
}(Cars1));
exports.Hennessey = Hennessey;
var Koenigsegg = /** @class */ (function (_super) {
    __extends(Koenigsegg, _super);
    function Koenigsegg(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    /* Overriding */
    Koenigsegg.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Koenigsegg.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Koenigsegg;
}(Cars1));
exports.Koenigsegg = Koenigsegg;
var tesla = new Cars1("Tesla", 250, 200000);
var venom = new Hennessey("Hennessey", 270, 1200000, "Venom GT");
var agera = new Koenigsegg("Koenigsegg", 273, 2500000, "Agera RS");
tesla.move();
venom.move();
agera.move();
