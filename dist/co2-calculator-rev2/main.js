(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Arnesh\Scripts\co2-calculator\co2-calculator-rev2\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graph/graph.component */ "k/13");













function AppComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const make_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", make_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", make_r4, " ");
} }
function AppComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", model_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", model_r5, " ");
} }
class AppComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isCarPool = false;
        this.parsedResponse = [
            { name: "", value: 0 }
        ];
        this.makeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.modelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.makeGroup = ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "FIAT", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", "Lexus", "Lincoln", "Maserati", "Mazda", "Mercedes-Benz", "MINI", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rolls-Royce", "Subaru", "Toyota", "Volkswagen", "Volvo"];
        this.modelGroup = ["1500", "1500 4X4", "1500 4X4 EcoDiesel", "1500 4X4 eTorque", "1500 4X4 TRX", "1500 Classic", "1500 Classic 4X4", "1500 EcoDiesel", "1500 eTorque", "1500 HFE eTorque", "228i xDrive Gran Coupe", "230i xDrive Cabriolet", "230i xDrive Coupe", "300", "300 AWD", "330i xDrive Sedan", "430i xDrive Coupe", "4Runner 4WD", "4Runner 4WD (Part-Time 4WD)", "500X AWD", "530i xDrive Sedan", "540i xDrive Sedan", "718 Boxster", "718 Boxster GTS 4.0", "718 Boxster S", "718 Boxster T", "718 Cayman", "718 Cayman GT4", "718 Cayman GTS 4.0", "718 Cayman S", "718 Cayman T", "718 Spyder", "750i xDrive Sedan", "750Li xDrive Sedan", "911 Carrera", "911 Carrera 4", "911 Carrera 4 Cabriolet", "911 Carrera 4S", "911 Carrera 4S Cabriolet", "911 Carrera Cabriolet", "911 Carrera S", "911 Carrera S Cabriolet", "911 Targa 4", "911 Targa 4S", "911 Turbo", "911 Turbo Cabriolet", "911 Turbo S", "911 Turbo S Cabriolet", "A 220 4MATIC Sedan", "A 250 4MATIC Hatch", "A4 allroad 45 TFSI quattro", "A4 Sedan 40 TFSI quattro", "A4 Sedan 45 TFSI quattro", "A5 Cabriolet 45 TFSI quattro", "A5 Coupe 45 TFSI quattro", "A5 Sportback 45 TFSI quattro", "A6 allroad 55 TFSI quattro", "A6 Sedan 45 TFSI quattro", "A6 Sedan 55 TFSI quattro", "A7 Sportback 55 TFSI quattro", "A8 L Sedan 55 TFSI quattro", "A8 L Sedan 60 TFSI quattro", "Acadia", "Acadia AWD", "Accord", "Accord Hybrid", "Accord Hybrid Sport/Touring", "Accord Sport/Touring", "Alpina B7 xDrive", "Alpina XB7", "Altima AWD", "Altima AWD SR/Platinum", "AMG A 35 4MATIC Hatch", "AMG A 35 4MATIC Sedan", "AMG C 43 4MATIC Cabriolet", "AMG C 43 4MATIC Coupe", "AMG C 43 4MATIC Sedan", "AMG C 43 4MATIC Wagon", "AMG C 63 S Cabriolet", "AMG C 63 S Coupe", "AMG C 63 Sedan", "AMG C 63 S Sedan", "AMG CLA 35 4MATIC Coupe", "AMG CLA 45 4MATIC Coupe", "AMG CLS 53 4MATIC+ Coupe", "AMG E 53 4MATIC+ Cabriolet", "AMG E 53 4MATIC+ Coupe", "AMG E 53 4MATIC+ Sedan", "AMG E 53 4MATIC+ Wagon", "AMG E 63 S 4MATIC+ Sedan", "AMG E 63 S 4MATIC+ Wagon", "AMG GLA 35 4MATIC SUV", "AMG GLA 45 4MATIC SUV", "AMG GLB 35 SUV", "AMG GLC 43 4MATIC Coupe", "AMG GLC 43 4MATIC SUV", "AMG GLE 53 4MATIC+ Coupe", "AMG GLE 53 4MATIC+ SUV", "AMG GLE 63 S 4MATIC+ Coupe", "AMG GLE 63 S 4MATIC+ SUV", "AMG GLS 63 4MATIC+ SUV", "AMG GT 53 4MATIC+ Coupe", "AMG GT 63 4MATIC+ Coupe", "AMG GT 63 S 4MATIC+ Coupe", "AMG GT C Coupe", "AMG GT C Roadster", "AMG GT R Coupe", "AMG S 63 4MATIC+ Cabriolet", "AMG S 63 4MATIC+ Coupe", "Armada 4WD", "Arteon 4MOTION", "Ascent AWD", "Atlas 4MOTION", "Atlas Cross Sport 4MOTION", "Avalon", "Avalon AWD", "Aventador Coupe S", "Aventador Coupe SVJ", "Aventador Roadster S", "Aventador Roadster SVJ", "Aviator AWD", "Bentayga", "Blazer", "Blazer AWD", "Bronco Sport 4WD", "C 300 4MATIC Cabriolet", "C 300 4MATIC Coupe", "C 300 4MATIC Sedan", "C 300 4MATIC Wagon", "Camaro", "Camaro SS", "Camaro ZL1", "Camry", "Camry AWD LE/SE", "Camry AWD XLE/XSE", "Camry Hybrid LE", "Camry Hybrid SE/XLE/XSE", "Camry LE/SE", "Camry TRD", "Camry XLE/XSE", "Camry XSE", "Canyon", "Canyon 4WD", "Cayenne", "Cayenne Coupe", "Cayenne GTS", "Cayenne GTS Coupe", "Cayenne S", "Cayenne S Coupe", "Cayenne Turbo", "Cayenne Turbo Coupe", "Challenger", "Challenger AWD", "Challenger (MDS)", "Challenger SRT Hellcat", "Challenger SRT Hellcat Widebody", "Challenger Widebody", "Challenger Widebody (MDS)", "Charger", "Charger AWD", "Charger (MDS)", "Charger SRT Hellcat Widebody", "Charger Widebody (MDS)", "Cherokee", "Cherokee 4X4 Active Drive I", "Cherokee 4X4 Active Drive II", "Cherokee 4X4 Active Drive Lock", "Chiron", "Chiron Pur Sport", "C-HR", "Civic Hatchback", "Civic Hatchback Sport", "Civic Sedan", "Civic Type R", "CLA 250 4MATIC Coupe", "CLS 450 4MATIC Coupe", "Colorado", "Colorado 4WD", "Colorado ZR2 4WD", "Compass", "Compass 4X4", "Continental GT", "Continental GT Convertible", "Cooper 3 Door", "Cooper 5 Door", "Cooper Clubman ALL4", "Cooper Convertible", "Cooper Countryman ALL4", "Cooper S 3 Door", "Cooper S 5 Door", "Cooper S Clubman ALL4", "Cooper S Convertible", "Cooper S Countryman ALL4", "Corolla", "Corolla Apex Edition", "Corolla Hatchback", "Corolla Hybrid", "Corolla XLE", "Corolla XSE", "Corsair AWD", "Corvette", "Crosstrek AWD", "CR-V", "CR-V AWD", "CT4", "CT4 AWD", "CT4-V", "CT4-V AWD", "CT5", "CT5 AWD", "CT5-V", "CT5-V AWD", "Cullinan", "Cullinan Black Badge", "CX-3", "CX-30", "CX-30 4WD", "CX-30 Turbo 4WD", "CX-3 4WD", "CX-3 (SIL)", "CX-5", "CX-5 4WD", "CX-5 4WD (Cylinder Deactivation)", "CX-5 (Cylinder Deactivation)", "CX-5 Turbo 4WD", "CX-9 4WD", "Dawn", "Dawn Black Badge", "DB11 AMR", "DB11 V8", "DBS Superleggera", "DBX V8", "Durango AWD", "Durango AWD SRT", "Durango AWD SRT Hellcat", "E 350 4MATIC Sedan", "E 450 4MATIC All-Terrain Wagon", "E 450 4MATIC Cabriolet", "E 450 4MATIC Coupe", "E 450 4MATIC Sedan", "EcoSport", "EcoSport AWD", "Edge", "Edge AWD", "Elantra", "Elantra (ISG)", "Enclave", "Enclave AWD", "Encore", "Encore AWD", "Encore AWD (SIDI)", "Encore GX", "Encore (SIDI)", "Envision", "Envision AWD", "Equinox", "Equinox AWD", "ES 250 AWD", "ES 300h", "ES 350", "ES 350 F SPORT", "Escalade 4WD", "Escape", "Escape AWD", "Escape Hybrid", "Escape Hybrid AWD", "Expedition 4X4", "Expedition MAX 4X4", "Explorer AWD", "Explorer Hybrid AWD", "F-150", "F-150 4X4", "F-150 FFV", "F-150 FFV 4X4", "F-150 Hybrid", "F-150 Hybrid 4X4", "Flying Spur", "Forester AWD", "Forte", "Forte 5", "F-TYPE P300 Convertible", "F-TYPE P300 Coupe", "F-TYPE P380 AWD Convertible", "F-TYPE P380 AWD Coupe", "F-TYPE R AWD Convertible", "F-TYPE R AWD Coupe", "G 550 SUV", "G70", "G70 AWD", "G80 AWD", "G90 AWD", "Ghibli", "Ghibli S", "Ghibli S Q4", "Ghibli Trofeo", "Ghost", "Ghost EWB", "Giulia", "Giulia AWD", "Giulia Quadrifoglio", "GLA 250 4MATIC SUV", "Gladiator 4X4", "Gladiator 4X4 EcoDiesel", "Gladiator 4X4 Rubicon EcoDiesel", "GLB 250 4MATIC SUV", "GLC 300 4MATIC Coupe", "GLC 300 4MATIC SUV", "GLE 350 4MATIC SUV", "GLE 450 4MATIC SUV", "GLS 450 4MATIC SUV", "GLS 580 4MATIC SUV", "Golf", "Golf GTI", "Grand Caravan", "Grand Cherokee 4X4", "Grand Cherokee 4X4 SRT", "Grand Cherokee 4X4 Trackhawk", "GR Supra 2.0", "GR Supra 3.0", "GT", "GT-R", "GV80 AWD", "GX 460", "Highlander", "Highlander AWD", "Highlander Hybrid AWD", "Highlander Hybrid AWD Limited/Platinum", "HR-V", "HR-V AWD", "Huracan", "Huracan AWD", "Huracan Spyder", "Huracan Spyder AWD", "ILX", "Impreza 4-Door AWD", "Impreza 5-Door AWD", "Insight EX", "Insight Touring", "IONIQ", "IONIQ Blue", "IS 300", "IS 300 AWD", "IS 350 AWD", "Jetta", "Jetta GLI", "John Cooper Works 3 Door", "John Cooper Works Clubman ALL4", "John Cooper Works Convertible", "John Cooper Works Countryman ALL4", "John Cooper Works GP", "K5", "K5 AWD", "Kicks", "Kona", "Kona AWD", "LC 500", "LC 500 Convertible", "LC 500h", "Legacy AWD", "Levante", "Levante GTS", "Levante S", "Levante Trofeo", "LS 500 AWD", "LS 500h AWD", "LX 570", "M235i xDrive Gran Coupe", "M240i xDrive Cabriolet", "M240i xDrive Coupe", "M2 Competition", "M340i xDrive Sedan", "M440i xDrive Coupe", "M550i xDrive Sedan", "M5 Competition", "M5 Sedan", "M760i xDrive Sedan", "M850i xDrive Cabriolet", "M850i xDrive Coupe", "M850i xDrive Gran Coupe", "M8 Cabriolet", "M8 Cabriolet Competition", "M8 Coupe", "M8 Coupe Competition", "M8 Gran Coupe", "M8 Gran Coupe Competition", "Macan", "Macan GTS", "Macan S", "Macan Turbo", "Malibu", "Maxima", "Maybach GLS 600 4MATIC SUV", "Mazda3 4-Door", "Mazda3 4-Door 4WD", "Mazda3 4-Door (SIL)", "Mazda3 4-Door Turbo 4WD", "Mazda3 5-Door", "Mazda3 5-Door 4WD", "Mazda3 5-Door (SIL)", "Mazda3 5-Door Turbo 4WD", "Mazda6", "Mazda6 Turbo", "Metris Cargo Van", "Metris Cargo Van LWB", "Metris Passenger Van", "Mirage", "Murano", "Murano AWD", "Mustang", "Mustang Convertible", "Mustang Convertible (High Performance)", "Mustang (High Performance)", "Mustang Mach 1", "MX-5", "MX-5 (SIL)", "Nautilus AWD", "Navigator 4X4", "Niro", "Niro FE", "Niro Touring", "NSX", "NV200 Cargo Van", "NX 300 AWD", "NX 300 AWD F SPORT", "NX 300h AWD", "Odyssey", "Outback AWD", "Pacifica", "Pacifica AWD", "Palisade", "Palisade AWD", "Passat", "Passport AWD", "Phantom", "Phantom EWB", "Pilot AWD", "Prius", "Prius AWD", "ProMaster City", "Q3 40 TFSI quattro", "Q3 45 TFSI quattro", "Q50 AWD", "Q50 AWD Red Sport", "Q5 45 TFSI quattro", "Q5 Sportback 45 TFSI quattro", "Q60 AWD", "Q60 AWD Red Sport", "Q7 45 TFSI quattro", "Q7 55 TFSI quattro", "Q8 55 TFSI quattro", "Qashqai", "Qashqai AWD", "Quattroporte S", "Quattroporte S Q4", "Quattroporte Trofeo", "QX50 AWD", "QX80 4WD", "R8 Coupe", "R8 Coupe quattro", "R8 Spyder", "R8 Spyder quattro", "Ranger 4WD", "Ranger 4WD Tremor", "RAV4", "RAV4 AWD", "RAV4 AWD LE", "RAV4 AWD (Stop/Start)", "RAV4 AWD TRD Off-Road", "RAV4 Hybrid AWD", "RAV4 (Stop/Start)", "RC 300 AWD", "RC 350 AWD", "RC F", "RDX SH-AWD", "RDX SH-AWD A-SPEC", "Renegade", "Renegade 4X4", "Renegade 4X4 Trailhawk", "Ridgeline AWD", "Rio", "Rogue", "Rogue AWD", "RS 5 Coupe quattro", "RS 5 Sportback quattro", "RS 6 Avant quattro", "RS 7 Sportback quattro", "RS Q8 quattro", "RVR", "RVR 4WD", "RX 350 AWD", "RX 350 L AWD", "RX 450h AWD", "RX 450h L AWD", "S4 Sedan quattro", "S 560 4MATIC Coupe", "S 560 Cabriolet", "S5 Cabriolet quattro", "S5 Coupe quattro", "S5 Sportback quattro", "S60 T5", "S60 T5 AWD", "S60 T6 AWD", "S6 Sedan quattro", "S7 Sportback quattro", "S8 Sedan quattro", "S90 T6 AWD", "Santa Fe", "Santa Fe AWD", "Sedona", "Seltos", "Seltos AWD", "Sentra", "Sentra SR", "Sequoia 4WD", "Shelby GT500 Mustang", "Sienna", "Sienna AWD", "Sierra", "Sierra 4WD", "Sierra 4WD AT4", "Sierra 4WD FFV", "Sierra 4WD WT", "Sierra FFV", "Sierra WT", "Silverado", "Silverado 4WD", "Silverado 4WD Custom/WT", "Silverado 4WD FFV", "Silverado 4WD Trail Boss", "Silverado Custom/WT", "Silverado FFV", "Sonata", "Sonata Hybrid", "Sorento AWD", "Soul", "Spark", "Sportage", "Sportage AWD", "SQ5 quattro", "SQ5 Sportback quattro", "SQ7 quattro", "SQ8 quattro", "Stelvio", "Stelvio AWD", "Stelvio AWD Quadrifoglio", "Stinger AWD", "Suburban", "Suburban 4WD", "T-150 Wagon FFV", "T-150 Wagon FFV 4WD", "Tacoma 4WD", "Tacoma 4WD D-Cab TRD Off-Road/PRO", "Tahoe", "Tahoe 4WD", "Telluride AWD", "Terrain", "Terrain AWD", "Tiguan", "Tiguan 4MOTION", "Titan 4WD", "Titan 4WD Pro-4X", "TLX SH-AWD", "TLX SH-AWD A-SPEC", "Trailblazer", "Trailblazer AWD", "Transit Connect Van", "Transit Connect Van FFV", "Transit Connect Wagon LWB", "Transit Connect Wagon LWB FFV", "Traverse", "Traverse AWD", "Trax", "Trax 4WD", "Trax 4WD (SIDI)", "Trax (SIDI)", "TT Coupe 45 TFSI quattro", "TT Roadster 45 TFSI quattro", "TT RS Coupe quattro", "TTS Coupe quattro", "Tucson", "Tucson AWD", "Tundra", "Tundra 4WD", "Urus", "UX 200", "UX 250h", "UX 250h AWD", "V60 CC T5 AWD", "V60 T5", "V60 T6 AWD", "Vantage V8", "Veloster N", "Venue", "Venza AWD", "Versa", "Wraith", "Wraith Black Badge", "Wrangler JL 4X4", "Wrangler JL 4X4 eTorque", "Wrangler JL Unlimited 4X4", "Wrangler JL Unlimited 4X4 EcoDiesel", "Wrangler JL Unlimited 4X4 eTorque", "Wrangler JL Unlimited 4X4 Rubicon EcoDiesel", "WRX AWD", "WRX STI AWD", "X1 xDrive28i", "X2 M35i", "X2 xDrive28i", "X3 M", "X3 M40i", "X3 M Competition", "X3 xDrive30i", "X4 M", "X4 M40i", "X4 M Competition", "X4 xDrive30i", "X5 M", "X5 M50i", "X5 M Competition", "X5 xDrive40i", "X6 M", "X6 M50i", "X6 M Competition", "X6 xDrive40i", "X7 M50i", "X7 xDrive40i", "XC40 T4 AWD", "XC40 T5 AWD", "XC60 T5 AWD", "XC60 T6 AWD", "XC90 T5 AWD", "XC90 T6 AWD", "XT4", "XT4 AWD", "XT5", "XT5 AWD", "XT6 AWD", "Yukon", "Yukon 4WD", "Yukon XL", "Yukon XL 4WD", "Z4 M40i", "Z4 sDrive30i"
        ];
    }
    ngOnInit() {
        // filtering the options based on user input
        this.filteredMakeOptions = this.makeControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filterMake(value)));
        this.filteredModelOptions = this.modelControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => this._filterModel(value)));
    }
    // actually filters the group name and returns the list of make
    _filterMake(value) {
        const filterValue = value.toLowerCase();
        return this.makeGroup.filter(makeGroup => makeGroup.toLowerCase().indexOf(filterValue) === 0);
    }
    // filters model
    _filterModel(value) {
        const filterValue = value.toLowerCase();
        return this.modelGroup.filter(modelGroup => modelGroup.toLowerCase().indexOf(filterValue) === 0);
    }
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response = yield fetch("https://co2-calculator-api.herokuapp.com/api/calculate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    // address1: "3700 Midland Ave Unit 110, Scarborough, ON M1V 4V3",
                    // address2: "5071 Highway #7, Unit 1, Markham, ON L3R 1N3",
                    // carMake: this.makeValue,
                    // carModel: this.modelValue,
                    // carPool: 'false'
                    address1: "3700 Midland Ave Unit 110, Scarborough, ON M1V 4V3",
                    address2: "5071 Highway #7, Unit 1, Markham, ON L3R 1N3",
                    carMake: this.makeControl.value,
                    carModel: this.modelControl.value,
                    carPool: this.isCarPool
                }),
                mode: "cors"
            });
            let tempResponse = yield response.json();
            this.parsedResponse = JSON.parse(JSON.stringify(tempResponse)).data.determineEmissions;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 44, vars: 11, consts: [[1, "main"], [1, "input"], [1, "input-section", "space-between"], ["appearance", "fill", 1, "spaceBetween"], ["type", "text", "placeholder", "Toyota", "aria-label", "Make", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "aria-label", "Model", "placeholder", "Corolla", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto2", "matAutocomplete"], ["appearance", "fill", 1, "space-between"], ["matInput", ""], ["value", "Yes"], ["value", "No"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "outputData"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_mat_option_9_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-autocomplete", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppComponent_mat_option_18_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Are you carpooling?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_40_listener() { return ctx.fetchData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "app-graph", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.makeControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, ctx.filteredMakeOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.modelControl)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 9, ctx.filteredModelOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outputData", ctx.parsedResponse);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_11__["GraphComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.centreText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.autoMargin[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.input[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.even-split[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  padding: 20px;\n}\n\n.graph[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNBLGtCQUFBO0FBQ0E7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDQSxhQUFBO0FBRUE7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4uY2VudHJlVGV4dCB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXV0b01hcmdpbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmlucHV0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ldmVuLXNwbGl0IHtcclxuICB3aWR0aDogNTAlOyAgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5ncmFwaCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graph/graph.component */ "k/13");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");











// ngx Charts




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _graph_graph_component__WEBPACK_IMPORTED_MODULE_12__["GraphComponent"]], imports: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]] }); })();


/***/ }),

/***/ "k/13":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");


const _c0 = function () { return [500, 500]; };
class GraphComponent {
    constructor() {
        // Get APIs output here
        this.outputData = [];
    }
    ngOnInit() {
    }
}
GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(); };
GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["app-graph"]], inputs: { outputData: "outputData" }, decls: 4, vars: 13, consts: [[1, "graph"], [1, "centreText"], [3, "view", "results", "xAxisLabel", "yAxisLabel", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "gradient", "roundEdges", "showDataLabel"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-charts-bar-vertical", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("results", ctx.outputData)("xAxisLabel", "Vehicles")("yAxisLabel", "Emissions CO2 (g/km)")("legend", false)("showXAxisLabel", true)("showYAxisLabel", true)("xAxis", true)("yAxis", true)("gradient", true)("roundEdges", true)("showDataLabel", true);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["BarVerticalComponent"]], styles: [".centreText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.graph[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFSTtFQUNJLHFCQUFBO0FBQ1IiLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJlVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXBoIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map