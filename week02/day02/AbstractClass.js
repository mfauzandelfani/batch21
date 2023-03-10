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
exports.Koenigsegg1 = exports.Hennessey1 = exports.Cars2 = void 0;
var Cars2 = /** @class */ (function () {
    function Cars2(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    Cars2.prototype.getBrand = function () {
        return this.brand;
    };
    Cars2.prototype.getSpeed = function () {
        return this.speed;
    };
    Cars2.prototype.getPrice = function () {
        return "$".concat(this.price);
    };
    return Cars2;
}());
exports.Cars2 = Cars2;
var Hennessey1 = /** @class */ (function (_super) {
    __extends(Hennessey1, _super);
    function Hennessey1(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    /* Overriding */
    Hennessey1.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Hennessey1.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Hennessey1;
}(Cars2));
exports.Hennessey1 = Hennessey1;
var Koenigsegg1 = /** @class */ (function (_super) {
    __extends(Koenigsegg1, _super);
    function Koenigsegg1(brand, speed, price, model) {
        var _this = _super.call(this, brand, speed, price) || this;
        _this.model = model;
        return _this;
    }
    /* Overriding */
    Koenigsegg1.prototype.move = function () {
        console.log("".concat(this.getName(), " berjalan dengan kecepatan ").concat(this.getSpeed(), " mph"));
    };
    Koenigsegg1.prototype.getName = function () {
        return "".concat(this.brand, " ").concat(this.model);
    };
    return Koenigsegg1;
}(Cars2));
exports.Koenigsegg1 = Koenigsegg1;
