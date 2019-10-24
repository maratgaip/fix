import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

const data2019 = {
  "Acura": ["ILX", "MDX", "NSX", "RDX", "RLX", "TLX"],
  "Alfa Romeo": ["4C", "Giulia", "Stelvio"],
  "Audi": ["A3", "A3 Quattro", "A4", "A4 Quattro", "A4 allroad", "A5 Quattro", "A5 Sportback", "A6 Quattro", "A7 Quattro", "A7 Sportback", "A8 Quattro", "Q2", "Q2 Quattro", "Q3", "Q5", "Q7", "Q8", "RS3", "RS5", "RS5 Sportback", "S3", "S4", "S5", "S5 Sportback", "SQ5", "TT Quattro", "e-tron Quattro"],
  "BMW": ["118i", "120i", "220i", "230i", "230i xDrive", "330i", "330i GT xDrive", "330i xDrive", "340i GT xDrive", "420i", "420i Gran Coupe", "430i", "430i Gran Coupe", "430i xDrive", "430i xDrive Gran Coupe", "440i", "440i Gran Coupe", "440i xDrive", "440i xDrive Gran Coupe", "520i", "530e", "530e xDrive", "530i", "530i xDrive", "540i", "540i xDrive", "640i Gran Coupe", "640i xDrive Gran Coupe", "640i xDrive Gran Turismo", "650i Gran Coupe", "650i xDrive Gran Coupe", "740e xDrive", "740i", "740i xDrive", "750Li", "750Li xDrive", "750i", "750i xDrive", "Alpina B6 xDrive Gran Coupe", "Alpina B7", "M140i", "M2", "M240i", "M240i xDrive", "M340i", "M340i xDrive", "M4", "M5", "M550i xDrive", "M6 Gran Coupe", "M760Li xDrive", "M760i xDrive", "M850i xDrive", "SDRIVE 30I", "SDRIVE30I", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "i3", "i3s", "i8"],
  "Bentley": ["Bentayga", "Continental", "Flying Spur", "Mulsanne"],
  "Buick": ["Cascada", "Enclave", "Encore", "Envision", "LaCrosse", "Regal Sportback", "Regal TourX"],
  "Cadillac": ["ATS", "CT6", "CTS", "Escalade", "Escalade ESV", "XT4", "XT5", "XTS"],
  "Chevrolet": ["Aveo", "Beat", "Blazer", "Bolt EV", "Camaro", "Cavalier", "Colorado", "Corvette", "Cruze", "Equinox", "Express 2500", "Express 3500", "Express Cargo", "Express Pasajeros", "G4500", "HIGH COUNTRY", "Impala", "LCF 4500HD", "LCF 4500XD", "LCF 5500HD", "LCF 5500XD", "LCF 6500XD", "Malibu", "Silverado 1500", "Silverado 1500 LD", "Silverado 2500 HD", "Silverado 3500 HD", "Sonic", "Spark", "Suburban", "Suburban 3500 HD", "Tahoe", "Tornado", "Traverse", "Trax", "Volt"],
  "Chrysler": ["300", "Pacifica"],
  "Dodge": ["Attitude", "Challenger", "Charger", "Durango", "Grand Caravan", "Journey"],
  "Ferrari": ["488 GTB", "488 Pista", "812 Superfast", "GTC4Lusso", "GTC4Lusso T", "Portofino"],
  "Fiat": ["124 Spider", "500", "500L", "500X"],
  "Ford": ["E-350 Super Duty", "E-450 Super Duty", "EcoSport", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250 Super Duty", "F-350 Super Duty", "F-450 Super Duty", "F-550 Super Duty", "F53", "F550", "F59", "F650", "F750", "Fiesta", "Figo", "Flex", "Fusion", "GT", "Lobo", "Mustang", "Police Interceptor Sedan", "Police Interceptor Utility", "Ranger", "Taurus", "Transit", "Transit Connect", "Transit Custom", "Transit-150", "Transit-250", "Transit-350", "Transit-350 HD"],
  "Freightliner": ["108SD", "114SD", "B2", "B2 BUS CHASSIS", "CASCADIA 113", "CASCADIA 116", "CASCADIA 125", "CASCADIA 126", "COLUMBIA 120", "CORONADO 122", "CORONADO 132", "Cascadia", "Columbia", "Coronado", "M2 106", "M2 112", "MB Line", "MODULAR RAIL", "MT45", "MT55", "RAISED RAIL", "S2 106 RV", "S2C", "S2C BUS CHASSIS", "S2RV", "SPORT CHAS 112", "STRAIGHT RAIL", "Sprinter 2500", "Sprinter 3500", "XB Straight Rail", "XC Modular Rail", "XC Raised Rail", "XC Straight Rail"],
  "GMC": ["Acadia", "Canyon", "G4500", "Savana 2500", "Savana 3500", "Sierra 1500", "Sierra 1500 Limited", "Sierra 2500 HD", "Sierra 3500 HD", "Terrain", "Yukon", "Yukon XL"],
  "Hyundai": ["Accent", "Creta", "Elantra", "Elantra GT", "Grand i10", "Ioniq", "Kona", "Kona Electric", "Nexo", "Santa Fe", "Santa Fe XL", "Sonata", "Starex", "Tucson", "Veloster", "Veloster N"],
  "Infiniti": ["Q50", "Q60", "Q70", "Q70L", "QX30", "QX50", "QX60", "QX70", "QX80"],
  "Isuzu": ["FTR", "NPR HD", "NPR XD", "NPR-HD", "NPR-XD", "NQR", "NRR"],
  "Jaguar": ["E-Pace", "F-Pace", "F-Type", "I-Pace", "XE", "XF", "XJ", "XJR575"],
  "Jeep": ["Cherokee", "Compass", "Grand Cherokee", "Renegade", "Wrangler"],
  "Kia": ["Cadenza", "Forte", "K900", "Niro", "Niro EV", "Optima", "Rio", "Sedona", "Sorento", "Soul", "Soul EV", "Sportage", "Stinger"],
  "Lamborghini": ["Aventador", "Huracan", "Urus"],
  "Land Rover": ["Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
  "Lexus": ["ES300h", "ES350", "GS F", "GS300", "GS350", "GX460", "IS300", "IS350", "LC500", "LC500h", "LS500", "LS500h", "LX570", "NX300", "NX300h", "RC F", "RC300", "RC350", "RX350", "RX350L", "RX450h", "RX450hL", "UX200", "UX250h"],
  "Lincoln": ["Continental", "MKC", "MKT", "MKZ", "Nautilus", "Navigator"],
  "Lotus": ["Evora"],
  "Maserati": ["Ghibli", "GranTurismo", "Levante", "Quattroporte"],
  "Mazda": ["2", "6", "CX-3", "CX-5", "CX-9", "MX-5", "MX-5 Mia"],
  "Mclaren": ["570GT", "570S", "600LT", "720S"],
  "Mercedes-Benz": ["A200", "A220", "A250", "AMG GT", "AMG GT 63", "AMG GT 63 S", "AMG GT C", "AMG GT R", "AMG GT S", "B250", "C180", "C200", "C300", "C43 AMG", "C63 AMG", "C63 AMG S", "CLA200", "CLA250", "CLA45 AMG", "CLS450", "CLS53 AMG", "E200", "E250", "E300", "E43 AMG", "E450", "E53 AMG", "E63 AMG S", "G500", "G550", "G63 AMG", "GLA200", "GLA250", "GLA45 AMG", "GLC300", "GLC350e", "GLC43 AMG", "GLC63 AMG", "GLC63 AMG S", "GLE350", "GLE400", "GLE43 AMG", "GLE500", "GLE500e", "GLE63 AMG", "GLE63 AMG S", "GLS450", "GLS500", "GLS550", "GLS63 AMG", "Maybach S560", "Maybach S650", "Metris", "S450", "S450L", "S560", "S560L", "S560e", "S600L", "S63 AMG", "S65 AMG", "SL450", "SL500", "SL550", "SL63 AMG", "SL65 AMG", "SLC180", "SLC300", "SLC43 AMG", "Sprinter", "Sprinter 2500", "Sprinter 3500", "V220d", "V250"],
  "MINI": ["Cooper", "Cooper Clubman", "Cooper Countryman"],
  "Mitsubishi": ["Eclipse Cross", "Mirage", "Mirage G4", "Outlander", "Outlander PHEV", "Outlander Sport", "RVR"],
  "Nissan": ["370Z", "Altima", "Armada", "Frontier", "GT-R", "Kicks", "Leaf", "Maxima", "Micra", "Murano", "NP300", "NP300 Frontier", "NV1500", "NV200", "NV2500", "NV350 Urvan", "NV3500", "Note", "Pathfinder", "Qashqai", "Rogue", "Rogue Sport", "Sentra", "Titan", "Titan XD", "Versa", "Versa Note", "X-Trail"],
  "Peugeot": ["2008", "208", "3008", "301", "308", "5008", "Expert", "Manager", "Partner", "Traveller"],
  "Porsche": ["718 Boxster", "718 Cayman", "911", "Cayenne", "Macan", "Panamera"],
  "Ram": ["1500", "1500 Classic", "2500", "3500", "700", "ProMaster 1500", "ProMaster 2500", "ProMaster 3500", "ProMaster City"],
  "Renault": ["Captur", "Duster", "Koleos", "Logan", "Oroch", "Sandero", "Stepway"],
  "Rolls-Royce": ["Cullinan", "Dawn", "Ghost", "Phantom", "Wraith"],
  "Seat": ["Arona", "Ateca", "Ibiza", "Leon", "Toledo"],
  "Smart": ["Fortwo"],
  "Subaru": ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX", "WRX STI"],
  "Tesla": ["3", "S", "X"],
  "Toyota": ["4Runner", "86", "Avalon", "Avanza", "C-HR", "Camry", "Corolla", "Hiace", "Highlander", "Hilux", "Land Cruiser", "Mirai", "Prius", "Prius AWD-e", "Prius C", "Prius Prime"],
  "Volkswagen": ["Arteon", "Atlas", "Beetle", "Caddy", "Crafter", "GTI", "Golf", "Golf Alltrack", "Golf R", "Golf SportWagen", "Jetta", "Passat", "Polo", "Saveiro", "Teramont", "Tiguan", "Transporter", "Vento", "e-Golf"],
  "Volvo": ["9700", "S60", "S90", "V60", "V90", "V90 Cross Country", "VAH", "VHD", "VNL", "VNR", "XC40", "XC40 MOMENTUM/R-DESIGN", "XC60", "XC90"]
};

// import carJson from '../../carJson';
const jsonData = {
  "1909":{"Ford":["Model T"]},"1926":{"Chrysler":["Imperial"]},"1948":{"Citroën":["2CV"]},"1950":{"Hillman":["Minx Magnificent"]},"1953":{"Chevrolet":["Corvette"]},"1954":{"Chevrolet":["Corvette"],"Cadillac":["Fleetwood"]},"1955":{"Chevrolet":["Corvette"],"Ford":["Thunderbird"]},"1956":{"Chevrolet":["Corvette"]},"1957":{"Chevrolet":["Corvette"],"BMW":["600"]},"1958":{"Chevrolet":["Corvette"],"BMW":["600"],"Ford":["Thunderbird"]},"1959":{"Austin":["Mini"],"Chevrolet":["Corvette"],"BMW":["600"]},"1960":{"Chevrolet":["Corvair","Corvette"],"Fillmore":["Fillmore"],"Fairthorpe":["Rockette"]},"1961":{"Austin":["Mini Cooper"],"Studebaker":["Avanti"],"Pontiac":["Tempest"],"Chevrolet":["Corvette"]},"1962":{"Pontiac":["Grand Prix"],"Chevrolet":["Corvette"],"Studebaker":["Avanti"],"Buick":["Special"]},"1963":{"Austin":["Mini","Mini Cooper S"],"Rambler":["Classic"],"Ford":["E-Series"],"Studebaker":["Avanti"],"Pontiac":["Grand Prix"],"Chevrolet":["Corvair 500","Corvette"]},"1964":{"Chevrolet":["Corvette"],"Ford":["Mustang","Galaxie"],"Pontiac":["GTO","LeMans","Bonneville","Grand Prix"],"Plymouth":["Fury"],"Studebaker":["Avanti"],"Austin":["Mini Cooper"]},"1965":{"Ford":["Fairlane","Mustang","Thunderbird"],"Pontiac":["GTO","Grand Prix","LeMans","Bonneville","Tempest"],"Volkswagen":["Beetle"],"Chevrolet":["Corvette"]},"1966":{"Ford":["Galaxie","Mustang","Falcon","Fairlane"],"Jensen":["Interceptor"],"Pontiac":["Bonneville","Grand Prix","GTO","LeMans","Tempest"],"Chevrolet":["Corvette"],"Oldsmobile":["Toronado"]},"1967":{"Volkswagen":["Beetle"],"Pontiac":["Tempest","Firebird","Grand Prix","GTO","LeMans","Bonneville"],"Chevrolet":["Camaro","Bel Air","Corvette"],"Ford":["Country","Falcon","Mustang","Thunderbird","Fairlane"],"Mercury":["Cougar"],"Jensen":["Interceptor"]},"1968":{"Pontiac":["Firebird","Lemans","GTO","Bonneville","Grand Prix"],"Shelby":["GT500"],"Dodge":["Charger"],"Mercury":["Cougar"],"Ford":["Mustang"],"Chevrolet":["Camaro","Corvette"]},"1969":{"Pontiac":["Firebird","Grand Prix","GTO"],"Mercury":["Cougar"],"Chevrolet":["Camaro","Corvette"],"Dodge":["Charger"],"Shelby":["GT350"],"Ford":["Mustang"],"Plymouth":["Roadrunner"]},"1970":{"Chevrolet":["Camaro","Corvette"],"Pontiac":["GTO","Grand Prix"],"Mercury":["Cougar"],"Ford":["Mustang","Torino"],"Porsche":["914"],"Dodge":["Charger"]},"1971":{"Ford":["Mustang"],"Chevrolet":["Vega","Camaro"],"Pontiac":["GTO","Grand Prix"]},"1972":{"Chevrolet":["Corvette","Camaro"],"Citroën":["SM"],"Pontiac":["GTO","Grand Prix"],"Ford":["Thunderbird","Mustang"]},"1973":{"Pontiac":["Grand Prix","GTO"],"Ford":["Mustang"],"Chevrolet":["Camaro","Monte Carlo","Corvette"]},"1974":{"Chevrolet":["Camaro"],"Ford":["Mustang"],"Citroën":["CX"],"Pontiac":["GTO","Grand Prix"]},"1975":{"Chevrolet":["Camaro","Corvette","Monza"],"Pontiac":["Grand Prix"]},"1976":{"Volkswagen":["Golf"],"Pontiac":["Grand Prix"],"Chevrolet":["Camaro"],"Toyota":["Celica"],"Plymouth":["Volare"],"Dodge":["Aspen"]},"1977":{"Chevrolet":["Camaro","Caprice"],"Mercedes-Benz":["W123"],"MG":["MGB"],"Pontiac":["Grand Prix"],"Ford":["Thunderbird"]},"1978":{"Chevrolet":["Corvette","Camaro"],"Toyota":["Celica"],"Plymouth":["Horizon"],"Dodge":["Omni"],"Pontiac":["Grand Prix"]},"1979":{"Nissan":["280ZX"],"Chevrolet":["LUV","Camaro"],"Ford":["Mustang"],"Buick":["Riviera"],"Pontiac":["Grand Prix"]},"1980":{"Ford":["Mustang","Thunderbird"],"Chevrolet":["Citation","Camaro"],"Honda":["Civic"],"Pontiac":["Grand Prix"]},"1981":{"Plymouth":["Reliant"],"Dodge":["Aries"],"Chevrolet":["Camaro"],"Pontiac":["Grand Prix"],"Mercedes-Benz":["W126"]},"1982":{"Pontiac":["Grand Prix"],"Chevrolet":["Camaro"],"Toyota":["Celica"]},"1983":{"Ford":["Thunderbird","Mustang"],"Mercedes-Benz":["W126"],"Pontiac":["6000","Sunbird","Grand Prix"],"Toyota":["Celica"],"Chevrolet":["Caprice"],"Honda":["Accord"],"Renault":["Alliance"],"Mazda":["626","RX-7"],"Volkswagen":["Golf"],"Porsche":["944"]},"1984":{"Pontiac":["1000","6000","Sunbird","Bonneville","Firebird","Parisienne","Grand Prix","Fiero","Firefly"],"Ford":["Bronco II","Laser","Thunderbird","EXP","Ranger","Escort","Tempo","LTD","F250","F150","E250","LTD Crown Victoria","Bronco","E150","Mustang"],"Mitsubishi":["Space","Galant","Mirage","Starion","Pajero","Cordia","Tredia"],"Subaru":["Brat"],"Mercedes-Benz":["S-Class","E-Class","W201","SL-Class"],"Mercury":["Topaz","Grand Marquis","Lynx","Capri","Cougar","Marquis"],"Lotus":["Esprit Turbo"],"Volkswagen":["Jetta","Golf","Vanagon","Scirocco","Quantum"],"Buick":["Electra","Century","Skyhawk"],"Lincoln":["Town Car","Continental","Mark VII"],"Maserati":["Quattroporte","Biturbo"],"Saab":["900"],"Audi":["5000S"],"Honda":["Accord","CR-X","Prelude"],"Porsche":["944"],"Dodge":["Daytona"],"Suzuki":["SJ 410"],"Mazda":["626","GLC","RX-7"],"Toyota":["Celica"],"Chevrolet":["Corvette"]},"1985":{"Buick":["Somerset","Electra","Century","LeSabre","Riviera","Skyhawk","Regal","Skylark"],"Ford":["E-Series","Bronco II","Bronco","Tempo","F-Series","Laser","LTD Crown Victoria","Ranger","Mustang","LTD","Escort","EXP","Thunderbird"],"Mitsubishi":["Starion","Mirage","Truck","Chariot","Tredia","Cordia","Pajero","Galant"],"Volkswagen":["Jetta","GTI","Cabriolet","Golf","Passat","Scirocco","Type 2"],"Mercedes-Benz":["W201","S-Class","E-Class","SL-Class"],"Chevrolet":["Camaro","Corvette"],"Saab":["900"],"Audi":["4000s","Quattro","5000S","Coupe GT"],"Lamborghini":["Countach"],"Mercury":["Topaz","Marquis","Grand Marquis","Lynx","Cougar","Capri"],"Mazda":["626","RX-7","Familia","B2000"],"Pontiac":["1000","6000","Bonneville","Parisienne","Sunbird","Fiero","Grand Am","Firebird","Grand Prix","Firefly"],"Subaru":["XT","BRAT","Leone"],"Merkur":["XR4Ti"],"Honda":["CR-X","Civic","Accord","Prelude"],"Maserati":["Biturbo","Quattroporte"],"Lincoln":["Town Car","Continental","Continental Mark VII"],"Plymouth":["Voyager"],"Porsche":["911","928","944"],"Suzuki":["Cultus","SJ"],"Toyota":["MR2"],"Lotus":["Esprit"],"Dodge":["Caravan"]},"1986":{"Maserati":["Biturbo","Quattroporte"],"Subaru":["XT","Leone","BRAT"],"Chevrolet":["Corvette"],"Ford":["Thunderbird","F-Series","Bronco II","Ranger","E-Series","Taurus","Tempo","EXP","LTD Crown Victoria","Escort","Laser","Aerostar","LTD","Mustang","Courier","Bronco"],"Mitsubishi":["Galant","Truck","Mighty Max","Precis","Mirage","Pajero","Cordia","Chariot","Tredia","Starion"],"Pontiac":["1000","6000","Fiero","Firebird","Safari","Sunbird","Parisienne","Grand Prix","Grand Am","Firefly","Gemini","Firebird Trans Am","Bonneville"],"Porsche":["911","928","944"],"Audi":["Coupe GT","5000S","4000s","5000CS Quattro","4000s Quattro","4000CS Quattro"],"Mercedes-Benz":["S-Class","E-Class","W201","SL-Class"],"Mercury":["Topaz","Capri","Grand Marquis","Lynx","Marquis","Cougar","Sable"],"Volkswagen":["GTI","Type 2","Passat","Scirocco","Golf","Jetta","Cabriolet"],"Mazda":["626","Familia","B-Series","RX-7"],"Buick":["Riviera","LeSabre","Regal","Skylark","Skyhawk","Century","Electra","Somerset"],"Lincoln":["Continental","Town Car","Continental Mark VII"],"Toyota":["MR2"],"Honda":["Prelude","Accord"],"Suzuki":["SJ 410","SJ"],"Saab":["900","9000"],"Lotus":["Esprit"],"Land Rover":["Range Rover"],"Lamborghini":["Countach"]},"1987":{"Honda":["Accord"],"Mercedes-Benz":["E-Class","S-Class","W201","SL-Class"],"Ford":["Mustang","Courier","Laser","Escort","Tempo","Aerostar","Thunderbird","E-Series","F-Series","Bronco II","Taurus","LTD Crown Victoria","Bronco","Ranger","EXP"],"Audi":["4000","5000CS","4000CS Quattro","5000S","Coupe GT"],"Mazda":["626","929","Familia","RX-7","B-Series","B2600"],"Lamborghini":["Countach"],"Volkswagen":["Cabriolet","Scirocco","Fox","Jetta","Type 2","Golf","Passat","GTI"],"Suzuki":["Swift","SJ"],"Subaru":["Leone","XT","BRAT","Justy"],"Buick":["Electra","Regal","Skyhawk","Century","LeSabre","Somerset","Skylark","Riviera"],"Porsche":["911","928","944","924 S"],"Pontiac":["6000","Grand Am","Chevette","Gemini","Fiero","Sunbird","Bonneville","Safari","Grand Prix","Firebird","Firefly"],"Mitsubishi":["Truck","Starion","Excel","L300","Cordia","Mirage","Chariot","Galant","Pajero","Tredia"],"Mercury":["Lynx","Topaz","Grand Marquis","Sable","Cougar"],"Maserati":["Biturbo"],"Lincoln":["Continental","Continental Mark VII","Town Car"],"Saab":["900","9000"],"Chevrolet":["Corvette"],"Land Rover":["Range Rover"],"Toyota":["MR2"],"Lotus":["Esprit"],"Acura":["Legend"]},"1988":{"Acura":["Integra","Legend"],"Porsche":["911","924","928","944"],"Pontiac":["6000","Firebird","Bonneville","Sunbird","Gemini","Grand Am","Grand Prix","Fiero","Safari","Firefly","LeMans","Turbo Firefly"],"Volkswagen":["Passat","GTI","Jetta","Fox","Type 2","Golf","Scirocco","Cabriolet"],"Mercury":["Sable","Topaz","Grand Marquis","Cougar","Tracer"],"Buick":["Electra","Skyhawk","Century","Riviera","Regal","Skylark","Reatta","LeSabre"],"Subaru":["Leone","XT","Justy"],"Honda":["CR-X","Civic","Accord"],"Ford":["Thunderbird","Aerostar","Escort","Mustang","Taurus","Bronco II","Laser","Tempo","E-Series","LTD Crown Victoria","F-Series","Ranger","Festiva","Bronco","Courier","EXP"],"Mitsubishi":["L300","Tredia","Galant","Mirage","Truck","Pajero","Excel","Starion","Chariot","Cordia"],"Mazda":["626","929","Familia","B-Series","RX-7","MX-6"],"Mercedes-Benz":["E-Class","S-Class","W201","SL-Class"],"Suzuki":["Swift","SJ"],"Audi":["90","5000S","5000CS","80/90"],"Lamborghini":["Countach"],"Lincoln":["Town Car","Continental","Continental Mark VII"],"Lotus":["Esprit"],"Chevrolet":["Corvette"],"Saab":["900","9000"],"Land Rover":["Range Rover"]},"1989":{"Buick":["Electra","Skyhawk","Century","Regal","Skylark","Reatta","Riviera","Estate","LeSabre"],"Ford":["E-Series","F-Series","Taurus","Mustang","Laser","Probe","Escort","Tempo","Aerostar","Festiva","Courier","Bronco II","LTD Crown Victoria","Bronco","Ranger","Thunderbird"],"Saab":["900","9000"],"Pontiac":["6000","Grand Prix","Safari","Firefly","Gemini","Sunbird","Grand Am","LeMans","Firebird","Bonneville"],"Mazda":["626","929","Familia","B-Series","B2600","RX-7","MPV","MX-6"],"Porsche":["911","928","944"],"Mitsubishi":["Truck","Mirage","Excel","Chariot","Galant","Pajero","Starion","L300","Sigma","Eclipse"],"Chevrolet":["Corvette"],"Lincoln":["Continental Mark VII","Town Car","Continental"],"Mercury":["Sable","Cougar","Grand Marquis","Topaz","Tracer"],"Volkswagen":["Jetta","Fox","GTI","Cabriolet","Type 2","Golf"],"Subaru":["Leone","Legacy","Justy","XT"],"Suzuki":["SJ","Sidekick","Swift"],"Lexus":["LS","ES"],"Mercedes-Benz":["S-Class","E-Class","W201","SL-Class"],"Maserati":["228","430","Spyder","Karif"],"Audi":["80","90","100","200"],"Toyota":["Truck Xtracab SR5"],"Land Rover":["Range Rover"],"Lotus":["Esprit"],"Citroën":["CX"],"Acura":["Legend"],"Honda":["Civic","Accord"],"BMW":["6 Series"],"Lamborghini":["Countach"],"Dodge":["Colt"],"Plymouth":["Laser"]},"1990":{"Ford":["Taurus","F-Series","Mustang","Thunderbird","Tempo","Aerostar","Escort","Ranger","E-Series","Probe","LTD Crown Victoria","Bronco II","Bronco","Festiva"],"Mercedes-Benz":["S-Class","E-Class","SL-Class","W201"],"Porsche":["911","928","944"],"Buick":["LeSabre","Regal","Century","Riviera","Skylark","Coachbuilder","Estate","Electra","Reatta"],"Suzuki":["Sidekick","Swift","SJ"],"Mercury":["Sable","Topaz","Grand Marquis","Cougar"],"Subaru":["Legacy","Justy","Loyale","XT"],"Mazda":["626","929","B-Series","MX-6","Familia","MX-5","MPV","RX-7"],"Maserati":["228","430","Karif","Spyder"],"Pontiac":["6000","Trans Sport","Sunbird","LeMans","Firefly","Grand Am","Firebird","Turbo Firefly","Grand Prix","Grand Prix Turbo","Bonneville"],"Audi":["80","90","100","200","V8","Coupe Quattro"],"Lotus":["Elan","Esprit"],"Volkswagen":["Passat","Fox","Type 2","Cabriolet","GTI","Jetta","Corrado","Golf"],"Mitsubishi":["Truck","Mirage","L300","Galant","Precis","Pajero","Eclipse","GTO","Sigma","Chariot"],"Acura":["Legend"],"Nissan":["Maxima","Datsun/Nissan Z-car"],"Saab":["900","9000"],"Plymouth":["Laser"],"Lincoln":["Continental","Continental Mark VII","Town Car"],"Honda":["Civic","Accord"],"Lamborghini":["Diablo","Countach"],"Lexus":["LS","ES"],"Eagle":["Talon"],"Land Rover":["Range Rover"]},"1991":{"Pontiac":["6000","LeMans","Firebird","Grand Am","Grand Prix","Firefly","Trans Sport","Sunbird","Bonneville"],"Porsche":["911","928","944"],"Ford":["Mustang","Festiva","E-Series","F-Series","Tempo","Bronco","Escort","Aerostar","LTD Crown Victoria","Thunderbird","Ranger","Taurus","Explorer","Probe"],"Audi":["80","90","100","200","Coupe Quattro","V8"],"Subaru":["Loyale","Justy","Legacy","XT"],"Mercury":["Topaz","Grand Marquis","Tracer","Sable","Capri","Cougar"],"Buick":["Reatta","Coachbuilder","Riviera","Century","LeSabre","Park Avenue","Skylark","Roadmaster","Regal"],"Mercedes-Benz":["S-Class","E-Class","W201","SL-Class"],"Lexus":["LS","ES"],"Mazda":["626","929","MX-5","Familia","Navajo","RX-7","MPV","B-Series","MX-6"],"Suzuki":["Swift","SJ","Sidekick"],"Lotus":["Esprit","Elan"],"Lincoln":["Town Car","Continental","Continental Mark VII"],"Volkswagen":["Type 2","Passat","Golf","Corrado","Jetta","Cabriolet","Fox","GTI"],"Honda":["Civic","Accord"],"Lamborghini":["Diablo"],"Saab":["900","9000"],"Chevrolet":["Caprice"],"Maserati":["430","Spyder"],"Mitsubishi":["Chariot","Truck","GTO","Pajero","Galant","Eclipse","Mirage"],"Nissan":["300ZX","Sentra"],"Eagle":["Talon"],"Plymouth":["Laser"],"Land Rover":["Range Rover","Sterling"],"Toyota":["Previa"]},"1992":{"Saab":["900","9000"],"Volkswagen":["Corrado","Jetta","GTI","Fox","Golf","Cabriolet","Eurovan","Passat","riolet"],"Ford":["Crown Victoria","Festiva","Ranger","Aerostar","F-Series","E-Series","Taurus","Tempo","Thunderbird","Escort","Probe","Bronco","Explorer","Mustang","Club Wagon","Econoline E150","Econoline E250","Econoline E350","F150","F250","F350"],"Suzuki":["Swift","Sidekick","SJ","Samurai"],"Mercedes-Benz":["E-Class","S-Class","SL-Class","W201","190E","300CE","300D","300E","300SD","300SE","300SL","300TE","400E","400SE","500E","500SEL","500SL","600SEL"],"Subaru":["Legacy","Loyale","Alcyone SVX","Justy","SVX"],"Mitsubishi":["Diamante","Galant","RVR","GTO","Chariot","Eclipse","Pajero","Mirage","Truck","3000GT","Expo","Mighty Max Macro","Mighty Max","Montero","Precis"],"Mazda":["323","626","929","MPV","MX-6","Protege","MX-5","B-Series","Familia","Navajo","MX-3","RX-7","B-Series Plus","Miata MX-5"],"Mercury":["Tracer","Sable","Grand Marquis","Topaz","Cougar","Capri"],"Audi":["80","100","V8","S4","Quattro"],"Buick":["LeSabre","Riviera","Regal","Skylark","Century","Roadmaster","Park Avenue","Coachbuilder"],"BMW":["3 Series","5 Series","7 Series","8 Series","M5"],"Pontiac":["Firebird","Sunbird","Grand Prix","Grand Am","LeMans","Firebird Formula","Firefly","Bonneville","Trans Sport"],"Land Rover":["Range Rover","Defender"],"Lexus":["LS","SC","ES"],"Dodge":["Viper","Caravan","Colt","D150 Club","D150","D250 Club","D250","D350 Club","D350","Dakota Club","Dakota","Daytona","Dynasty","Grand Caravan","Monaco","Ram 50","Ram Van B150","Ram Van B250","Ram Van B350","Ram Wagon B150","Ram Wagon B250","Ram Wagon B350","Ramcharger","Shadow","Spirit","Stealth"],"Lincoln":["Town Car","Continental Mark VII","Continental","Mark VII"],"Lotus":["Elan","Esprit"],"Lamborghini":["Diablo"],"Porsche":["911","968"],"Cadillac":["Seville","Allante","Brougham","DeVille","Eldorado","Fleetwood"],"Toyota":["Camry","4Runner","Celica","Corolla","Cressida","Land Cruiser","MR2","Paseo","Previa","Supra","Tercel","Xtra"],"Nissan":["300ZX","Sentra","240SX","Maxima","NX","Pathfinder","Stanza"],"Plymouth":["Laser","Acclaim","Colt","Colt Vista","Grand Voyager","Sundance","Voyager"],"Honda":["Prelude","Accord","Civic"],"Eagle":["Talon","Premier","Summit"],"Acura":["Integra","Legend","NSX","Vigor"],"Alfa Romeo":["164","Spider"],"Chevrolet":["1500","2500","3500","APV","Astro","Beretta","Blazer","Camaro","Caprice","Cavalier","Corsica","Corvette","G-Series G10","G-Series G20","G-Series G30","Lumina","Lumina APV","S10 Blazer","S10","Sportvan G10","Sportvan G20","Sportvan G30","Suburban 1500","Suburban 2500"],"Chrysler":["Fifth Ave","Imperial","LeBaron","New Yorker","Town & Country"],"Daihatsu":["Charade","Rocky"],"Geo":["Metro","Prizm","Storm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Rally Wagon 1500","Rally Wagon 2500","Rally Wagon 3500","Safari","Sonoma Club","Sonoma","Suburban 1500","Suburban 2500","Vandura 1500","Vandura 2500","Vandura 3500","Yukon"],"Hyundai":["Elantra","Excel","Scoupe","Sonata"],"Infiniti":["G","M","Q"],"Isuzu":["Amigo","Impulse","Rodeo","Space","Stylus","Trooper"],"Jaguar":["XJ Series"],"Jeep":["Cherokee","Comanche","Wrangler"],"Oldsmobile":["88","98","Achieva","Bravada","Ciera","Custom Cruiser","Cutlass Supreme","Silhouette","Toronado"],"Saturn":["S-Series"],"Volvo":["240","740","940","960"]},"1993":{"Subaru":["Loyale","Alcyone SVX","Legacy","Justy","Impreza","SVX"],"Suzuki":["Sidekick","Swift","SJ","Samurai"],"Pontiac":["Grand Prix","Firebird","Sunbird","Grand Am","LeMans","Bonneville","Trans Sport"],"Mitsubishi":["GTO","Truck","Galant","RVR","Diamante","Chariot","Mirage","Eclipse","Pajero","3000GT","Expo","Mighty Max Macro","Mighty Max","Montero","Precis"],"Ford":["Tempo","Taurus","Aerostar","Festiva","Ranger","E-Series","Escort","Mustang","Explorer","F-Series","Bronco","Thunderbird","Probe","LTD Crown Victoria","Club Wagon","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","F150","F250","F350"],"Mazda":["323","626","929","RX-7","B-Series","Navajo","MX-3","MX-6","Protege","MPV","MX-5","B-Series Plus","Miata MX-5"],"Mercury":["Sable","Capri","Villager","Cougar","Tracer","Topaz","Grand Marquis"],"Buick":["Park Avenue","Skylark","Roadmaster","Century","Coachbuilder","Riviera","Regal","LeSabre"],"Mercedes-Benz":["W201","S-Class","C-Class","SL-Class","E-Class","190E","300CE","300D","300E","300SD","300SE","300SL","300TE","400E","400SEL","500E","500SEC","500SEL","500SL","600SEC","600SEL","600SL"],"Porsche":["911","928","968"],"Audi":["90","100","S4","Quattro"],"Dodge":["Viper RT/10","Intrepid","Caravan","Colt","D150 Club","D150","D250 Club","D250","D350 Club","D350","Dakota Club","Dakota","Daytona","Dynasty","Grand Caravan","Ram 50","Ram Van B150","Ram Van B250","Ram Van B350","Ram Wagon B150","Ram Wagon B250","Ram Wagon B350","Ramcharger","Shadow","Spirit","Stealth","Viper"],"Lotus":["Esprit","Elan"],"Lamborghini":["Diablo"],"Saab":["900","9000"],"Volkswagen":["Fox","Passat","GTI","Golf","Corrado","Cabriolet","Eurovan","Jetta","riolet","Golf III","Jetta III"],"BMW":["3 Series","5 Series","7 Series","8 Series","M5"],"Land Rover":["Defender","Range Rover Classic","Defender 110","Range Rover"],"Nissan":["Sentra","300ZX","240SX","Altima","Maxima","NX","Pathfinder","Quest"],"Lincoln":["Town Car","Continental","Mark VIII"],"Lexus":["SC","GS","LS","ES"],"Chrysler":["Concorde","Fifth Ave","Imperial","LeBaron","New Yorker","Town & Country"],"Honda":["Prelude","Accord","Civic","del Sol"],"Toyota":["Camry","4Runner","Celica","Corolla","Land Cruiser","MR2","Paseo","Previa","Supra","T100","Tercel","Xtra"],"Jeep":["Grand Cherokee","Cherokee","Wrangler"],"Acura":["Integra","Legend","NSX","Vigor"],"Alfa Romeo":["164","Spider"],"Cadillac":["Allante","DeVille","Eldorado","Fleetwood","Seville","Sixty Special"],"Chevrolet":["1500","2500","3500","APV","Astro","Beretta","Blazer","Camaro","Caprice Classic","Cavalier","Corsica","Corvette","G-Series G10","G-Series G20","G-Series G30","Lumina","Lumina APV","S10 Blazer","S10","Sportvan G10","Sportvan G20","Sportvan G30","Suburban 1500","Suburban 2500"],"Eagle":["Summit","Talon","Vision"],"Geo":["Metro","Prizm","Storm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Rally Wagon 1500","Rally Wagon 2500","Rally Wagon 3500","Safari","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Vandura 1500","Vandura 2500","Vandura 3500","Yukon"],"HUMMER":["H1"],"Hyundai":["Elantra","Excel","Scoupe","Sonata"],"Infiniti":["G","J","Q"],"Isuzu":["Amigo","Rodeo","Space","Stylus","Trooper"],"Jaguar":["XJ Series"],"Oldsmobile":["88","98","Achieva","Bravada","Ciera","Cutlass Cruiser","Cutlass Supreme","Silhouette"],"Plymouth":["Acclaim","Colt","Colt Vista","Grand Voyager","Laser","Sundance","Voyager"],"Saturn":["S-Series"],"Volvo":["240","850","940","960"]},"1994":{"Ford":["Taurus","Aerostar","Escort","Mustang","E-Series","Probe","Thunderbird","Tempo","F-Series","Explorer","Lightning","Aspire","Ranger","Bronco","Crown Victoria","Club Wagon","Econoline E150","Econoline E250","Econoline E350","F150","F250","F350"],"Mercedes-Benz":["C-Class","SL-Class","E-Class","S-Class"],"Kia":["Sephia"],"Buick":["Roadmaster","Park Avenue","Century","LeSabre","Skylark","Regal","Coachbuilder"],"Mercury":["Sable","Topaz","Capri","Villager","Tracer","Cougar","Grand Marquis"],"Mitsubishi":["Eclipse","Mirage","Diamante","Galant","Truck","Chariot","RVR","GTO","Pajero","3000GT","Expo","Mighty Max Macro","Mighty Max","Montero","Precis"],"Eagle":["Vision","Summit","Talon"],"Volkswagen":["Passat","Jetta","Golf","Corrado","Eurovan","Golf III","Jetta III"],"Lexus":["SC","LS","GS","ES"],"Dodge":["Intrepid","Ram","Viper RT/10","Caravan","Colt","Dakota Club","Dakota","Grand Caravan","Ram 1500","Ram 2500","Ram 3500","Ram Van B150","Ram Van B250","Ram Van B350","Ram Wagon B150","Ram Wagon B250","Ram Wagon B350","Shadow","Spirit","Stealth","Viper"],"Chevrolet":["1500","2500","3500","Impala SS","Caprice","Astro","Beretta","Blazer","Camaro","Caprice Classic","Cavalier","Corsica","Corvette","G-Series G10","G-Series G20","G-Series G30","Impala","Lumina","S10 Blazer","S10","Sportvan G20","Sportvan G30","Suburban 1500","Suburban 2500"],"Lincoln":["Mark VIII","Town Car","Continental"],"Audi":["90","100","V8","Cabriolet","S4","riolet","Quattro"],"Saab":["900","9000"],"Mazda":["323","626","929","B-Series","MPV","MX-3","Protege","Navajo","RX-7","MX-5","MX-6","B-Series Plus","Miata MX-5"],"Subaru":["Justy","Legacy","Alcyone SVX","Loyale","Impreza","SVX"],"Land Rover":["Discovery","Range Rover","Defender","Defender 90"],"Nissan":["300ZX","Sentra","240SX","Altima","Maxima","Pathfinder","Quest"],"Honda":["Prelude","Accord","Civic","del Sol","Passport"],"Pontiac":["Firebird","Grand Prix","Bonneville","Trans Sport","Sunbird","Grand Am","Firefly"],"Lamborghini":["Diablo"],"Suzuki":["Swift","Sidekick","SJ","Samurai"],"Lotus":["Esprit","Elan"],"Porsche":["911","928","968"],"Acura":["Integra","Legend","NSX","Vigor"],"BMW":["3 Series","5 Series","7 Series","8 Series"],"Chrysler":["Concorde","LeBaron","LHS","New Yorker","Town & Country"],"Alfa Romeo":["164","Spider"],"Cadillac":["DeVille","Eldorado","Fleetwood","Seville"],"Geo":["Metro","Prizm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Rally Wagon 2500","Rally Wagon 3500","Safari","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Vandura 1500","Vandura 2500","Vandura 3500","Yukon"],"HUMMER":["H1"],"Hyundai":["Elantra","Excel","Scoupe","Sonata"],"Infiniti":["G","J","Q"],"Isuzu":["Amigo","Rodeo","Space","Trooper"],"Jaguar":["XJ Series"],"Jeep":["Cherokee","Grand Cherokee","Wrangler"],"Oldsmobile":["88","98","Achieva","Bravada","Ciera","Cutlass Cruiser","Cutlass Supreme","Silhouette"],"Plymouth":["Acclaim","Colt","Colt Vista","Grand Voyager","Laser","Sundance","Voyager"],"Saturn":["S-Series"],"Toyota":["4Runner","Camry","Celica","Corolla","Land Cruiser","MR2","Paseo","Previa","Supra","T100","Tercel","Xtra"],"Volvo":["850","940","960"]},"1995":{"Kia":["Sephia","Sportage"],"Pontiac":["Firebird","Sunfire","Firefly","Grand Am","Grand Prix","Trans Sport","Bonneville"],"Ford":["F-Series","Windstar","Contour","Escort","Aerostar","Crown Victoria","E-Series","Bronco","Ranger","Explorer","Probe","Mustang","Thunderbird","Taurus","Aspire","Club Wagon","Econoline E150","Econoline E250","Econoline E350","F150","F250","F350"],"Mercedes-Benz":["S-Class","SL-Class","C-Class","E-Class"],"Porsche":["911","928","968"],"Volkswagen":["Passat","Eurovan","Cabriolet","Jetta","GTI","Golf","rio","Golf III","Jetta III"],"Subaru":["Legacy","Impreza","Alcyone SVX","SVX"],"Mercury":["Sable","Villager","Cougar","Tracer","Mystique","Grand Marquis"],"Lincoln":["Town Car","Mark VIII","Continental"],"Suzuki":["SJ","Swift","Sidekick","Esteem","Samurai"],"Buick":["Century","Skylark","Park Avenue","Roadmaster","Regal","LeSabre","Coachbuilder","Riviera"],"Mazda":["323","626","929","RX-7","Millenia","B-Series","MPV","MX-3","MX-5","Protege","MX-6","B-Series Plus","Miata MX-5"],"Mitsubishi":["Galant","Mirage","RVR","Truck","Eclipse","Pajero","GTO","Chariot","Diamante","3000GT","Expo","Mighty Max","Montero"],"Audi":["90","S6","Cabriolet","A6","riolet"],"Acura":["Integra","Legend","NSX","TL"],"Lexus":["SC","LS","GS","ES"],"BMW":["3 Series","5 Series","7 Series","8 Series","M3"],"Land Rover":["Defender","Range Rover","Discovery","Defender 90"],"Dodge":["Viper RT/10","Avenger","Caravan","Dakota Club","Dakota","Grand Caravan","Intrepid","Neon","Ram 1500 Club","Ram 1500","Ram 2500 Club","Ram 2500","Ram 3500 Club","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Spirit","Stealth","Stratus","Viper"],"Saab":["900","9000"],"Nissan":["300ZX","Maxima","200SX","240SX","Altima","Pathfinder","Quest","Sentra"],"Chevrolet":["1500","2500","3500","K5 Blazer","Impala SS","Caprice","Astro","Beretta","Blazer","Camaro","Caprice Classic","Cavalier","Corsica","Corvette","G-Series G10","G-Series G20","G-Series G30","Impala","Lumina","Monte Carlo","S10","Sportvan G20","Sportvan G30","Suburban 1500","Suburban 2500","Tahoe"],"Honda":["Prelude","Accord","Civic","del Sol","Odyssey","Passport"],"Chrysler":["Cirrus","Concorde","LeBaron","LHS","New Yorker","Sebring","Town & Country"],"Jeep":["Grand Cherokee","Cherokee","Wrangler"],"Lamborghini":["Diablo"],"Holden":["VS Commodore"],"Lotus":["Esprit"],"Alfa Romeo":["164"],"Cadillac":["DeVille","Eldorado","Fleetwood","Seville"],"Eagle":["Summit","Talon","Vision"],"Geo":["Metro","Prizm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Rally Wagon G2500","Rally Wagon G3500","Safari","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Vandura G1500","Vandura G2500","Vandura G3500","Yukon"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Scoupe","Sonata"],"Infiniti":["G","J","Q"],"Isuzu":["Rodeo","Trooper"],"Jaguar":["XJ Series"],"Oldsmobile":["88","98","Achieva","Aurora","Ciera","Cutlass Supreme","Silhouette"],"Plymouth":["Acclaim","Grand Voyager","Neon","Voyager"],"Saturn":["S-Series"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Land Cruiser","MR2","Paseo","Previa","Supra","T100","T100 Xtra","Tacoma","Tacoma Xtra","Tercel","Xtra"],"Volvo":["850","940","960"]},"1996":{"Dodge":["Caravan","Stratus","Avenger","Dakota Club","Dakota","Grand Caravan","Intrepid","Neon","Ram 1500 Club","Ram 1500","Ram 2500 Club","Ram 2500","Ram 3500 Club","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stealth","Viper"],"Ford":["Ranger","Bronco","Mustang","Contour","Windstar","Crown Victoria","Probe","Escort","Taurus","E-Series","Explorer","Thunderbird","Aerostar","F-Series","Aspire","Club Wagon","Econoline E150","Econoline E250","Econoline E350","F150","F250","F350"],"Mercedes-Benz":["S-Class","SL-Class","E-Class","C-Class"],"Lincoln":["Town Car","Continental","Mark VIII"],"Mercury":["Sable","Mystique","Grand Marquis","Tracer","Villager","Cougar"],"Buick":["Century","Roadmaster","Regal","Hearse","Park Avenue","Riviera","Skylark","LeSabre"],"Audi":["A6","Cabriolet","A4","riolet"],"Mazda":["626","MX-6","Protege","MX-5","B-Series","MX-3","MPV","Millenia","B-Series Plus","Miata MX-5"],"Volkswagen":["Cabriolet","Passat","Golf","Jetta","GTI","rio"],"Mitsubishi":["Galant","Chariot","Pajero","Mirage","Truck","Eclipse","GTO","Diamante","Expo LRV","3000GT","Mighty Max","Montero"],"Pontiac":["Grand Prix","Firebird","Trans Sport","Sunfire","Grand Am","Bonneville"],"Suzuki":["X-90","Esteem","Sidekick","Swift"],"Saab":["900","9000"],"Holden":["VS Commodore"],"Porsche":["911"],"Plymouth":["Voyager","Breeze","Grand Voyager","Neon"],"Chevrolet":["1500","2500","3500","Tahoe","Astro","Impala","Beretta","Caprice","Blazer","Camaro","Caprice Classic","Cavalier","Corsica","Corvette","Express 1500","Express 2500","Express 3500","G-Series 1500","G-Series 2500","G-Series G30","Lumina","Monte Carlo","S10","Sportvan G30","Suburban 1500","Suburban 2500"],"Land Rover":["Discovery","Range Rover"],"Nissan":["300ZX","200SX","240SX","Altima","Maxima","Pathfinder","Quest","Sentra"],"Jeep":["Grand Cherokee","Cherokee"],"Kia":["Sportage","Sephia"],"Lexus":["GS","SC","LX","ES","LS"],"Subaru":["Impreza","Alcyone SVX","Legacy","SVX"],"Honda":["Passport","Odyssey","Prelude","Accord","Civic","del Sol"],"Chrysler":["Town & Country","Cirrus","Concorde","LHS","New Yorker","Sebring"],"Lotus":["Esprit"],"BMW":["3 Series","7 Series","8 Series","M3","Z3"],"Lamborghini":["Diablo"],"Acura":["Integra","NSX","RL","SLX","TL"],"Cadillac":["DeVille","Eldorado","Fleetwood","Seville"],"Eagle":["Summit","Talon","Vision"],"Geo":["Metro","Prizm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Rally Wagon G3500","Safari","Savana 1500","Savana 2500","Savana 3500","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Vandura G3500","Yukon"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Sonata"],"Infiniti":["G","I","J","Q"],"Isuzu":["Hombre","Oasis","Rodeo","Trooper"],"Jaguar":["XJ Series"],"Oldsmobile":["88","98","Achieva","Aurora","Bravada","Ciera","Cutlass Supreme","Silhouette"],"Saturn":["S-Series"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Land Cruiser","Paseo","Previa","RAV4","Supra","T100","T100 Xtra","Tacoma","Tacoma Xtra","Tercel"],"Volvo":["850","960"]},"1997":{"Pontiac":["Grand Am","Sunfire","Firebird","Bonneville","Trans Sport","Grand Prix"],"Subaru":["Legacy","Alcyone SVX","Impreza","SVX"],"Suzuki":["Sidekick","X-90","Swift","Esteem"],"Lexus":["LS","GS","LX","SC","ES"],"Kia":["Sephia","Sportage","Mentor"],"Mazda":["626","B-Series","MX-5","MPV","Protege","MX-6","Millenia","B-Series Plus","Miata MX-5"],"BMW":["3 Series","5 Series","7 Series","8 Series","M3","Z3"],"Mercury":["Mountaineer","Sable","Cougar","Villager","Mystique","Tracer","Grand Marquis"],"Lamborghini":["Diablo"],"Honda":["Accord","Civic","Prelude","CR-V","Odyssey","Passport","Del Sol"],"Audi":["A6","A4","Cabriolet","A8","riolet"],"Mitsubishi":["Mirage","Diamante","GTO","Pajero","Eclipse","Challenger","Galant","3000GT","Montero","Montero Sport"],"Porsche":["911","Boxster"],"Mercedes-Benz":["S-Class","C-Class","E-Class","SL-Class","SLK-Class"],"Land Rover":["Range Rover","Defender","Discovery","Defender 90"],"Chrysler":["Town & Country","Cirrus","Concorde","LHS","Sebring"],"Ford":["F-Series","Aerostar","Aspire","Club Wagon","Contour","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","Escort","Expedition","Explorer","F150","F250","F350","Mustang","Probe","Ranger","Taurus","Thunderbird","Windstar"],"Saab":["900","9000"],"Volkswagen":["Jetta","Golf","Cabriolet","Eurovan","GTI","Passat","rio"],"Lincoln":["Continental","Mark VIII","Town Car"],"Chevrolet":["1500","2500","3500","Malibu","Astro","Blazer","Camaro","Cavalier","Corvette","Express 1500","Express 2500","Express 3500","G-Series 1500","G-Series 2500","G-Series 3500","Lumina","Monte Carlo","S10","Suburban 1500","Suburban 2500","Tahoe","Venture"],"Plymouth":["Breeze","Voyager","Grand Voyager","Neon","Prowler"],"Buick":["LeSabre","Park Avenue","Riviera","Century","Skylark","Regal"],"Holden":["VS Commodore"],"Dodge":["Stratus","Avenger","Caravan","Dakota Club","Dakota","Grand Caravan","Intrepid","Neon","Ram 1500 Club","Ram 1500","Ram 2500 Club","Ram 2500","Ram 3500 Club","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Viper"],"Toyota":["Camry","4Runner","Avalon","Celica","Corolla","Land Cruiser","Paseo","Previa","RAV4","Supra","T100","T100 Xtra","Tacoma","Tacoma Xtra","Tercel"],"Lotus":["Esprit"],"Acura":["Integra","CL","NSX","RL","SLX","TL"],"Cadillac":["Catera","DeVille","Eldorado","Seville"],"Eagle":["Talon","Vision"],"Geo":["Metro","Prizm","Tracker"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Jimmy","Safari","Savana 1500","Savana 2500","Savana 3500","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Yukon"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Sonata","Tiburon"],"Infiniti":["I","J","Q","QX"],"Isuzu":["Hombre","Hombre Space","Oasis","Rodeo","Trooper"],"Jaguar":["XJ Series","XK Series"],"Jeep":["Cherokee","Grand Cherokee","Wrangler"],"Nissan":["200SX","240SX","Altima","Maxima","Pathfinder","Quest","Sentra"],"Oldsmobile":["88","Achieva","Aurora","Bravada","Cutlass","Cutlass Supreme","LSS","Regency","Silhouette"],"Saturn":["S-Series"],"Volvo":["850","960","S90","V90"]},"1998":{"Chevrolet":["1500","2500","3500","Corvette","Astro","Blazer","Camaro","Cavalier","Express 1500","Express 2500","Express 3500","G-Series 1500","G-Series 2500","G-Series 3500","Lumina","Malibu","Metro","Monte Carlo","Prizm","S10","Suburban 1500","Suburban 2500","Tahoe","Tracker","Venture"],"Porsche":["911","Boxster"],"Honda":["CR-V","Civic","Accord","Odyssey","Passport","Prelude"],"Subaru":["Forester","Legacy","Impreza"],"Mazda":["626","B-Series","Millenia","MPV","Protege","MX-5","B-Series Plus"],"Mitsubishi":["Mirage","Galant","Challenger","Diamante","Pajero","Eclipse","GTO","3000GT","Montero","Montero Sport"],"Lexus":["ES","GS","SC","LX","LS"],"BMW":["3 Series","5 Series","7 Series","M3","Z3"],"Volkswagen":["Golf","Passat","GTI","Jetta","Cabriolet","New Beetle","rio"],"Lincoln":["Town Car","Navigator","Mark VIII","Continental"],"Suzuki":["X-90","Esteem","Sidekick","Swift"],"Mercedes-Benz":["M-Class","S-Class","CL-Class","C-Class","E-Class","SL-Class","SLK-Class","CLK-Class"],"Mercury":["Villager","Grand Marquis","Tracer","Mountaineer","Sable","Mystique"],"Saab":["900","9000"],"Buick":["Skylark","Regal","Park Avenue","Century","Riviera","LeSabre"],"Pontiac":["Grand Am","Grand Prix","Firebird","Sunfire","Trans Sport","Bonneville"],"Lamborghini":["Diablo"],"Audi":["A4","Cabriolet","A6","A8","riolet"],"Kia":["Sephia","Sportage"],"Lotus":["Esprit"],"Land Rover":["Discovery","Range Rover"],"Dodge":["Intrepid","Avenger","Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Neon","Ram 1500 Club","Ram 1500","Ram 2500 Club","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"Acura":["CL","Integra","NSX","RL","SLX","TL"],"Cadillac":["Catera","DeVille","Eldorado","Seville"],"Chrysler":["Cirrus","Concorde","Sebring","Town & Country"],"Eagle":["Talon"],"Ford":["Club Wagon","Contour","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","Escort","Expedition","Explorer","F150","F250","Mustang","Ranger","Taurus","Windstar"],"GMC":["1500","2500","3500","1500 Club Coupe","2500 Club Coupe","3500 Club Coupe","Envoy","Jimmy","Safari","Savana 1500","Savana 2500","Savana 3500","Sonoma Club Coupe","Sonoma","Suburban 1500","Suburban 2500","Yukon"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Sonata","Tiburon"],"Infiniti":["I","Q","QX"],"Isuzu":["Amigo","Hombre","Hombre Space","Oasis","Rodeo","Trooper"],"Jaguar":["XJ Series","XK Series"],"Jeep":["Cherokee","Grand Cherokee","Wrangler"],"Nissan":["200SX","240SX","Altima","Frontier","Maxima","Pathfinder","Quest","Sentra"],"Oldsmobile":["88","Achieva","Aurora","Bravada","Cutlass","Intrigue","LSS","Regency","Silhouette"],"Plymouth":["Breeze","Grand Voyager","Neon","Voyager"],"Saturn":["S-Series"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Land Cruiser","RAV4","Sienna","Supra","T100","T100 Xtra","Tacoma","Tacoma Xtra","Tercel"],"Volvo":["C70","S70","S90","V70","V90"]},"1999":{"Chevrolet":["1500","2500","3500","Corvette","Astro","Silverado","Blazer","Camaro","Cavalier","Express 1500","Express 2500","Express 3500","Lumina","Malibu","Metro","Monte Carlo","Prizm","S10","Silverado 1500","Silverado 2500","Suburban 1500","Suburban 2500","Tahoe","Tracker","Venture"],"Volkswagen":["New Beetle","Golf","Passat","Cabriolet","Eurovan","Jetta","GTI","rio"],"Honda":["CR-V","Passport","Accord","Civic","Prelude","Odyssey"],"Mitsubishi":["Mirage","Eclipse","Challenger","Pajero","Galant","GTO","Diamante","3000GT","Montero","Montero Sport"],"Subaru":["Legacy","Impreza","Forester"],"Porsche":["911","Boxster"],"Pontiac":["Sunfire","Grand Prix","Firebird","Trans Sport","Grand Am","Firebird Formula","Bonneville","Montana"],"Mercedes-Benz":["CLK-Class","M-Class","E-Class","C-Class","CL-Class","SL-Class","S-Class","SLK-Class"],"Suzuki":["Vitara","Esteem","Grand Vitara","Swift"],"Lamborghini":["Diablo"],"Land Rover":["Range Rover","Discovery","Discovery Series II"],"Lincoln":["Town Car","Continental","Navigator"],"Saab":["900","9000","9-3","9-5"],"Dodge":["Charger","Intrepid","Avenger","Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Neon","Ram 1500 Club","Ram 1500","Ram 2500 Club","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"Audi":["A4","A8","A6"],"BMW":["3 Series","5 Series","7 Series","Z3","M3"],"Lexus":["LS","SC","ES","RX","GS","LX"],"Mercury":["Mystique","Sable","Mountaineer","Tracer","Villager","Grand Marquis","Cougar"],"Mazda":["626","MX-5","B-Series","Protege","Millenia","B-Series Plus","Miata MX-5"],"Buick":["LeSabre","Riviera","Century","Regal","Park Avenue"],"GMC":["2500","3500","EV1","1500 Club Coupe","Envoy","Jimmy","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sonoma","Suburban 1500","Suburban 2500","Yukon"],"Kia":["Sportage","Sephia"],"Jeep":["Grand Cherokee","Cherokee","Wrangler"],"Chrysler":["300M","300","Cirrus","Concorde","LHS","Sebring","Town & Country"],"Lotus":["Esprit"],"Corbin":["Sparrow"],"Acura":["CL","Integra","NSX","RL","SLX","TL"],"Cadillac":["Catera","DeVille","Eldorado","Escalade","Seville"],"Daewoo":["Lanos","Leganza","Nubira"],"Ford":["Contour","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","Escort","Expedition","Explorer","F150","F250","F350","Mustang","Ranger","Taurus","Windstar"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Sonata","Tiburon"],"Infiniti":["G","I","Q","QX"],"Isuzu":["Amigo","Hombre","Hombre Space","Oasis","Rodeo","Trooper","VehiCROSS"],"Jaguar":["XJ Series","XK Series"],"Nissan":["Altima","Frontier","Maxima","Pathfinder","Quest","Sentra"],"Oldsmobile":["88","Alero","Aurora","Bravada","Cutlass","Intrigue","LSS","Silhouette"],"Plymouth":["Breeze","Grand Voyager","Neon","Prowler","Voyager"],"Saturn":["S-Series"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Land Cruiser","RAV4","Sienna","Solara","Tacoma","Tacoma Xtra"],"Volvo":["C70","S70","S80","V70"]},"2000":{"Subaru":["Forester","Impreza","Legacy","Outback"],"Honda":["Insight","Civic","CR-V","Odyssey","Passport","Accord","Prelude","S2000"],"Porsche":["911","Boxster"],"Saab":["9-3","9-5"],"Mazda":["626","MPV","B-Series","Protege","MX-5","Millenia","B-Series Plus","Miata MX-5"],"Mercedes-Benz":["C-Class","SL-Class","CLK-Class","E-Class","M-Class","S-Class","SLK-Class","CL-Class"],"Suzuki":["Esteem","Vitara","Swift","Grand Vitara"],"BMW":["3 Series","5 Series","7 Series","X5","M","M5","Z3","Z8"],"Mercury":["Sable","Mountaineer","Villager","Grand Marquis","Cougar","Mystique"],"Volkswagen":["Golf","Jetta","Eurovan","Passat","GTI","New Beetle","Cabriolet","rio"],"Lamborghini":["Diablo"],"Kia":["Sportage","Sephia","Spectra"],"Lotus":["Esprit"],"Mitsubishi":["Challenger","Mirage","Eclipse","Pajero","Diamante","Galant","Montero","Montero Sport"],"Lexus":["RX","LS","LX","GS","ES","SC"],"Buick":["Park Avenue","LeSabre","Regal","Century"],"Lincoln":["Continental","LS","Navigator","Town Car"],"Pontiac":["Grand Prix","Sunfire","Firebird","Montana","Grand Am","Bonneville"],"Ford":["Th!nk","Contour","Explorer Sport Trac","Escape","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","Escort","Excursion","Expedition","Explorer","Explorer Sport","F150","F250","F350","Focus","Mustang","Ranger","Taurus","Windstar"],"Audi":["TT","A4","A6","S4","A8"],"Toyota":["Tundra","Ipsum","4Runner","Avalon","Camry","Celica","Corolla","Echo","Land Cruiser","MR2","RAV4","Sienna","Solara","Tacoma","Tacoma Xtra"],"Nissan":["Xterra","Altima","Frontier","Maxima","Pathfinder","Quest","Sentra"],"Chrysler":["300M","Cirrus","Concorde","Grand Voyager","LHS","Sebring","Town & Country","Voyager"],"Land Rover":["Range Rover","Discovery","Discovery Series II"],"Acura":["Integra","NSX","RL","TL"],"Cadillac":["Catera","DeVille","Eldorado","Escalade","Seville"],"Chevrolet":["2500","3500","Astro","Blazer","Camaro","Cavalier","Corvette","Express 1500","Express 2500","Express 3500","Impala","Lumina","Malibu","Metro","Monte Carlo","Prizm","S10","Silverado 1500","Silverado 2500","Suburban 1500","Suburban 2500","Tahoe","Tracker","Venture"],"Daewoo":["Lanos","Leganza","Nubira"],"Dodge":["Avenger","Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Intrepid","Neon","Ram 1500 Club","Ram 1500","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"GMC":["Envoy","Jimmy","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 2500","Sierra 3500","Sierra 1500","Sonoma","Yukon","Yukon Denali","Yukon XL 1500","Yukon XL 2500"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Sonata","Tiburon"],"Infiniti":["G","I","Q","QX"],"Isuzu":["Amigo","Hombre","Hombre Space","Rodeo","Trooper","VehiCROSS"],"Jaguar":["S-Type","XJ Series","XK Series"],"Jeep":["Cherokee","Grand Cherokee","Wrangler"],"Oldsmobile":["Alero","Bravada","Intrigue","Silhouette"],"Plymouth":["Breeze","Grand Voyager","Neon","Prowler","Voyager"],"Saturn":["L-Series","S-Series"],"Volvo":["C70","S40","S70","S80","V40","V70"]},
"2001":{"Volkswagen":["Passat","Jetta","Eurovan","Golf","Cabriolet","New Beetle","GTI","rio"],"Ford":["Explorer","F-Series","E-Series","Windstar","Escape","Taurus","Ranger","Focus","Escort","Expedition","Mustang","Explorer Sport Trac","TH!NK","Fiesta","Crown Victoria","Econoline E150","Econoline E250","Econoline E350","Excursion","Explorer Sport","F150","F250","F350","ZX2"],"Lamborghini":["Diablo"],"Suzuki":["Vitara","Esteem","Swift","Grand Vitara","XL-7"],"Mazda":["626","B2500","B-Series","Tribute","MX-5","Millenia","MPV","Protege","B-Series Plus","Miata MX-5"],"Audi":["S8","A6","S4","TT","Allroad","A8","A4"],"Porsche":["911","Boxster"],"Saab":["9-3","9-5"],"Pontiac":["Montana","Sunfire","Aztek","Grand Am","Bonneville","Firebird","Grand Prix"],"Subaru":["Impreza","Outback","Legacy","Forester"],"Mercedes-Benz":["CLK-Class","E-Class","M-Class","C-Class","SL-Class","CL-Class","S-Class","SLK-Class"],"Mitsubishi":["Mirage","Galant","Eclipse","Challenger","Lancer","Diamante","Pajero","Montero","Montero Sport"],"Lincoln":["Navigator","Continental","LS","Town Car"],"Lexus":["LX","RX","LS","ES","IS","GS"],"Land Rover":["Discovery","Range Rover","Freelander","Discovery Series II"],"BMW":["3 Series","5 Series","7 Series","525","530","X5","M","M3","M5","Z3","Z8"],"Mercury":["Sable","Mountaineer","Grand Marquis","Cougar","Villager"],"Toyota":["Highlander","4Runner","Avalon","Camry","Celica","Corolla","Echo","Land Cruiser","MR2","Prius","RAV4","Sequoia","Sienna","Solara","Tacoma","Tacoma Xtra","Tundra"],"Honda":["Passport","Accord","CR-V","Prelude","Odyssey","Insight","Civic","S2000"],"Kia":["Sephia","Sportage","Rio","Optima","Spectra"],"Chevrolet":["Silverado","Astro","Blazer","Camaro","Cavalier","Corvette","Express 1500","Express 2500","Express 3500","Impala","Lumina","Malibu","Metro","Monte Carlo","Prizm","S10","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500","Tahoe","Tracker","Venture"],"Acura":["MDX","CL","Integra","NSX","RL","TL"],"Chrysler":["PT Cruiser","300M","Concorde","LHS","Prowler","Sebring","Town & Country","Voyager"],"Lotus":["Esprit"],"Buick":["Park Avenue","Century","Regal","LeSabre"],"Cadillac":["Catera","DeVille","Eldorado","Seville"],"Daewoo":["Lanos","Leganza","Nubira"],"Dodge":["Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Intrepid","Neon","Ram 1500 Club","Ram 1500","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"GMC":["Jimmy","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Sonoma","Yukon","Yukon XL 1500","Yukon XL 2500"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Santa Fe","Sonata","Tiburon","XG300"],"Infiniti":["G","I","Q","QX"],"Isuzu":["Rodeo","Rodeo Sport","Trooper","VehiCROSS"],"Jaguar":["S-Type","XJ Series","XK Series"],"Jeep":["Cherokee","Grand Cherokee","Wrangler"],"Nissan":["Altima","Frontier","Maxima","Pathfinder","Quest","Sentra","Xterra"],"Oldsmobile":["Alero","Aurora","Bravada","Intrigue","Silhouette"],"Plymouth":["Neon"],"Saturn":["L-Series","S-Series"],"Volvo":["C70","S40","S60","S80","V40","V70"]},"2002":{"Suzuki":["Esteem","Vitara","Aerio","Grand Vitara","XL-7"],"Mercedes-Benz":["CLK-Class","S-Class","C-Class","SL-Class","E-Class","SLK-Class","CL-Class","G-Class","M-Class"],"Subaru":["Outback","Legacy","Impreza","Outback Sport","Forester"],"Honda":["Insight","Passport","CR-V","Civic","Accord","S2000","Pilot","Odyssey"],"Mazda":["626","B-Series","Tribute","Protege","Millenia","MPV","MX-5","B-Series Plus","Miata MX-5","Protege5"],"Land Rover":["Range Rover","Discovery","Freelander","Discovery Series II"],"Mitsubishi":["Challenger","Lancer Evolution","Lancer","Eclipse","Mirage","Galant","Diamante","Pajero","Montero","Montero Sport"],"Ford":["Explorer Sport Trac","E-Series","Mustang","Crown Victoria","Escort","Explorer","Ranger","Escape","Expedition","Focus","Thunderbird","F-Series","Windstar","Taurus","Th!nk","Econoline E150","Econoline E250","Econoline E350","Excursion","Explorer Sport","F150","F250","F350","ZX2"],"Mercury":["Mountaineer","Sable","Villager","Cougar","Grand Marquis"],"Lamborghini":["Murciélago"],"Pontiac":["Sunfire","Bonneville","Grand Prix","Firebird","Grand Am","Aztek","Montana"],"Volkswagen":["New Beetle","Jetta","Golf","Eurovan","Passat","GTI","Cabriolet","rio"],"Buick":["Rendezvous","LeSabre","Regal","Park Avenue","Century"],"Audi":["TT","A6","A8","S4","A4","S8","Allroad","S6"],"Saab":["9-3","9-5"],"BMW":["3 Series","5 Series","7 Series","525","530","745","M3","X5","M","M5","Z3","Z8"],"Maserati":["Spyder"],"Lincoln":["Continental","Blackwood","Navigator","Town Car","LS"],"Kia":["Spectra","Sedona","Optima","Sportage","Rio"],"Porsche":["911","Boxster"],"Lexus":["LX","SC","ES","RX","GS","LS","IS"],"GMC":["Envoy","Envoy XL","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Sonoma","Yukon","Yukon XL 1500","Yukon XL 2500"],"Chevrolet":["Avalanche","Silverado","Trailblazer","Corvette","Astro","Avalanche 1500","Avalanche 2500","Blazer","Camaro","Cavalier","Express 1500","Express 2500","Express 3500","Impala","Malibu","Monte Carlo","Prizm","S10","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500","Tahoe","Tracker","Venture"],"Nissan":["Altima","Xterra","Frontier","Maxima","Pathfinder","Quest","Sentra"],"MINI":["MINI","Cooper"],"Acura":["RSX","CL","MDX","NSX","RL","TL"],"Lotus":["Esprit"],"Cadillac":["DeVille","Eldorado","Escalade","Escalade EXT","Seville"],"Chrysler":["300M","Concorde","Prowler","PT Cruiser","Sebring","Town & Country","Voyager"],"Daewoo":["Lanos","Leganza","Nubira"],"Dodge":["Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Intrepid","Neon","Ram 1500","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"HUMMER":["H1"],"Hyundai":["Accent","Elantra","Santa Fe","Sonata","XG350"],"Infiniti":["G","I","Q","QX"],"Isuzu":["Axiom","Rodeo","Rodeo Sport","Trooper"],"Jaguar":["S-Type","XJ Series","XK Series","X-Type"],"Jeep":["Grand Cherokee","Liberty","Wrangler"],"Oldsmobile":["Alero","Aurora","Bravada","Intrigue","Silhouette"],"Saturn":["L-Series","S-Series","VUE"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Echo","Highlander","Land Cruiser","MR2","Prius","RAV4","Sequoia","Sienna","Solara","Tacoma","Tacoma Xtra","Tundra"],"Volvo":["C70","S40","S60","S80","V40","V70"]},"2003":{"Mercury":["Marauder","Mountaineer","Sable","Grand Marquis"],"BMW":["3 Series","5 Series","7 Series","525","530","745","760","Z4","X5","M3","M5","Z8"],"Ford":["Thunderbird","Explorer Sport Trac","Escape","E-Series","Windstar","Taurus","Expedition","F-Series","Escort ZX2","Mustang","Explorer","Focus","Crown Victoria","Freestar","Ranger","E150","E250","E350","Excursion","Explorer Sport","F150","F250","F350","ZX2"],"Suzuki":["Grand Vitara","Aerio","Vitara","XL-7"],"Lexus":["LX","ES","LS","IS","RX","GX","GS","SC"],"Honda":["Accord","Civic","Element","Civic Si","CR-V","Pilot","Civic GX","Odyssey","S2000","Insight"],"Mercedes-Benz":["CLK-Class","E-Class","C-Class","S-Class","M-Class","SL-Class","CL-Class","SLK-Class","G-Class"],"Porsche":["911","Cayenne","Boxster"],"Mitsubishi":["Pajero","Outlander","Galant","Diamante","Lancer","Lancer Evolution","Challenger","Eclipse","Montero","Montero Sport"],"Subaru":["Legacy","Impreza","Forester","Outback","Baja"],"Pontiac":["Grand Am","Aztek","Sunfire","Vibe","Montana","Bonneville","Grand Prix"],"Audi":["A6","A4","S6","TT","RS6","S8","A8","Allroad","RS 6"],"Mazda":["B-Series","MPV","Tribute","Mazda6","MX-5","Protege","B-Series Plus","Miata MX-5","Protege5"],"Volkswagen":["Passat","Touareg","Jetta","Golf","New Beetle","Eurovan","GTI"],"Kia":["Sorento","Optima","Sedona","Spectra","Rio"],"Maserati":["Spyder"],"Buick":["LeSabre","Regal","Park Avenue","Century","Rendezvous"],"Lamborghini":["Gallardo","Murciélago"],"Lincoln":["Navigator","Town Car","Aviator","Blackwood","LS"],"Maybach":["57","62"],"Land Rover":["Discovery","Freelander","Range Rover"],"MINI":["Cooper"],"Volvo":["XC90","C70","S40","S60","S80","V40","V70","XC70"],"Lotus":["Esprit"],"Chevrolet":["Corvette","Silverado","Astro","Avalanche 1500","Avalanche 2500","Blazer","Cavalier","Express 1500","Express 2500","Express 3500","Impala","Malibu","Monte Carlo","S10","Silverado 1500","Silverado 2500","Silverado 3500","SSR","Suburban 1500","Suburban 2500","Tahoe","Tracker","TrailBlazer","Venture"],"Dodge":["Ram","Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Intrepid","Neon","Ram 1500","Ram 2500","Ram 3500","Ram Van 1500","Ram Van 2500","Ram Van 3500","Stratus","Viper"],"Infiniti":["G35","FX","G","I","M","Q","QX"],"Saab":["9-3","9-5"],"Nissan":["350Z","Altima","Frontier","Maxima","Murano","Pathfinder","Sentra","Xterra"],"Acura":["RSX","CL","MDX","NSX","RL","TL"],"Cadillac":["CTS","DeVille","Escalade","Escalade ESV","Escalade EXT","Seville"],"Chrysler":["300M","Concorde","PT Cruiser","Sebring","Town & Country","Voyager"],"GMC":["Envoy","Envoy XL","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Sonoma","Yukon","Yukon XL 1500","Yukon XL 2500"],"HUMMER":["H1","H2"],"Hyundai":["Accent","Elantra","Santa Fe","Sonata","Tiburon","XG350"],"Isuzu":["Ascender","Axiom","Rodeo","Rodeo Sport"],"Jaguar":["S-Type","XJ Series","XK Series","X-Type"],"Jeep":["Grand Cherokee","Liberty","Wrangler"],"Oldsmobile":["Alero","Aurora","Bravada","Silhouette"],"Saturn":["Ion","L-Series","VUE"],"Toyota":["4Runner","Avalon","Camry","Celica","Corolla","Echo","Highlander","Land Cruiser","Matrix","MR2","Prius","RAV4","Sequoia","Sienna","Solara","Tacoma","Tacoma Xtra","Tundra"]},"2004":{"Mitsubishi":["Outlander","Lancer Evolution","Pajero","Diamante","Challenger","Lancer","Eclipse","Galant","Endeavor","Montero","Montero Sport"],"Lotus":["Exige","Elise","Esprit"],"Ford":["F-Series","Escort","Escape","Freestar","Thunderbird","Explorer","Ranger","E-Series","Explorer Sport Trac","Taurus","Windstar","Expedition","Mustang","Focus","Crown Victoria","E150","E250","E350","Excursion","F150","F250","F350"],"Porsche":["911","Cayenne","Boxster","Carrera GT"],"Audi":["A4","A8","S4","Allroad","TT","A6"],"Lexus":["ES","SC","GX","RX","LX","LS","GS","IS"],"Mazda":["B-Series","Mazda6","Tribute","Mazda3","RX-8","MX-5","MPV","B-Series Plus","Miata MX-5"],"Mercedes-Benz":["C-Class","E-Class","SLK-Class","CLK-Class","S-Class","G-Class","CL-Class","SL-Class","M-Class"],"Kia":["Sorento","Optima","Sedona","Amanti","Rio","Spectra"],"MINI":["Cooper"],"BMW":["3 Series","5 Series","6 Series","7 Series","325","525","530","545","645","745","760","X3","X5","Z4","M3"],"Buick":["Park Avenue","Rainier","Century","Rendezvous","Regal","LeSabre"],"Holden":["Monaro"],"Mercury":["Mountaineer","Marauder","Grand Marquis","Sable","Monterey"],"Maserati":["Spyder"],"Spyker":["C8 Spyder","C8 Spyder Wide Body","C8 Laviolette"],"Pontiac":["Sunfire","Vibe","Grand Am","Montana","GTO","Bonneville","Aztek","Grand Prix"],"Suzuki":["Daewoo Lacetti","Vitara","Daewoo Magnus","Grand Vitara","Aerio","Swift","Forenza","Verona","XL-7"],"Honda":["Element","Accord","Civic","CR-V","S2000","Pilot","Insight","Odyssey"],"Subaru":["Baja","Forester","Outback","Legacy","Impreza"],"Infiniti":["G35","FX","G","I","M","Q","QX"],"Lincoln":["Aviator","Navigator","Town Car","LS"],"Volkswagen":["GTI","R32","Golf","New Beetle","Touareg","Passat","Jetta","Phaeton"],"Chevrolet":["Corvette","Monte Carlo","Astro","Avalanche 1500","Avalanche 2500","Aveo","Blazer","Cavalier","Classic","Colorado","Express 1500","Express 2500","Express 3500","Impala","Malibu","S10","Silverado 1500","Silverado 2500","Silverado 3500","SSR","Suburban 1500","Suburban 2500","Tahoe","Tracker","TrailBlazer","Venture"],"Scion":["xA","xB"],"Toyota":["Sienna","Prius","4Runner","Avalon","Camry","Celica","Corolla","Echo","Highlander","Land Cruiser","Matrix","MR2","RAV4","Sequoia","Solara","Tacoma","Tacoma Xtra","Tundra"],"Cadillac":["SRX","CTS","DeVille","Escalade","Escalade ESV","Escalade EXT","Seville","XLR"],"Lamborghini":["Gallardo","Murciélago"],"Land Rover":["Range Rover","Freelander","Discovery"],"Saab":["9-3","9-5"],"Nissan":["Titan","350Z","Altima","Frontier","Maxima","Murano","Pathfinder","Pathfinder Armada","Quest","Sentra","Xterra"],"Maybach":["57","62"],"Acura":["TSX","MDX","NSX","RL","RSX","TL"],"Corbin":["Sparrow"],"Chrysler":["300M","Concorde","Crossfire","Pacifica","PT Cruiser","Sebring","Town & Country"],"Dodge":["Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Intrepid","Neon","Ram 1500","Ram 2500","Ram 3500","Stratus","Viper"],"GMC":["Canyon","Envoy","Envoy XL","Envoy XUV","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Sonoma","Yukon","Yukon XL 1500","Yukon XL 2500"],"HUMMER":["H1","H2"],"Hyundai":["Accent","Elantra","Santa Fe","Sonata","Tiburon","XG350"],"Isuzu":["Ascender","Axiom","Rodeo"],"Jaguar":["S-Type","XJ Series","XK Series","X-Type"],"Jeep":["Grand Cherokee","Liberty","Wrangler"],"Oldsmobile":["Alero","Bravada","Silhouette"],"Saturn":["Ion","L-Series","VUE"],"Volvo":["C70","S40","S60","S80","V40","V70","XC70","XC90"]},"2005":{"Scion":["xB","tC","xA"],"Volkswagen":["Phaeton","Passat","Touareg","GTI","Jetta","New Beetle","Golf"],"Acura":["TSX","RL","MDX","NSX","RSX","TL"],"Pontiac":["Aztek","Grand Am","Montana","Vibe","Sunfire","G6","Bonneville","Daewoo Kalos","Monterey","GTO","Grand Prix","Montana SV6"],"Ford":["GT","F-Series","E-Series","Thunderbird","Escape","Focus","Freestar","Crown Victoria","Freestyle","Ranger","Taurus","Explorer","Five Hundred","Explorer Sport Trac","Mustang","Expedition","E150","E250","E350","Excursion","F150","F250","F350"],"Buick":["LaCrosse","Terraza","Rainier","Park Avenue","Rendezvous","LeSabre","Century"],"Porsche":["911","Cayenne","Boxster","Carrera GT"],"Suzuki":["Aerio","Grand Vitara","Daewoo Magnus","Swift","Daewoo Lacetti","Reno","Forenza","Verona","XL-7"],"Mercedes-Benz":["CLK-Class","E-Class","CL-Class","C-Class","SLK-Class","M-Class","S-Class","SLR McLaren","G-Class","SL-Class"],"BMW":["3 Series","5 Series","6 Series","7 Series","325","330","525","530","545","645","745","760","Z4","M3","X3","X5"],"Mitsubishi":["Endeavor","Diamante","Lancer","Pajero","Outlander","Lancer Evolution","Eclipse","Galant","Montero"],"Honda":["Civic","Accord","S2000","CR-V","Insight","Element","Pilot","Odyssey","Civic Si"],"Audi":["TT","A4","S4","A8","Allroad","A6"],"Mazda":["MX-5","Mazda3","B-Series","Mazda6","Tribute","RX-8","MPV","Miata MX-5"],"Cadillac":["SRX","CTS","DeVille","Escalade","Escalade ESV","Escalade EXT","STS","XLR"],"Maserati":["Spyder","Gran Sport","Quattroporte","Coupe","GranSport"],"Lexus":["RX","GS","IS","LX","GX","LS","ES","SC"],"Chrysler":["300","300C","Crossfire","Pacifica","PT Cruiser","Sebring","Town & Country"],"Mercury":["Sable","Mountaineer","Montego","Grand Marquis","Mariner","Monterey"],"Lincoln":["Aviator","Town Car","Navigator","LS"],"Chevrolet":["Corvette","Monte Carlo","Astro","Avalanche 1500","Avalanche 2500","Aveo","Blazer","Cavalier","Classic","Cobalt","Colorado","Equinox","Express 1500","Express 2500","Express 3500","Impala","Malibu","Silverado 1500","Silverado 2500","Silverado 3500","SSR","Suburban 1500","Suburban 2500","Tahoe","TrailBlazer","Uplander","Venture"],"Subaru":["Outback","Baja","Legacy","Impreza","Forester"],"Land Rover":["Discovery","Freelander","Range Rover","LR3"],"Spyker Cars":["C8"],"Kia":["Sedona","Spectra","Sportage","Amanti","Optima","Sorento","Rio"],"Lamborghini":["Murciélago","Gallardo"],"Maybach":["57","62","57S"],"MINI":["Cooper"],"Saab":["9-7X","9-5","9-3","9-2X"],"Dodge":["Magnum","Caravan","Dakota Club","Dakota","Durango","Grand Caravan","Neon","Ram 1500","Ram 2500","Ram 3500","Stratus","Viper"],"Toyota":["Tacoma","4Runner","Avalon","Camry","Celica","Corolla","Echo","Highlander","Land Cruiser","Matrix","MR2","Prius","RAV4","Sequoia","Sienna","Solara","Tundra"],"Aston Martin":["DB9","Vanquish S"],"Bentley":["Arnage","Continental"],"GMC":["Canyon","Envoy","Envoy XL","Envoy XUV","Safari","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon","Yukon XL 1500","Yukon XL 2500"],"HUMMER":["H2"],"Hyundai":["Accent","Elantra","Santa Fe","Sonata","Tiburon","Tucson","XG350"],"Infiniti":["FX","G","Q","QX"],"Isuzu":["Ascender"],"Jaguar":["S-Type","XJ Series","XK Series","X-Type"],"Jeep":["Grand Cherokee","Liberty","Wrangler"],"Lotus":["Elise","Exige"],"Nissan":["350Z","Altima","Armada","Frontier","Maxima","Murano","Pathfinder","Quest","Sentra","Titan","Xterra"],"Panoz":["Esperante"],"Rolls-Royce":["Phantom"],"Saturn":["Ion","L-Series","Relay","VUE"],"Volvo":["S40","S60","S80","V50","V70","XC70","XC90"]},"2006":{"GMC":["Sierra Denali","Yukon Denali","Sierra 3500HD","Sierra 1500","Sierra 2500HD","Yukon XL","Envoy","Canyon","Savana Cargo Van","Sierra Hybrid","Yukon","Savana","Envoy XL","Savana 1500","Savana 2500","Savana 3500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Mazda":["B-Series","Tribute","Mazda6","Mazda6 5-Door","Mazda5","RX-8","Mazda6 Sport","MPV","Mazda3","Mazdaspeed6","MX-5","Miata MX-5"],"Bentley":["Arnage","Azure","Continental GT","Continental Flying Spur","Continental"],"BMW":["3 Series","5 Series","6 Series","7 Series","325","330","525","530","550","650","750","760","M3","M5","M6","X3","X5","Z4","M Roadster","Z4 M"],"Mercedes-Benz":["SL-Class","C-Class","CLS-Class","E-Class","CL-Class","SLK-Class","S-Class","M-Class","G55 AMG","G-Class","CLK-Class","SL65 AMG","SLR McLaren","R-Class"],"Hyundai":["Tucson","Azera","Elantra","Sonata","Accent","Santa Fe","Tiburon"],"Cadillac":["XLR","STS","SRX","DTS","XLR-V","Escalade EXT","Escalade","CTS-V","CTS","STS-V","Escalade ESV"],"Jeep":["Liberty","Wrangler","Grand Cherokee","Commander"],"Honda":["Civic","Pilot","Element","Ridgeline","S2000","Odyssey","CR-V","Accord","Insight","Civic Si"],"Suzuki":["XL7","Daewoo Magnus","Aerio","Grand Vitara","Daewoo Lacetti","Reno","Swift","Forenza","Verona","XL-7"],"Buick":["Rendezvous","Lucerne","Rainier","LaCrosse","Terraza"],"Volkswagen":["Touareg","New Beetle","Rabbit","Golf","Phaeton","Passat","GTI","Jetta"],"Kia":["Sorento","Optima","Spectra","Sportage","Rio","Spectra5","Amanti","Sedona"],"Pontiac":["Montana","G6","Vibe","Grand Prix","Torrent","Solstice","Daewoo Kalos","GTO","Montana SV6"],"Mitsubishi":["Galant","Lancer","Outlander","Pajero","Eclipse","Raider","Endeavor","Lancer Evolution","Montero"],"Jaguar":["XK","X-Type","XJ","S-Type"],"Toyota":["Sequoia","Corolla","RAV4","Land Cruiser","4Runner","Tundra","Tacoma","Prius","Avalon","Yaris","Camry","Matrix","Camry Solara","Sienna","Highlander","Solara"],"Subaru":["Outback","Legacy","Impreza","Tribeca","Baja","Forester","B9 Tribeca"],"Chevrolet":["Impala","Suburban","Monte Carlo","Silverado 3500HD","Equinox","HHR Panel","Uplander","Malibu Maxx","Corvette","Cobalt","Malibu","HHR","Trailblazer","Colorado","Silverado Hybrid","Aveo","Silverado 2500","Silverado","Tahoe","Express","Avalanche","Avalanche 1500","Avalanche 2500","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 3500","SSR","Suburban 1500","Suburban 2500"],"Ford":["Expedition","Freestyle","F-250 Super Duty","Escape","F-350 Super Duty","F-Series","E-350 Super Duty","Thunderbird","E-Series","Explorer","Freestar","Five Hundred","Mustang","Focus","E250","Taurus","E-350 Super Duty Van","GT","Ranger","Crown Victoria","Fusion","Explorer Sport Trac","E150","E350","F150","F250","F350"],"Audi":["A3","S4","TT","A4","A6","S8","A8"],"Infiniti":["FX","G35","M","G","Q","QX"],"Land Rover":["Range Rover Sport","Discovery","Range Rover","LR3"],"Lexus":["GS","RX","IS","RX Hybrid","ES","SC","GX","LX","LS"],"Volvo":["V50","XC90","XC70","S40","C70","V70","S80","S60"],"Porsche":["911","Cayenne","Cayman","Boxster"],"Mercury":["Mountaineer","Mariner","Grand Marquis","Monterey","Montego","Milan"],"Hummer":["H2 SUT","H2 SUV","H3"],"HUMMER":["H1","H2"],"Nissan":["Quest","Maxima","Frontier","350Z","Xterra","Murano","Sentra","350Z Roadster","Titan","Altima","Armada","Pathfinder"],"Chrysler":["300","PT Cruiser","Town & Country","Pacifica","Sebring","Crossfire Roadster","Crossfire"],"Lincoln":["Town Car","Zephyr","Navigator","Mark LT","LS"],"Scion":["xA","xB","tC"],"Dodge":["Ram 3500","Sprinter","Viper","Charger","Dakota","Magnum","Durango","Caravan","Ram 2500","Ram 1500","Dakota Club","Grand Caravan","Stratus"],"Acura":["MDX","TL","RL","TSX","RSX"],"Maybach":["57","62"],"Aston Martin":["DB9 Volante","V8 Vantage","DB9","Vanquish S","Vantage"],"Lamborghini":["Gallardo","Murciélago"],"Spyker":["C8 Double 12 S"],"Saab":["9-2X","9-5","9-3","9-7X"],"Ferrari":["F430","612 Scaglietti","F430 Spider"],"Maserati":["Quattroporte","Gran Sport","Coupe","GranSport"],"Spyker Cars":["C8"],"MINI":["Cooper"],"Morgan":["Aero 8"],"Peugeot":["207"],"Panoz":["Esperante"],"Isuzu":["i-Series","Ascender","i-280","i-350"],"Rolls-Royce":["Phantom"],"Saturn":["Vue","Ion","Relay"],"Lotus":["Elise","Exige"]},"2007":{"Chevrolet":["Corvette","Colorado","Equinox","Silverado","Uplander","Cobalt SS","Avalanche","Cobalt","Tahoe","Suburban","HHR","Malibu","Monte Carlo","Aveo","Trailblazer","Express","Impala","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500"],"Volkswagen":["GTI","Touareg","Rabbit","Jetta","New Beetle","Eos","Passat"],"Ford":["Focus","Escape","Crown Victoria","Fusion","Mustang","F-Series Super Duty","Freestar","E-Series","Taurus","Explorer Sport Trac","GT500","F-Series","Freestyle","Five Hundred","Ranger","Explorer","Edge","Expedition","E150","E250","E350","Expedition EL","F150","F250","F350"],"Mercedes-Benz":["C-Class","G-Class","M-Class","R-Class","CL-Class","E-Class","SLK-Class","SL-Class","CLK-Class","GL-Class","CLS-Class","SLR McLaren","S-Class"],"BMW":["3 Series","5 Series","6 Series","7 Series","530","M6","M Roadster","M5","X3","X5","Alpina B7","Z4 M"],"Dodge":["Ram","Charger","Magnum","Dakota","Caravan","Nitro","Caliber","Durango","Dakota Club","Grand Caravan","Ram 1500","Ram 2500","Ram 3500"],"Lexus":["IS","SC","LX","RX","RX Hybrid","GX","GS","LS","ES"],"Kia":["Sedona","Spectra","Optima","Sportage","Carens","Rio","Sorento","Amanti","Rondo"],"Toyota":["Matrix","Avalon","Camry Solara","Yaris","Highlander Hybrid","Tundra","Camry Hybrid","Sequoia","Highlander","Tacoma","Prius","Corolla","Land Cruiser","FJ Cruiser","Sienna","4Runner","Camry","RAV4","Solara","TundraMax"],"Mazda":["B-Series","Mazdaspeed6","Mazda6","Mazda3","RX-8","CX-7","MX-5","Mazdaspeed 3","Mazda5","CX-9","Miata MX-5"],"Audi":["Q7","A3","A4","A8","A6","RS4","S4","S8","S6","RS 4"],"Jaguar":["XK","X-Type","S-Type","XJ"],"Jeep":["Compass","Liberty","Patriot","Wrangler","Commander","Grand Cherokee"],"Buick":["LaCrosse","Rendezvous","Terraza","Rainier","Lucerne"],"Aston Martin":["V8 Vantage","DB9","Vantage"],"Isuzu":["i-Series","Ascender","i-290","i-370"],"Hyundai":["Veracruz","Accent","Entourage","Azera","Sonata","Tiburon","Elantra","Santa Fe","Tucson"],"Foose":["Hemisfear"],"Infiniti":["G35","FX","QX56","M","G","QX"],"Panoz":["Esperante"],"Mercury":["Montego","Mariner","Monterey","Milan","Grand Marquis","Mountaineer"],"Honda":["Pilot","Ridgeline","Civic","Odyssey","S2000","Fit","Accord","CR-V","Element"],"Saab":["9-7X","9-3","9-5"],"Nissan":["Murano","Armada","Versa","Titan","350Z","Frontier","Altima","Xterra","Maxima","Sentra","Quest","Pathfinder"],"GMC":["Savana","Acadia","Envoy","Sierra","Yukon","Canyon","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Maybach":["57","62"],"Spyker Cars":["C8"],"Scion":["tC"],"Hummer":["H3","H2"],"Suzuki":["Daewoo Lacetti","XL-7","Reno","SX4","Aerio","Grand Vitara","Forenza","XL7"],"Ferrari":["F430","599 GTB Fiorano","612 Scaglietti"],"Subaru":["Legacy","Impreza","Outback","Forester","Tribeca","B9 Tribeca"],"Lincoln":["MKX","Mark LT","Navigator","MKZ","Town Car","Navigator L"],"Saturn":["Outlook","VUE","Aura","Sky","Ion","Relay"],"Pontiac":["G6","Grand Prix","Solstice","Vibe","G5","Torrent"],"Cadillac":["CTS","XLR-V","SRX","Escalade","XLR","CTS-V","STS","DTS","Escalade ESV","Escalade EXT"],"Mitsubishi":["Eclipse","Lancer","Raider","Galant","Endeavor","Outlander"],"Volvo":["V70","S40","S60","S80","XC70","C70","V50","XC90"],"Peugeot":["207"],"Porsche":["911","Boxster","Cayman"],"Bentley":["Continental GT","Azure","Continental GTC","Continental Flying Spur","Arnage","Continental"],"Acura":["RDX","RL","MDX","TL","TSX"],"Lamborghini":["Gallardo","Murciélago"],"MINI":["Cooper"],"Land Rover":["Range Rover Sport","Range Rover","Discovery","LR3"],"Chrysler":["300","Town & Country","Sebring","Aspen","Crossfire","Pacifica","PT Cruiser"],"Maserati":["Quattroporte"],"Morgan":["Aero 8"],"Rolls-Royce":["Phantom"],"Lotus":["Elise","Exige"]},"2008":{"Lincoln":["Navigator","MKX","Town Car","Mark LT","MKZ","Navigator L"],"Volvo":["S80","XC70","C70","V50","C30","XC90","S60","S40","V70"],"Mercedes-Benz":["SL-Class","CLS-Class","E-Class","C-Class","CLK-Class","M-Class","G-Class","S-Class","CL-Class","SLR McLaren","SLK-Class","R-Class","GL-Class"],"Rolls-Royce":["Phantom"],"Mazda":["MX-5","Tribute","B-Series","CX-7","Mazdaspeed 3","Mazda3","Mazda5","Mazda6","RX-8","CX-9","Miata MX-5"],"BMW":["1 Series","3 Series","5 Series","6 Series","7 Series","M3","M Roadster","M5","M6","X5","Z4","X3","X6","Alpina B7","Z4 M"],"Audi":["RS4","S4","A4","S8","Q7","TT","S5","A8","R8","A5","A6","S6","A3","RS 4"],"Ford":["Taurus X","Fusion","GT500","Edge","Taurus","Mustang","Escape","Focus","F-Series","Crown Victoria","Explorer","Ranger","F-Series Super Duty","E-Series","Expedition","Explorer Sport Trac","E150","E250","E350","Expedition EL","F150","F250","F350","F450"],"Porsche":["911","Boxster","Cayman","Cayenne"],"Saab":["9-3","9-5","9-7X"],"GMC":["Canyon","Sierra","Savana","Acadia","Yukon","Envoy","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Mitsubishi":["Galant","Endeavor","Outlander","Eclipse","Lancer Evolution","Lancer","Raider"],"Hyundai":["Tucson","Accent","Elantra","Santa Fe","Azera","Tiburon","Entourage","Veracruz","Sonata"],"Toyota":["Prius","Highlander","Sequoia","Corolla","Yaris","Camry Solara","Camry","Land Cruiser","Sienna","RAV4","Camry Hybrid","Tundra","4Runner","Matrix","Tacoma","FJ Cruiser","Avalon","Solara","TundraMax"],"Suzuki":["XL-7","Daewoo Lacetti","SX4","Reno","Grand Vitara","Forenza","XL7"],"Jeep":["Liberty","Commander","Patriot","Grand Cherokee","Compass","Wrangler"],"Bentley":["Continental GTC","Arnage","Continental Flying Spur","Continental GT","Azure","Continental"],"Volkswagen":["Rabbit","New Beetle","Jetta","GLI","GTI","Passat","Touareg","Eos","R32","Touareg 2"],"Cadillac":["STS-V","Escalade","CTS","XLR","DTS","SRX","STS","XLR-V","Escalade ESV","Escalade EXT"],"Land Rover":["Freelander","Discovery","Range Rover","Range Rover Sport","LR2","LR3"],"Lexus":["ES","SC","GS","IS-F","LX","LS","GX","RX","IS","RX Hybrid","IS F"],"Lamborghini":["Reventón","Murciélago","Gallardo","Murciélago LP640"],"Subaru":["Impreza","Forester","Legacy","Outback","Tribeca"],"Nissan":["Versa","Maxima","Rogue","Altima","Sentra","Titan","Pathfinder","Armada","Frontier","350Z","Quest","Xterra"],"Honda":["Odyssey","CR-V","Fit","Civic","Element","Accord","Pilot","Ridgeline","S2000"],"Chrysler":["300","Sebring","Town & Country","Crossfire","Aspen","Pacifica","PT Cruiser"],"Infiniti":["QX56","G35","G37","M","EX","FX","G","QX"],"Chevrolet":["HHR","Colorado","Trailblazer","Corvette","Cobalt SS","Cobalt","Tahoe","Malibu","Avalanche","Silverado","Impala","Suburban","Equinox","Aveo","Uplander","Express","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500"],"Dodge":["Ram","Nitro","Sprinter","Avenger","Dakota","Charger","Viper","Challenger","Caliber","Caravan","Magnum","Durango","Grand Caravan","Ram 1500","Ram 2500","Ram 3500"],"Mercury":["Sable","Grand Marquis","Milan","Mariner","Mountaineer"],"Aston Martin":["DB9","DBS","V8 Vantage","Vantage"],"Jaguar":["XK","S-Type","X-Type","XJ"],"Kia":["Amanti","Carens","Spectra","Sportage","Rio5","Rio","Sorento","Sedona","Optima","Rondo"],"Saturn":["Astra","VUE","Aura","Sky","Outlook"],"Isuzu":["i-Series","Ascender","i-290","i-370"],"Pontiac":["G6","Solstice","Torrent","G5","G8","Grand Prix","Vibe"],"Morgan":["Aero 8"],"Acura":["RDX","TSX","TL","MDX","RL"],"Ferrari":["599 GTB Fiorano","F430","430 Scuderia","612 Scaglietti"],"MINI":["Cooper","Clubman","Cooper Clubman"],"Hummer":["H2","H3"],"Buick":["Enclave","Lucerne","LaCrosse"],"Panoz":["Esperante"],"Aptera":["Typ-1"],"Maybach":["57","62"],"Maserati":["GranTurismo","Quattroporte"],"Smart":["Fortwo"],"Scion":["tC","xB","xD"],"Lotus":["Elise","Exige"]},"2009":{"Mercedes-Benz":["E-Class","SL-Class","GL-Class","CLK-Class","S-Class","CLS-Class","CL-Class","C-Class","SLK55 AMG","R-Class","M-Class","CL65 AMG","SLK-Class","SLR McLaren","G-Class"],"Saab":["9-5","9-3","9-7X"],"Audi":["A4","S5","A3","R8","TT","A6","S6","A8","Q7","S8","S4","A5","Q5"],"Honda":["Civic","Ridgeline","CR-V","S2000","Accord","Fit","Pilot","Element","Odyssey"],"Hyundai":["Santa Fe","Accent","Tucson","Entourage","Veracruz","Elantra","Tiburon","Sonata","Genesis","Azera"],"Hummer":["H3","H2"],"HUMMER":["H3T"],"Subaru":["Outback","Impreza","Tribeca","Forester","Legacy"],"BMW":["1 Series","3 Series","5 Series","6 Series","7 Series","Z4 M Roadster","Z4 M","M3","M5","M6","X3","X6","X5","Z4"],"Chevrolet":["Aveo","Corvette","HHR","Cobalt","Cobalt SS","Silverado","Tahoe","Trailblazer","Express","Equinox","Suburban","Colorado","Traverse","Malibu","Avalanche","Impala","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500"],"Volkswagen":["Passat","R32","CC","GLI","Eos","Jetta","GTI","New Beetle","Touareg","Rabbit","Tiguan","Routan","Touareg 2"],"Mazda":["Mazdaspeed 3","Mazda3","B-Series","Tribute","CX-9","MX-5","Mazda6","RX-8","CX-7","Mazda5","Miata MX-5"],"GMC":["Sierra","Savana","Yukon","Canyon","Acadia","Envoy","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Kia":["Carens","Spectra","Optima","Rio","Amanti","Sorento","Sedona","Mohave/Borrego","Sportage","Borrego","Rondo"],"Infiniti":["M","QX56","EX","FX","G37","G","QX"],"Scion":["xB","xD","tC"],"Volvo":["V70","XC60","C30","S80","XC70","S40","XC90","S60","V50","C70"],"Toyota":["Highlander","Land Cruiser","Camry","Corolla","Tacoma","RAV4","Sequoia","FJ Cruiser","Venza","Prius","Sienna","Avalon","Camry Hybrid","Yaris","Matrix","4Runner","TundraMax","Tundra"],"Lexus":["IS-F","RX","LS","GX","IS","LX","ES","GS","SC","IS F"],"Cadillac":["Escalade","DTS","CTS-V","SRX","STS","XLR","CTS","STS-V","XLR-V","Escalade ESV","Escalade EXT"],"Lamborghini":["Gallardo","Murciélago"],"Buick":["LaCrosse","Lucerne","Enclave"],"Pontiac":["G8","G6","G5","G3","Torrent","Vibe","Solstice"],"Ferrari":["612 Scaglietti","430 Scuderia","California","599 GTB Fiorano","F430"],"Acura":["TL","RDX","TSX","RL","MDX"],"Maybach":["57","62","Landaulet"],"Dodge":["Challenger","Charger","Ram","Caliber","Nitro","Durango","Journey","Sprinter","Avenger","Viper","Caravan","Dakota","Grand Caravan","Ram 1500","Ram 2500","Ram 3500"],"Nissan":["Frontier","Versa","Pathfinder","350Z","Murano","Altima","Xterra","Rogue","Quest","Cube","GT-R","Maxima","Titan","Armada","370Z","Sentra"],"Land Rover":["Range Rover","Freelander","Range Rover Sport","LR2","LR3"],"Chrysler":["300","Sebring","Aspen","Town & Country","PT Cruiser"],"Ford":["E-Series","F-Series Super Duty","Fusion","Escape","Focus","Ranger","GT500","Taurus","Crown Victoria","Taurus X","Explorer Sport Trac","Edge","Expedition","F-Series","Mustang","Flex","Explorer","E150","E250","E350","Expedition EL","F150","F250","F350","F450"],"Bentley":["Continental GT","Arnage","Brooklands","Azure","Continental GTC","Continental Flying Spur","Continental"],"Morgan":["Aero 8"],"Suzuki":["SX4","Equator","Grand Vitara","XL7"],"Mitsubishi":["Raider","Galant","Tundra","Endeavor","Eclipse","Lancer","Outlander"],"Lotus":["Exige","Elise"],"Jeep":["Wrangler","Patriot","Compass","Grand Cherokee","Commander","Liberty"],"Mercury":["Mariner","Grand Marquis","Mountaineer","Milan","Sable"],"Lincoln":["Town Car","Navigator","MKS","MKZ","MKX","Navigator L"],"Jaguar":["XJ","XK","XF"],"Maserati":["Quattroporte","GranTurismo"],"Smart":["Fortwo"],"Saturn":["Outlook","Aura","VUE","Astra","Sky"],"Porsche":["911","Cayenne","Boxster","Cayman"],"Isuzu":["Ascender"],"MINI":["Cooper","Clubman","Cooper Clubman"],"Aptera":["2e","Typ-1"],"Rolls-Royce":["Phantom"],"Bugatti":["Veyron"],"Aston Martin":["DBS","V8 Vantage","DB9","Vantage"]},"2010":{"BMW":["1 Series","3 Series","5 Series","6 Series","7 Series","M3","X6","M6","Z4","X3","X5","M5","X5 M","X6 M"],"Honda":["CR-V","Civic","Ridgeline","Accord","Odyssey","Pilot","Insight","Fit","Element","Accord Crosstour"],"Volkswagen":["Jetta","Passat","Routan","Eos","Touareg","Rabbit","GTI","CC","Tiguan","Golf","New Beetle"],"Mercedes-Benz":["SLK-Class","Sprinter","G-Class","CLS-Class","C-Class","E-Class","GL-Class","GLK-Class","CL-Class","R-Class","S-Class","M-Class"],"Aston Martin":["Rapide","V8 Vantage","DBS","DB9","Vantage"],"Nissan":["Altima","Pathfinder","Armada","370Z","Frontier","GT-R","Xterra","Rogue","Versa","Sentra","Cube","Murano","Maxima","Titan"],"Hyundai":["Santa Fe","Veracruz","Tucson","Accent","Sonata","Elantra","Genesis","Azera","Genesis Coupe"],"Porsche":["911","Panamera","Cayman","Cayenne","Boxster"],"Mercury":["Milan","Mariner","Grand Marquis","Mountaineer"],"Land Rover":["Freelander","Range Rover Sport","Discovery","Range Rover","LR2","LR4","Defender Ice Edition"],"Mazda":["CX-9","Mazdaspeed 3","RX-8","CX-7","Tribute","Mazda3","Mazda6","Mazda5","MX-5","Miata MX-5"],"Toyota":["Tundra","Camry Hybrid","Avalon","Sienna","FJ Cruiser","Matrix","RAV4","Highlander","Yaris","Camry","Venza","Tacoma","Prius","Sequoia","4Runner","Land Cruiser","Corolla","TundraMax"],"Kia":["Soul","Optima","Sportage","Sedona","Forte","Rio","Rondo"],"Infiniti":["QX56","M","G37","EX","FX","G","QX"],"Chevrolet":["Aveo","Traverse","Equinox","Silverado","HHR","Express","Corvette","Impala","Colorado","Suburban","Tahoe","Avalanche","Malibu","Camaro","Cobalt","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500"],"Subaru":["Impreza","Tribeca","Legacy","Forester","Impreza WRX","Outback"],"Maybach":["57","62","Landaulet"],"Cadillac":["Escalade","SRX","DTS","CTS-V","CTS","STS","Escalade ESV","Escalade EXT"],"Audi":["Q7","Q5","S5","TT","A4","A5","A8","R8","S4","A6","A3","S6"],"Lincoln":["Town Car","MKX","Navigator","MKZ","MKT","MKS","Navigator L"],"Rolls-Royce":["Phantom","Ghost"],"Ford":["Escape","Mustang","Transit Connect","F-Series Super Duty","E-Series","Focus","Explorer","Flex","Edge","F-Series","Fusion","Crown Victoria","Ranger","Taurus","Expedition","E150","E250","E350","Expedition EL","Explorer Sport Trac","F150","F250","F350","F450"],"Dodge":["Caravan","Viper","Charger","Journey","Caliber","Ram","Challenger","Nitro","Avenger","Dakota","Grand Caravan","Ram 1500","Ram 2500","Ram 3500"],"Lexus":["LS","GS","IS","IS-F","LS Hybrid","LX","RX Hybrid","HS","GX","RX","ES","IS F","SC"],"Mitsubishi":["Lancer Evolution","Eclipse","Lancer","Galant","Endeavor","Outlander"],"Ferrari":["458 Italia","California","612 Scaglietti","599 GTB Fiorano"],"Maserati":["Quattroporte","GranTurismo"],"Scion":["xB","tC","xD"],"Volvo":["C30","S40","V50","XC90","S60","C70","XC70","S80","XC60","V70"],"Jeep":["Grand Cherokee","Commander","Patriot","Compass","Liberty","Wrangler"],"Lotus":["Exige","Elise","Evora"],"Chrysler":["300","Sebring","Town & Country","PT Cruiser"],"GMC":["Savana","Sierra","Canyon","Terrain","Yukon","Acadia","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Jaguar":["XF","XK","XJ"],"Bentley":["Brooklands","Azure","Continental Flying Spur","Continental Super","Continental GT","Continental GTC","Azure T","Continental"],"Suzuki":["SX4","Grand Vitara","Equator","Kizashi"],"Saab":["9-3","9-5"],"Buick":["Lucerne","LaCrosse","Enclave"],"Lamborghini":["Gallardo","Murciélago"],"MINI":["Clubman","Cooper","Cooper Clubman"],"Acura":["TL","RL","ZDX","TSX","MDX","RDX"],"Tesla":["Roadster"],"Smart":["Fortwo"],"Aptera":["Type-1h"],"HUMMER":["H3","H3T"],"Pontiac":["G3","G6","Vibe"],"Saturn":["Outlook","VUE"]},"2011":{"Ford":["Taurus","Escape","F-Series Super Duty","Mustang","Fusion","E-Series","Fiesta","Explorer","Focus","F-Series","Ranger","Transit Connect","Edge","Expedition","Flex","E150","E250","E350","Expedition EL","F150","F250","F350","F450","Crown Victoria"],"Toyota":["Yaris","4Runner","Camry","Sequoia","Land Cruiser","Avalon","Matrix","Tacoma","Prius","Highlander","Tundra","FJ Cruiser","RAV4","Corolla","Sienna","Venza","Camry Hybrid","TundraMax"],"Jaguar":["XJ","XK","XF"],"Mazda":["CX-9","Mazda3","RX-8","Mazda6","Mazdaspeed 3","Mazda2","MX-5","Tribute","CX-7","Miata MX-5"],"Mercedes-Benz":["GLK-Class","S-Class","CLS-Class","SLK-Class","E-Class","GL-Class","C-Class","G-Class","CL-Class","SLS AMG","R-Class","Sprinter","M-Class","SL-Class","SLS-Class","Sprinter 2500","Sprinter 3500"],"Audi":["S6","S5","Q5","A6","TT","A4","A5","R8","A8","A3","Q7","S4"],"Honda":["Accord","Odyssey","Civic","Pilot","Element","Fit","CR-Z","Ridgeline","CR-V","Insight","Accord Crosstour"],"Jeep":["Patriot","Grand Cherokee","Liberty","Wrangler","Compass"],"BMW":["1 Series","3 Series","5 Series","7 Series","X6","M3","X3","X5","Z4","X5 M","X6 M"],"Lexus":["RX Hybrid","IS","GX","LS Hybrid","GS","LS","IS-F","CT","RX","HS","LX","ES","IS F"],"Dodge":["Challenger","Ram","Journey","Avenger","Durango","Dakota","Caliber","Nitro","Caravan","Charger","Grand Caravan"],"Nissan":["Pathfinder","Altima","Quest","Cube","Frontier","Sentra","Titan","Maxima","370Z","GT-R","Rogue","Xterra","Leaf","Armada","Versa","JUKE","Murano"],"GMC":["Sierra","Yukon","Canyon","Savana","Acadia","Terrain","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"MINI":["Clubman","Countryman","Cooper","Cooper Clubman","Cooper Countryman"],"Acura":["RDX","TSX","ZDX","RL","MDX","TL"],"Chevrolet":["Tahoe","Corvette","Equinox","Suburban","Malibu","Volt","Aveo","HHR","Cruze","Express","Camaro","Silverado","Traverse","Colorado","Avalanche","Impala","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500"],"Aston Martin":["V8 Vantage S","V8 Vantage","Rapide","DBS","V12 Vantage","Virage","DB9","Vantage"],"Bentley":["Mulsanne","Continental Super","Continental GTC","Continental Flying Spur","Continental"],"Volkswagen":["Touareg","Golf","Routan","CC","Jetta","GTI","Eos","Tiguan"],"Infiniti":["EX","G25","G37","QX56","FX","M","IPL G","G","QX"],"Subaru":["Legacy","Impreza WRX","Impreza","Outback","Tribeca","Forester"],"Saab":["9-3","9-5","9-4X"],"Porsche":["911","Cayenne","Panamera","Boxster","Cayman"],"Land Rover":["Freelander","Range Rover Sport","Range Rover","Discovery","LR2","LR4"],"Buick":["LaCrosse","Regal","Lucerne","Enclave"],"Scion":["tC","xB","xD"],"Lotus":["Elise","Evora","Exige"],"Kia":["Optima","Forte","Rio","Sedona","Sorento","Sportage","Soul"],"Hyundai":["Elantra","Sonata","Genesis","Santa Fe","Tucson","Equus","Veracruz","Accent","Azera","Genesis Coupe"],"Suzuki":["Grand Vitara","SX4","Kizashi","Equator"],"Smart":["Fortwo"],"Volvo":["C30","V50","XC90","S60","XC60","XC70","C70","S80","S40"],"Rolls-Royce":["Phantom","Ghost"],"Lincoln":["Navigator","MKT","MKS","MKZ","Town Car","MKX","Navigator L"],"Mitsubishi":["Eclipse","Outlander","Endeavor","Lancer","Galant","Lancer Evolution","Outlander Sport"],"Mercury":["Mariner","Grand Marquis","Milan"],"Maserati":["GranTurismo","Quattroporte"],"Chrysler":["200","300","Town & Country"],"Cadillac":["DTS","CTS-V","CTS","STS","SRX","Escalade","Escalade ESV","Escalade EXT"],"Maybach":["57","62","Landaulet"],"Ferrari":["458 Italia"],"Bugatti":["Veyron"],"Lamborghini":["Gallardo"],"Tesla":["Roadster"],"Ram":["1500","2500","3500","Dakota"]},
  "2012":{"Porsche":["911","Cayenne","Panamera","Boxster","Cayman"],"Nissan":["Altima","370Z","Murano","Armada","Pathfinder","Leaf","Xterra","Titan","JUKE","Rogue","Maxima","Versa","Quest","Sentra","GT-R","cube","Frontier","NV1500","NV2500","NV3500"],"Cadillac":["CTS","CTS-V","Escalade","SRX","Escalade ESV","Escalade EXT"],"Audi":["A3","R8","A6","Q5","A5","A8","TT","A7","S5","A4","Q7","S4"],"Volkswagen":["Jetta","Golf","Routan","Touareg","Eos","New Beetle","Passat","Tiguan","GTI","CC"],"Land Rover":["Range Rover","Discovery","Range Rover Sport","Range Rover Evoque","LR2","LR4"],"Honda":["Odyssey","Accord","Civic","Ridgeline","Fit","Insight","CR-Z","Pilot","FCX Clarity","Crosstour","CR-V"],"Hyundai":["HED-5","Genesis","Accent","Equus","Santa Fe","Elantra","Veracruz","Sonata","Tucson","Veloster","Azera"],"Ford":["Focus","Mustang","F-Series Super Duty","E-Series","Transit Connect","Flex","Escape","Fusion","Taurus","Fiesta","Explorer","Expedition","Edge","E150","E250","E350","Expedition EL","F150","F250","F350","F450"],"GMC":["Canyon","Yukon","Sierra","Acadia","Terrain","Savana","Savana 1500","Savana 2500","Savana 3500","Sierra 1500","Sierra 2500","Sierra 3500","Yukon XL 1500","Yukon XL 2500"],"Saab":["9-3"],"Volvo":["C30","XC70","XC60","XC90","C70","S80","S60"],"Chevrolet":["Corvette","Colorado","Volt","Express","Sonic","Camaro","Cruze","Malibu","Traverse","Equinox","Impala","Avalanche","Express 1500","Express 2500","Express 3500","Silverado 1500","Silverado 2500","Silverado 3500","Suburban 1500","Suburban 2500","Tahoe"],"MINI":["Cooper","Countryman","Clubman","Cooper Clubman","Cooper Countryman"],"BMW":["1 Series","3 Series","5 Series","6 Series","7 Series","M3","X3","X5","X5 M","X6","X6 M","Z4"],"Lincoln":["MKX","Navigator","MKS","MKT","MKZ","Navigator L"],"Toyota":["4Runner","Highlander","Yaris","Prius v","FJ Cruiser","Camry Hybrid","Sequoia","RAV4","Sienna","Camry","Prius Plug-in Hybrid","Avalon","Corolla","Matrix","Prius","Prius c","Prius Plug-in","Tacoma","TundraMax","Tundra","Venza"],"Acura":["ZDX","MDX","TSX","TL","RL","RDX"],"Mercedes-Benz":["G-Class","CLS-Class","GL-Class","E-Class","GLK-Class","SLS AMG","S-Class","CL-Class","C-Class","SL-Class","M-Class","R-Class","SLK-Class","SLS-Class","Sprinter 2500","Sprinter 3500"],"Infiniti":["FX","M","G37","G25","QX56","IPL G","EX","G","QX"],"Aston Martin":["DBS","DB9","V12 Vantage","Virage","V8 Vantage","Rapide","V8 Vantage S"],"Lexus":["RX","LS","IS","IS-F","CT","RX Hybrid","LS Hybrid","ES","LFA","HS","GX"],"Fiat":["500"],"Fiat":["Nuova 500"],"Dodge":["Avenger","Caravan","Charger","Challenger","Caliber","Durango","Journey","Grand Caravan"],"Suzuki":["Kizashi","Grand Vitara","Equator","SX4"],"Subaru":["Legacy","Impreza","Forester","Tribeca","Outback"],"Ferrari":["458 Italia","FF"],"Smart":["Fortwo"],"Jaguar":["XF","XK","XJ"],"Jeep":["Wrangler","Compass","Grand Cherokee","Patriot","Liberty"],"Mazda":["Mazda5","Mazda2","CX-9","MX-5","Mazda6","Mazda3","Mazdaspeed 3","CX-7","Miata MX-5"],"Lamborghini":["Gallardo","Aventador"],"Tesla":["Model S","Roadster"],"Buick":["Verano","LaCrosse","Regal","Enclave"],"Chrysler":["200","300","Town & Country"],"Kia":["Sportage","Forte","Optima","Sedona","Soul","Sorento","Rio"],"Lotus":["Exige","Evora"],"Bentley":["Continental GT","Mulsanne","Continental GTC","Continental Flying Spur","Continental Super","Continental"],"Mitsubishi":["Galant","Eclipse","Outlander","i-MiEV","Lancer","Outlander Sport"],"Scion":["xB","tC","iQ","xD"],"Rolls-Royce":["Ghost","Phantom"],"Maserati":["GranTurismo","Quattroporte"],"Maybach":["57","62","Landaulet"],"McLaren":["MP4-12C"],"Ram":["1500","2500","3500","C/V"]},
  "2013":{"Ford":["Taurus","C-MAX Hybrid","Edge","Escape","Explorer","Fiesta","Flex","Focus","Focus ST","Fusion","Mustang","Transit Connect"],"Hyundai":["Veloster","Accent","Elantra","Equus","Genesis Coupe","Sonata"],"Chevrolet":["Cruze","Malibu","Tahoe"],"Audi":["S4"],"BMW":["X5","X5 M","X6","X6 M"],"GMC":["Sierra 1500","Yukon","Yukon XL 1500","Yukon XL 2500"],"Infiniti":["JX"],"Jaguar":["XK Series"],"Kia":["Rio","Sorento"],"Lexus":["GS","LX","RX"],"Lincoln":["MKS","MKT","MKX"],"Mazda":["CX-5","MAZDA6"],"Nissan":["Altima","GT-R"],"Porsche":["911","Boxster","Cayenne","Panamera"],"Rolls-Royce":["Phantom"],"Scion":["FR-S","tC"],"Subaru":["BRZ"],
    "Toyota":["Land Cruiser","Venza"],"Volkswagen":["CC"],"Volvo":["C30","C70","S60","XC90"],
    "Acura": ["ILX", "MDX", "NSX", "RDX", "RLX", "TLX"],
    "Alfa Romeo": ["4C", "Giulia", "Stelvio"],
  },
  "2014": data2019,
  "2015": data2019,
  "2016": data2019,
  "2017": data2019,
  "2018": data2019,
  "2019": data2019,
};

export const types = {
  BOOK_APPOINTMENT_SUCCESS: 'BOOK_APPOINTMENT_SUCCESS',
  BOOK_APPOINTMENT_FAILED: 'BOOK_APPOINTMENT_FAILED',
  BOOK_APPOINTMENT: 'BOOK_APPOINTMENT',
  CONFIRM_DETAIL: 'CONFIRM_DETAIL',
  UPDATE_ISSUE: 'UPDATE_ISSUE',
  SAVE_STORAGE: 'SAVE_STORAGE',
  SAVE_STORAGE_SUCCESS: 'SAVE_STORAGE_SUCCESS',
  APPLY_COUPON: 'APPLY_COUPON',
  FETCH_CAR_JSON: 'FETCH_CAR_JSON',
}

const { BOOK_APPOINTMENT, UPDATE_ISSUE, CONFIRM_DETAIL, SAVE_STORAGE, BOOK_APPOINTMENT_SUCCESS, APPLY_COUPON, FETCH_CAR_JSON } = types;

const colors = {
  "gold": { content: "Gold", url: "gold", id: "gold" },
  "roseGold": { content: "Rose Gold", url: "rose-gold", id: "rose-gold" },
  "silver": { content: "Silver", url: "silver", id: "silver" },
  "spaceGray": { content: "Space Gray", url: "space-gray", id: "space-gray" },
  "black": { content: "Black", url: "black", id: "black" },
  "jetBlack": { content: "Jet Black", url: "jet-black", id: "jet-black" },
  "red": { content: "Red", url: "red", id: "red" },
};

const iPadColors = [{"default": { content: "default", url: "default", id: "default" }}];

const carMakes = () => {
  const arr = []
  const dataKey =  Object.keys(jsonData);
  for (let i=0; i<dataKey.length; i++){
    const keys = Object.keys(jsonData[dataKey[i]]);
    for (let k=0; k<keys.length; k++){
      if (!arr.includes(keys[k])){
        arr.push(keys[k]);
      }
    }
  }
  return arr
}

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  appliedCoupon: 0,
  sendAppointment: false,
  notAvailableWeekDays: [],
  zipCodes: [
    94002,
    94003,
    94005,
    94010,
    94011,
    94012,
    94014,
    94015,
    94016,
    94017,
    94018,
    94019,
    94020,
    94021,
    94025,
    94026,
    94027,
    94028,
    94029,
    94030,
    94031,
    94037,
    94038,
    94044,
    94045,
    94059,
    94060,
    94061,
    94062,
    94063,
    94064,
    94065,
    94066,
    94067,
    94070,
    94071,
    94074,
    94080,
    94083,
    94096,
    94098,
    94099,
    94128,
    94307,
    94308,
    94401,
    94402,
    94403,
    94404,
    94405,
    94406,
    94407,
    94408,
    94409,
  ],
  device: {
    coupon: {
      'ulan': 10,
      'ulanulan': 15,
    },
    bmw: {
      title: "Select BWM Model",
      model:[
        { content: "8 Plus", url: "8-plus", id: "8-plus" },
        { content: "8", url: "8", id: "8" },
        { content: "7 Plus", url: "7-plus", id: "7-plus" },
        { content: "7", url: "7", id: "7" },
        { content: "6s Plus", url: "6s-plus", id: "6s-plus" },
        { content: "6s", url: "6s", id: "6s" },
        { content: "6 Plus", url: "6-plus", id: "6-plus" },
        { content: "6", url: "6", id: "6" },
        { content: "SE", url: "se", id: "se" },
        { content: "5/5C/5S", url: "5", id: "5" },
      ],
      issue:{
        title: "Select Issue Type",
        data: [
          { content: "Screen Repair", url: "screen-repair/schedule", id: "screen-repair" },
          { content: "Battery", url: "battery/schedule", id: "battery" },
          { content: "Back Camera", url: "back-camera/schedule", id: "back-camera" },
          { content: "Front Camera", url: "front-camera/schedule", id: "front-camera" },
          { content: "Home Button", url: "home-button/schedule", id: "home-button" },
          { content: "Charging Port", url: "charging-port/schedule", id: "charging-port" },
          { content: "WiFi/Bluetooth", url: "wifi-bluetooth/schedule", id: "wifi-bluetooth" },
          { content: "Side Buttons", url: "side-buttons/schedule", id: "side-buttons" },
          { content: "Internal Speakers", url: "internal-speakers/schedule", id: "internal-speakers" },
          { content: "Power Button", url: "power-button/schedule", id: "power-button" },
          { content: "Headphone Plug", url: "headphone-plug/schedule", id: "headphone-plug" },
          { content: "Loud Speaker", url: "loud-speaker/schedule", id: "loud-speaker" },
          // { content: "Water Damage", url: "schedule", id: "water-damage" },
          // { content: "Won't Turn On", url: "schedule", id: "no-turn" },
        ]
      },
      color: {
        title: "Select iPhone Color",
        "8-plus": [colors.spaceGray, colors.gold, colors.silver, colors.red],
        "8": [colors.spaceGray, colors.gold, colors.silver, colors.red],

        "7-plus": [colors.gold, colors.silver, colors.roseGold, colors.black, colors.jetBlack, colors.red],
        "7": [colors.gold, colors.silver, colors.roseGold, colors.black, colors.jetBlack, colors.red],

        "6s-plus": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],
        "6s": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],
        "se": [colors.spaceGray, colors.gold, colors.roseGold, colors.silver],

        "6-plus": [colors.spaceGray, colors.gold, colors.silver],
        "6": [colors.spaceGray, colors.gold, colors.silver],
        "5": [colors.spaceGray, colors.gold, colors.silver],
      },
      price: {
        "8-plus": {
          issues: {
            "screen-repair": 85,
            "back-camera": 159,
          },
        },
        "8": {
          issues: {
            "screen-repair": 85,
            "back-camera": 159,
            "front-camera": 69,
            "charging-port": 69,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
          },
        },
        "7-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 65,
            "back-camera": 159,
            "front-camera": 65,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
          },
        },
        "7": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 89,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
            "loud-speaker": 59,
          },
        },
        "6s-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 89,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6s": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 65,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "se": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 79,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6-plus": {
          issues: {
            "screen-repair": 69,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "6": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
        "5": {
          issues: {
            "screen-repair": 59,
            "battery": 59,
            "back-camera": 59,
            "front-camera": 59,
            "home-button": 59,
            "charging-port": 59,
            "side-buttons": 59,
            "internal-speakers": 59,
            "power-button": 59,
            "headphone-plug": 59,
          },
        },
      },
    },
    mercedes: {
      title: "Select Mercedes Model",
      model:[
        { content: "iPad Air 2", url: "air-2/default", id: "air-2" },
        { content: "iPad Air", url: "air/default", id: "air" },
        { content: "iPad Mini 4", url: "mini-4/default", id: "mini-4" },
        { content: "iPad Mini 1, 2, 3", url: "mini-1-2-3/default", id: "mini-1-2-3" },
        { content: "iPad 2, 3, 4", url: "ipad-2-3-4/default", id: "ipad-2-3-4" },
        { content: "iPad 5", url: "ipad-5/default", id: "ipad-5" },
        { content: "iPad 6", url: "ipad-6/default", id: "ipad-6" },
      ],
      issue:{
        title: "Select Issue Type",
        data: [
          { content: "Screen Repair", url: "screen-repair/schedule", id: "screen-repair" },
        ]
      },
      color: {
        title: "Select iPad Color",
        "air-2": iPadColors,
        "air": iPadColors,
        "mini-4": iPadColors,
        "mini-1-2-3": iPadColors,
        "ipad-2-3-": iPadColors,
        "ipad-5": iPadColors,
        "ipad-6": iPadColors,
      },
      price: {
        "air-2": {
          issues: {
            "screen-repair": 325,
          },
        },
        "air": {
          issues: {
            "screen-repair": 105,
          },
        },
        "mini-4": {
          issues: {
            "screen-repair": 215,
          },
        },
        "mini-1-2-3": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-2-3-4": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-5": {
          issues: {
            "screen-repair": 105,
          },
        },
        "ipad-6": {
          issues: {
            "screen-repair": 145,
          },
        },
      },
    },
  },
  info: {
    address:  "",
    email: "",
    name: "",
    device: "",
    model: "",
    issue: "",
    price: 0,
    color: "",
    phone: "",
    zipCode: '10000',
    city: '  ',
    state: 'CA',
    instructions:""
  },
  carMake : carMakes(),
  carModel : [
    '1',
    '2',
    'BMW',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Dodge',
    'Fiat',
    'Ford',
    'GMC',
    'Geo',
      'Honda',
      'Hummer',
      'Hyundai',
      'Infiniti',
      'Isuzu',
      'Jaguar',
      'Jeep',
      'Kia',
      'Land Rover',
      'Lexus',
      'Lincoln',
      'Mazda',
      'Mercedes-Benz',
      'Mercury',
      'Mini',
      'Mitsubishi',
      'Nissan',
      'Oldsmobile',
      'Plymouth',
      'Pontiac',
      'Porsche',
      'Ram',
      'Saab',
      'Saturn',
      'Scion',
      'Smart',
      'Subaru',
      'Suzuki',
      'Tesla',
      'Toyota',
      'Volkswagen',
      'Volvo"'
  ],
  carYear: Object.keys(jsonData),
  carJson: jsonData,

};

const rootReducer = (state = initialState, payload) => {
  const {type, info} = payload;
  switch (type) {
    case FETCH_CAR_JSON: {
      return {
        ...state,
      };
    }
    case BOOK_APPOINTMENT: {
      return {
        ...state,
      };
    }
    case BOOK_APPOINTMENT_SUCCESS: {
      return {
        ...state,
        sendAppointment: true,
      };
    }
    case CONFIRM_DETAIL: {
      return {
        ...state,
        info: {
          ...state.info, ...info,
        },
      };
    }
    case UPDATE_ISSUE: {
      return {
        ...state,
        info: {...state.info, issue: info},
      };
    }
    case APPLY_COUPON: {
      return {
        ...state,
        appliedCoupon: payload.coupon,
      };
    }
    case SAVE_STORAGE: {
      return {
        ...state,
        info,
      };
    }
    default:
    {
      return state
    }

  }
};

const reducer = combineReducers({
  root: rootReducer,
  router: routerReducer
});



export const actions = {
  confirmDetail: info => ({type: CONFIRM_DETAIL, info}),
  updateIssue: info => ({type: UPDATE_ISSUE, info}),
  applyCoupon: coupon => ({type: APPLY_COUPON, coupon}),
  bookAppointment: (info, resolve, reject) => ({type: BOOK_APPOINTMENT, info, resolve, reject}),
  saveToStorage: info => ({type: SAVE_STORAGE, info}),
  fetchCarJson: info => ({type: FETCH_CAR_JSON, info}),
};


export default reducer;
