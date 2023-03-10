var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
//Class
var nopolice = /** @class */ (function () {
  function nopolice(type) {
    this.type = type;
  }
  nopolice.prototype.setType = function (type) {
    this.type = type;
  };
  nopolice.prototype.getType = function () {
    return this.type;
  };
  return nopolice;
})();
//Inheritance
var vehicle = /** @class */ (function (_super) {
  __extends(vehicle, _super);
  function vehicle(id, type, total) {
    var _this = _super.call(this, type) || this;
    _this.id = id;
    _this.total = total;
    return _this;
  }
  vehicle.prototype.setTotal = function (total) {
    this.total = total;
  };
  vehicle.prototype.getTotal = function () {
    return this.total;
  };
  return vehicle;
})(nopolice);
var TotalV = /** @class */ (function () {
  function TotalV(tot) {
    this.tot = tot;
  }
  TotalV.prototype.setTotal = function (tot) {
    this.tot = tot;
  };
  TotalV.prototype.getTotal = function () {
    return this.tot;
  };
  TotalV.prototype.TotalVhc = function () {
    var arrays = [];
    for (var i in this.tot) {
      arrays.push(this.tot[i].getType());
    }
    console.log("Total Vehicle: ".concat(arrays.length));
  };
  TotalV.prototype.TotalVhc2 = function (pointer) {
    var arrays = [];
    for (var i in this.tot) {
      if (pointer === this.tot[i].getType()) arrays.push(this.tot[i].getType());
    }
    console.log("Total Vehicle ".concat(pointer, " : ").concat(arrays.length));
  };
  TotalV.prototype.TotalAll = function () {
    var arrays = [];
    for (var i in this.tot) {
      arrays.push(this.tot[i].getTotal());
    }
    console.log(
      "Total Semua: ".concat(
        arrays.reduce(function (a, b) {
          return a + b;
        }, 0)
      )
    );
  };
  TotalV.prototype.TotalincomeVhc = function (pointer) {
    var arrays = [];
    for (var i in this.tot) {
      if (pointer === this.tot[i].getType()) {
        arrays.push(this.tot[i].getTotal());
      }
    }
    console.log(
      "Total Semua ".concat(pointer, ": ").concat(
        arrays.reduce(function (a, b) {
          return a + b;
        }, 0)
      )
    );
  };
  return TotalV;
})();
var v1 = new vehicle("D1001UM", "SUV", 650000);
var v2 = new vehicle("D1002UM", "SUV", 650000);
var v3 = new vehicle("D1003UM", "SUV", 650000);
var v4 = new vehicle("D1004UM", "SUV", 650000);
var v5 = new vehicle("D11UK", "Taxi", 202500);
var v6 = new vehicle("D12UK", "Taxi", 337500);
var v7 = new vehicle("D13UK", "Taxi", 405000);
var v8 = new vehicle("ID8089", "PrivateJet", 50000000);
var v9 = new vehicle("ID8099", "PrivateJet", 80000000);
var tot = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
var hasil = new TotalV(tot);
hasil.TotalVhc();
hasil.TotalVhc2("SUV");
hasil.TotalincomeVhc("SUV");
hasil.TotalincomeVhc("Taxi");
hasil.TotalincomeVhc("PrivateJet");
hasil.TotalAll();
