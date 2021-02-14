import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

export interface Data {
  name: string,
  value: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isCarPool: boolean = false;

  parsedResponse: Data[] = [
    { name: "", value: 0 }
  ];
  makeControl: FormControl = new FormControl();
  modelControl: FormControl = new FormControl();

  makeGroup: string[] = ["Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Dodge","FIAT","Ford","Genesis","GMC","Honda","Hyundai","Infiniti","Jaguar","Jeep","Kia","Lamborghini","Lexus","Lincoln","Maserati","Mazda","Mercedes-Benz","MINI","Mitsubishi","Nissan","Porsche","Ram","Rolls-Royce","Subaru","Toyota","Volkswagen","Volvo"];

  modelGroup: string[] = ["1500", "1500 4X4", "1500 4X4 EcoDiesel", "1500 4X4 eTorque", "1500 4X4 TRX", "1500 Classic", "1500 Classic 4X4", "1500 EcoDiesel", "1500 eTorque", "1500 HFE eTorque", "228i xDrive Gran Coupe", "230i xDrive Cabriolet", "230i xDrive Coupe", "300", "300 AWD", "330i xDrive Sedan", "430i xDrive Coupe", "4Runner 4WD", "4Runner 4WD (Part-Time 4WD)", "500X AWD", "530i xDrive Sedan", "540i xDrive Sedan", "718 Boxster", "718 Boxster GTS 4.0", "718 Boxster S", "718 Boxster T", "718 Cayman", "718 Cayman GT4", "718 Cayman GTS 4.0", "718 Cayman S", "718 Cayman T", "718 Spyder", "750i xDrive Sedan", "750Li xDrive Sedan", "911 Carrera", "911 Carrera 4", "911 Carrera 4 Cabriolet", "911 Carrera 4S", "911 Carrera 4S Cabriolet", "911 Carrera Cabriolet", "911 Carrera S", "911 Carrera S Cabriolet", "911 Targa 4", "911 Targa 4S", "911 Turbo", "911 Turbo Cabriolet", "911 Turbo S", "911 Turbo S Cabriolet", "A 220 4MATIC Sedan", "A 250 4MATIC Hatch", "A4 allroad 45 TFSI quattro", "A4 Sedan 40 TFSI quattro", "A4 Sedan 45 TFSI quattro", "A5 Cabriolet 45 TFSI quattro", "A5 Coupe 45 TFSI quattro", "A5 Sportback 45 TFSI quattro", "A6 allroad 55 TFSI quattro", "A6 Sedan 45 TFSI quattro", "A6 Sedan 55 TFSI quattro", "A7 Sportback 55 TFSI quattro", "A8 L Sedan 55 TFSI quattro", "A8 L Sedan 60 TFSI quattro", "Acadia", "Acadia AWD", "Accord", "Accord Hybrid", "Accord Hybrid Sport/Touring", "Accord Sport/Touring", "Alpina B7 xDrive", "Alpina XB7", "Altima AWD", "Altima AWD SR/Platinum", "AMG A 35 4MATIC Hatch", "AMG A 35 4MATIC Sedan", "AMG C 43 4MATIC Cabriolet", "AMG C 43 4MATIC Coupe", "AMG C 43 4MATIC Sedan", "AMG C 43 4MATIC Wagon", "AMG C 63 S Cabriolet", "AMG C 63 S Coupe", "AMG C 63 Sedan", "AMG C 63 S Sedan", "AMG CLA 35 4MATIC Coupe", "AMG CLA 45 4MATIC Coupe", "AMG CLS 53 4MATIC+ Coupe", "AMG E 53 4MATIC+ Cabriolet", "AMG E 53 4MATIC+ Coupe", "AMG E 53 4MATIC+ Sedan", "AMG E 53 4MATIC+ Wagon", "AMG E 63 S 4MATIC+ Sedan", "AMG E 63 S 4MATIC+ Wagon", "AMG GLA 35 4MATIC SUV", "AMG GLA 45 4MATIC SUV", "AMG GLB 35 SUV", "AMG GLC 43 4MATIC Coupe", "AMG GLC 43 4MATIC SUV", "AMG GLE 53 4MATIC+ Coupe", "AMG GLE 53 4MATIC+ SUV", "AMG GLE 63 S 4MATIC+ Coupe", "AMG GLE 63 S 4MATIC+ SUV", "AMG GLS 63 4MATIC+ SUV", "AMG GT 53 4MATIC+ Coupe", "AMG GT 63 4MATIC+ Coupe", "AMG GT 63 S 4MATIC+ Coupe", "AMG GT C Coupe", "AMG GT C Roadster", "AMG GT R Coupe", "AMG S 63 4MATIC+ Cabriolet", "AMG S 63 4MATIC+ Coupe", "Armada 4WD", "Arteon 4MOTION", "Ascent AWD", "Atlas 4MOTION", "Atlas Cross Sport 4MOTION", "Avalon", "Avalon AWD", "Aventador Coupe S", "Aventador Coupe SVJ", "Aventador Roadster S", "Aventador Roadster SVJ", "Aviator AWD", "Bentayga", "Blazer", "Blazer AWD", "Bronco Sport 4WD", "C 300 4MATIC Cabriolet", "C 300 4MATIC Coupe", "C 300 4MATIC Sedan", "C 300 4MATIC Wagon", "Camaro", "Camaro SS", "Camaro ZL1", "Camry", "Camry AWD LE/SE", "Camry AWD XLE/XSE", "Camry Hybrid LE", "Camry Hybrid SE/XLE/XSE", "Camry LE/SE", "Camry TRD", "Camry XLE/XSE", "Camry XSE", "Canyon", "Canyon 4WD", "Cayenne", "Cayenne Coupe", "Cayenne GTS", "Cayenne GTS Coupe", "Cayenne S", "Cayenne S Coupe", "Cayenne Turbo", "Cayenne Turbo Coupe", "Challenger", "Challenger AWD", "Challenger (MDS)", "Challenger SRT Hellcat", "Challenger SRT Hellcat Widebody", "Challenger Widebody", "Challenger Widebody (MDS)", "Charger", "Charger AWD", "Charger (MDS)", "Charger SRT Hellcat Widebody", "Charger Widebody (MDS)", "Cherokee", "Cherokee 4X4 Active Drive I", "Cherokee 4X4 Active Drive II", "Cherokee 4X4 Active Drive Lock", "Chiron", "Chiron Pur Sport", "C-HR", "Civic Hatchback", "Civic Hatchback Sport", "Civic Sedan", "Civic Type R", "CLA 250 4MATIC Coupe", "CLS 450 4MATIC Coupe", "Colorado", "Colorado 4WD", "Colorado ZR2 4WD", "Compass", "Compass 4X4", "Continental GT", "Continental GT Convertible", "Cooper 3 Door", "Cooper 5 Door", "Cooper Clubman ALL4", "Cooper Convertible", "Cooper Countryman ALL4", "Cooper S 3 Door", "Cooper S 5 Door", "Cooper S Clubman ALL4", "Cooper S Convertible", "Cooper S Countryman ALL4", "Corolla", "Corolla Apex Edition", "Corolla Hatchback", "Corolla Hybrid", "Corolla XLE", "Corolla XSE", "Corsair AWD", "Corvette", "Crosstrek AWD", "CR-V", "CR-V AWD", "CT4", "CT4 AWD", "CT4-V", "CT4-V AWD", "CT5", "CT5 AWD", "CT5-V", "CT5-V AWD", "Cullinan", "Cullinan Black Badge", "CX-3", "CX-30", "CX-30 4WD", "CX-30 Turbo 4WD", "CX-3 4WD", "CX-3 (SIL)", "CX-5", "CX-5 4WD", "CX-5 4WD (Cylinder Deactivation)", "CX-5 (Cylinder Deactivation)", "CX-5 Turbo 4WD", "CX-9 4WD", "Dawn", "Dawn Black Badge", "DB11 AMR", "DB11 V8", "DBS Superleggera", "DBX V8", "Durango AWD", "Durango AWD SRT", "Durango AWD SRT Hellcat", "E 350 4MATIC Sedan", "E 450 4MATIC All-Terrain Wagon", "E 450 4MATIC Cabriolet", "E 450 4MATIC Coupe", "E 450 4MATIC Sedan", "EcoSport", "EcoSport AWD", "Edge", "Edge AWD", "Elantra", "Elantra (ISG)", "Enclave", "Enclave AWD", "Encore", "Encore AWD", "Encore AWD (SIDI)", "Encore GX", "Encore (SIDI)", "Envision", "Envision AWD", "Equinox", "Equinox AWD", "ES 250 AWD", "ES 300h", "ES 350", "ES 350 F SPORT", "Escalade 4WD", "Escape", "Escape AWD", "Escape Hybrid", "Escape Hybrid AWD", "Expedition 4X4", "Expedition MAX 4X4", "Explorer AWD", "Explorer Hybrid AWD", "F-150", "F-150 4X4", "F-150 FFV", "F-150 FFV 4X4", "F-150 Hybrid", "F-150 Hybrid 4X4", "Flying Spur", "Forester AWD", "Forte", "Forte 5", "F-TYPE P300 Convertible", "F-TYPE P300 Coupe", "F-TYPE P380 AWD Convertible", "F-TYPE P380 AWD Coupe", "F-TYPE R AWD Convertible", "F-TYPE R AWD Coupe", "G 550 SUV", "G70", "G70 AWD", "G80 AWD", "G90 AWD", "Ghibli", "Ghibli S", "Ghibli S Q4", "Ghibli Trofeo", "Ghost", "Ghost EWB", "Giulia", "Giulia AWD", "Giulia Quadrifoglio", "GLA 250 4MATIC SUV", "Gladiator 4X4", "Gladiator 4X4 EcoDiesel", "Gladiator 4X4 Rubicon EcoDiesel", "GLB 250 4MATIC SUV", "GLC 300 4MATIC Coupe", "GLC 300 4MATIC SUV", "GLE 350 4MATIC SUV", "GLE 450 4MATIC SUV", "GLS 450 4MATIC SUV", "GLS 580 4MATIC SUV", "Golf", "Golf GTI", "Grand Caravan", "Grand Cherokee 4X4", "Grand Cherokee 4X4 SRT", "Grand Cherokee 4X4 Trackhawk", "GR Supra 2.0", "GR Supra 3.0", "GT", "GT-R", "GV80 AWD", "GX 460", "Highlander", "Highlander AWD", "Highlander Hybrid AWD", "Highlander Hybrid AWD Limited/Platinum", "HR-V", "HR-V AWD", "Huracan", "Huracan AWD", "Huracan Spyder", "Huracan Spyder AWD", "ILX", "Impreza 4-Door AWD", "Impreza 5-Door AWD", "Insight EX", "Insight Touring", "IONIQ", "IONIQ Blue", "IS 300", "IS 300 AWD", "IS 350 AWD", "Jetta", "Jetta GLI", "John Cooper Works 3 Door", "John Cooper Works Clubman ALL4", "John Cooper Works Convertible", "John Cooper Works Countryman ALL4", "John Cooper Works GP", "K5", "K5 AWD", "Kicks", "Kona", "Kona AWD", "LC 500", "LC 500 Convertible", "LC 500h", "Legacy AWD", "Levante", "Levante GTS", "Levante S", "Levante Trofeo", "LS 500 AWD", "LS 500h AWD", "LX 570", "M235i xDrive Gran Coupe", "M240i xDrive Cabriolet", "M240i xDrive Coupe", "M2 Competition", "M340i xDrive Sedan", "M440i xDrive Coupe", "M550i xDrive Sedan", "M5 Competition", "M5 Sedan", "M760i xDrive Sedan", "M850i xDrive Cabriolet", "M850i xDrive Coupe", "M850i xDrive Gran Coupe", "M8 Cabriolet", "M8 Cabriolet Competition", "M8 Coupe", "M8 Coupe Competition", "M8 Gran Coupe", "M8 Gran Coupe Competition", "Macan", "Macan GTS", "Macan S", "Macan Turbo", "Malibu", "Maxima", "Maybach GLS 600 4MATIC SUV", "Mazda3 4-Door", "Mazda3 4-Door 4WD", "Mazda3 4-Door (SIL)", "Mazda3 4-Door Turbo 4WD", "Mazda3 5-Door", "Mazda3 5-Door 4WD", "Mazda3 5-Door (SIL)", "Mazda3 5-Door Turbo 4WD", "Mazda6", "Mazda6 Turbo", "Metris Cargo Van", "Metris Cargo Van LWB", "Metris Passenger Van", "Mirage", "Murano", "Murano AWD", "Mustang", "Mustang Convertible", "Mustang Convertible (High Performance)", "Mustang (High Performance)", "Mustang Mach 1", "MX-5", "MX-5 (SIL)", "Nautilus AWD", "Navigator 4X4", "Niro", "Niro FE", "Niro Touring", "NSX", "NV200 Cargo Van", "NX 300 AWD", "NX 300 AWD F SPORT", "NX 300h AWD", "Odyssey", "Outback AWD", "Pacifica", "Pacifica AWD", "Palisade", "Palisade AWD", "Passat", "Passport AWD", "Phantom", "Phantom EWB", "Pilot AWD", "Prius", "Prius AWD", "ProMaster City", "Q3 40 TFSI quattro", "Q3 45 TFSI quattro", "Q50 AWD", "Q50 AWD Red Sport", "Q5 45 TFSI quattro", "Q5 Sportback 45 TFSI quattro", "Q60 AWD", "Q60 AWD Red Sport", "Q7 45 TFSI quattro", "Q7 55 TFSI quattro", "Q8 55 TFSI quattro", "Qashqai", "Qashqai AWD", "Quattroporte S", "Quattroporte S Q4", "Quattroporte Trofeo", "QX50 AWD", "QX80 4WD", "R8 Coupe", "R8 Coupe quattro", "R8 Spyder", "R8 Spyder quattro", "Ranger 4WD", "Ranger 4WD Tremor", "RAV4", "RAV4 AWD", "RAV4 AWD LE", "RAV4 AWD (Stop/Start)", "RAV4 AWD TRD Off-Road", "RAV4 Hybrid AWD", "RAV4 (Stop/Start)", "RC 300 AWD", "RC 350 AWD", "RC F", "RDX SH-AWD", "RDX SH-AWD A-SPEC", "Renegade", "Renegade 4X4", "Renegade 4X4 Trailhawk", "Ridgeline AWD", "Rio", "Rogue", "Rogue AWD", "RS 5 Coupe quattro", "RS 5 Sportback quattro", "RS 6 Avant quattro", "RS 7 Sportback quattro", "RS Q8 quattro", "RVR", "RVR 4WD", "RX 350 AWD", "RX 350 L AWD", "RX 450h AWD", "RX 450h L AWD", "S4 Sedan quattro", "S 560 4MATIC Coupe", "S 560 Cabriolet", "S5 Cabriolet quattro", "S5 Coupe quattro", "S5 Sportback quattro", "S60 T5", "S60 T5 AWD", "S60 T6 AWD", "S6 Sedan quattro", "S7 Sportback quattro", "S8 Sedan quattro", "S90 T6 AWD", "Santa Fe", "Santa Fe AWD", "Sedona", "Seltos", "Seltos AWD", "Sentra", "Sentra SR", "Sequoia 4WD", "Shelby GT500 Mustang", "Sienna", "Sienna AWD", "Sierra", "Sierra 4WD", "Sierra 4WD AT4", "Sierra 4WD FFV", "Sierra 4WD WT", "Sierra FFV", "Sierra WT", "Silverado", "Silverado 4WD", "Silverado 4WD Custom/WT", "Silverado 4WD FFV", "Silverado 4WD Trail Boss", "Silverado Custom/WT", "Silverado FFV", "Sonata", "Sonata Hybrid", "Sorento AWD", "Soul", "Spark", "Sportage", "Sportage AWD", "SQ5 quattro", "SQ5 Sportback quattro", "SQ7 quattro", "SQ8 quattro", "Stelvio", "Stelvio AWD", "Stelvio AWD Quadrifoglio", "Stinger AWD", "Suburban", "Suburban 4WD", "T-150 Wagon FFV", "T-150 Wagon FFV 4WD", "Tacoma 4WD", "Tacoma 4WD D-Cab TRD Off-Road/PRO", "Tahoe", "Tahoe 4WD", "Telluride AWD", "Terrain", "Terrain AWD", "Tiguan", "Tiguan 4MOTION", "Titan 4WD", "Titan 4WD Pro-4X", "TLX SH-AWD", "TLX SH-AWD A-SPEC", "Trailblazer", "Trailblazer AWD", "Transit Connect Van", "Transit Connect Van FFV", "Transit Connect Wagon LWB", "Transit Connect Wagon LWB FFV", "Traverse", "Traverse AWD", "Trax", "Trax 4WD", "Trax 4WD (SIDI)", "Trax (SIDI)", "TT Coupe 45 TFSI quattro", "TT Roadster 45 TFSI quattro", "TT RS Coupe quattro", "TTS Coupe quattro", "Tucson", "Tucson AWD", "Tundra", "Tundra 4WD", "Urus", "UX 200", "UX 250h", "UX 250h AWD", "V60 CC T5 AWD", "V60 T5", "V60 T6 AWD", "Vantage V8", "Veloster N", "Venue", "Venza AWD", "Versa", "Wraith", "Wraith Black Badge", "Wrangler JL 4X4", "Wrangler JL 4X4 eTorque", "Wrangler JL Unlimited 4X4", "Wrangler JL Unlimited 4X4 EcoDiesel", "Wrangler JL Unlimited 4X4 eTorque", "Wrangler JL Unlimited 4X4 Rubicon EcoDiesel", "WRX AWD", "WRX STI AWD", "X1 xDrive28i", "X2 M35i", "X2 xDrive28i", "X3 M", "X3 M40i", "X3 M Competition", "X3 xDrive30i", "X4 M", "X4 M40i", "X4 M Competition", "X4 xDrive30i", "X5 M", "X5 M50i", "X5 M Competition", "X5 xDrive40i", "X6 M", "X6 M50i", "X6 M Competition", "X6 xDrive40i", "X7 M50i", "X7 xDrive40i", "XC40 T4 AWD", "XC40 T5 AWD", "XC60 T5 AWD", "XC60 T6 AWD", "XC90 T5 AWD", "XC90 T6 AWD", "XT4", "XT4 AWD", "XT5", "XT5 AWD", "XT6 AWD", "Yukon", "Yukon 4WD", "Yukon XL", "Yukon XL 4WD", "Z4 M40i", "Z4 sDrive30i"
  ]

  // filter options when searching
  filteredModelOptions!: Observable<string[]>;
  // filter options when searching
  filteredMakeOptions: Observable<string[]> | undefined;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // filtering the options based on user input
      this.filteredMakeOptions = this.makeControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterMake(value))
      );
      this.filteredModelOptions = this.modelControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterModel(value))
      );
    }

  // actually filters the group name and returns the list of make
  private _filterMake(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.makeGroup.filter(makeGroup => makeGroup.toLowerCase().indexOf(filterValue) === 0);
  }

  // filters model
  private _filterModel(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.modelGroup.filter(modelGroup => modelGroup.toLowerCase().indexOf(filterValue) === 0);
  }

  public async fetchData() {
    let response =
      await fetch("https://co2-calculator-api.herokuapp.com/api/calculate", {
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
      })
    let tempResponse = await response.json();
    this.parsedResponse = JSON.parse(JSON.stringify(tempResponse)).data.determineEmissions;
  }
}