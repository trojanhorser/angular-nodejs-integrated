System.register(['angular2/core', './cargo-filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cargo_filter_pipe_1;
    var CargoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cargo_filter_pipe_1_1) {
                cargo_filter_pipe_1 = cargo_filter_pipe_1_1;
            }],
        execute: function() {
            CargoComponent = (function () {
                function CargoComponent() {
                    this.cargos = [{
                            "index": 0,
                            "quantity": 500,
                            "package": "Lumber",
                            "commodity": "Something",
                            "hsCode": "10021",
                            "weight": [
                                200,
                                300,
                                400,
                                500
                            ],
                            "volume": [
                                500,
                                1000,
                                3000
                            ],
                            "showDetails": false
                        },
                        {
                            "index": 1,
                            "quantity": 500,
                            "package": "New York",
                            "commodity": "NY",
                            "hsCode": "10021",
                            "weight": [
                                200,
                                300,
                                400
                            ],
                            "volume": [
                                500,
                                1000,
                                3000
                            ],
                            "showDetails": false
                        }];
                }
                CargoComponent.prototype.toggleDetails = function (index) {
                    this.cargos[index].showDetails = !this.cargos[index].showDetails;
                };
                CargoComponent = __decorate([
                    core_1.Component({
                        selector: 'cargo',
                        templateUrl: 'app/cargo/cargo.component.html',
                        pipes: [cargo_filter_pipe_1.CargoFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CargoComponent);
                return CargoComponent;
            }());
            exports_1("CargoComponent", CargoComponent);
        }
    }
});

//# sourceMappingURL=cargo.component.js.map
