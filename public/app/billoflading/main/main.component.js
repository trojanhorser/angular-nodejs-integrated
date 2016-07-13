System.register(['angular2/core', '../../voyage/voyage.component', '../details/detail.component', '../../cargo/cargo.component'], function(exports_1, context_1) {
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
    var core_1, voyage_component_1, detail_component_1, cargo_component_1;
    var BillOfLadingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voyage_component_1_1) {
                voyage_component_1 = voyage_component_1_1;
            },
            function (detail_component_1_1) {
                detail_component_1 = detail_component_1_1;
            },
            function (cargo_component_1_1) {
                cargo_component_1 = cargo_component_1_1;
            }],
        execute: function() {
            BillOfLadingComponent = (function () {
                function BillOfLadingComponent() {
                    this.showVoyagesTab = true;
                    this.showBillOfLadingDetailsTab = false;
                    this.showCargoDetailsTab = false;
                }
                BillOfLadingComponent.prototype.tabClicked = function (tab) {
                    if (tab === "voyage") {
                        this.showVoyagesTab = true;
                        this.showBillOfLadingDetailsTab = false;
                        this.showCargoDetailsTab = false;
                    }
                    if (tab === "billoflading") {
                        this.showVoyagesTab = false;
                        this.showBillOfLadingDetailsTab = true;
                        this.showCargoDetailsTab = false;
                    }
                    if (tab === "cargo") {
                        this.showVoyagesTab = false;
                        this.showBillOfLadingDetailsTab = false;
                        this.showCargoDetailsTab = true;
                    }
                };
                BillOfLadingComponent = __decorate([
                    core_1.Component({
                        selector: 'bill-of-lading',
                        templateUrl: 'app/billoflading/main/main.component.html',
                        directives: [voyage_component_1.VoyageComponent, detail_component_1.BillOfLadingDetailComponent, cargo_component_1.CargoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BillOfLadingComponent);
                return BillOfLadingComponent;
            }());
            exports_1("BillOfLadingComponent", BillOfLadingComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map