
const datosPaises = [
  {
    id: 1,
    abbreviation: "ABW",
    name: "Aruba",
    coordinates:
      "BOX(-70.0624080069999 12.417669989,-69.8768204419999 12.6321475280001)",
  },
  {
    id: 2,
    abbreviation: "AFG",
    name: "Afghanistan",
    coordinates:
      "BOX(60.4867777910001 29.3866053260001,74.8923067630001 38.4736734020001)",
  },
  {
    id: 3,
    abbreviation: "AGO",
    name: "Angola",
    coordinates:
      "BOX(11.6693941430001 -18.0314047239998,24.0617143150001 -4.39120371499996)",
  },
  {
    id: 4,
    abbreviation: "AIA",
    name: "Anguilla",
    coordinates:
      "BOX(-63.4288223949999 18.1690941430001,-62.9726456369999 18.6012637390001)",
  },
  {
    id: 5,
    abbreviation: "ALB",
    name: "Albania",
    coordinates:
      "BOX(19.2720325110001 39.637013245,21.0366793210001 42.6548135380001)",
  },
  {
    id: 6,
    abbreviation: "ALA",
    name: "Aland Islands",
    coordinates:
      "BOX(19.5131942070001 59.9044863950001,21.0966903000001 60.4807803410001)",
  },
  {
    id: 7,
    abbreviation: "AND",
    name: "Andorra",
    coordinates:
      "BOX(1.4064563390001 42.4286774700001,1.76509078000015 42.649361674)",
  },
  {
    id: 8,
    abbreviation: "ARE",
    name: "United Arab Emirates",
    coordinates:
      "BOX(51.5693465500001 22.6209459430001,56.3836369150001 26.0747919720001)",
  },
  {
    id: 9,
    abbreviation: "ARG",
    name: "Argentina",
    coordinates:
      "BOX(-73.5880358489999 -55.0520158829998,-53.6615518799999 -21.7869377639999)",
  },
  {
    id: 10,
    abbreviation: "ARM",
    name: "Armenia",
    coordinates:
      "BOX(43.4362939860001 38.8637012740001,46.6026123460001 41.2904523730002)",
  },
  {
    id: 11,
    abbreviation: "ASM",
    name: "American Samoa",
    coordinates:
      "BOX(-171.086537239 -14.5328915339999,-168.160471158 -11.0513648419999)",
  },
  {
    id: 12,
    abbreviation: "ATA",
    name: "Antarctica",
    coordinates: "BOX(-180 -90,180 -60.516208592)",
  },
  {
    id: 13,
    abbreviation: "ATF",
    name: "French Southern and Antarctic Lands",
    coordinates:
      "BOX(39.7282820970001 -49.7216122379999,77.5852156910001 -11.5506324199998)",
  },
  {
    id: 14,
    abbreviation: "ATG",
    name: "Antigua and Barbuda",
    coordinates:
      "BOX(-61.8941544259999 16.9892438820001,-61.6675919259999 17.7276878930001)",
  },
  {
    id: 15,
    abbreviation: "AUS",
    name: "Australia",
    coordinates:
      "BOX(112.919444207 -54.750420831,159.106455925 -9.24016692499987)",
  },
  {
    id: 16,
    abbreviation: "AUT",
    name: "Austria",
    coordinates:
      "BOX(9.52115482500011 46.3786430870001,17.1483378500001 49.0097744750001)",
  },
  {
    id: 17,
    abbreviation: "AZE",
    name: "Azerbaijan",
    coordinates:
      "BOX(44.7745585530002 38.392644755,50.6257430350001 41.8904415900002)",
  },
  {
    id: 18,
    abbreviation: "BDI",
    name: "Burundi",
    coordinates:
      "BOX(28.9868917230001 -4.46334401499993,30.8339624430001 -2.30306243899987)",
  },
  {
    id: 19,
    abbreviation: "BEL",
    name: "Belgium",
    coordinates:
      "BOX(2.52179992769047 49.495222881,6.37452518700007 51.4962376910001)",
  },
  {
    id: 20,
    abbreviation: "BEN",
    name: "Benin",
    coordinates:
      "BOX(0.759880818000113 6.21389923179639,3.83741906700001 12.3992442830001)",
  },
  {
    id: 21,
    abbreviation: "BFA",
    name: "Burkina Faso",
    coordinates:
      "BOX(-5.52257808499988 9.39188262900012,2.39016890400009 15.0799075320001)",
  },
  {
    id: 22,
    abbreviation: "BGD",
    name: "Bangladesh",
    coordinates:
      "BOX(88.0217895920001 20.738714911,92.6428511970002 26.6235440070001)",
  },
  {
    id: 23,
    abbreviation: "BGR",
    name: "Bulgaria",
    coordinates:
      "BOX(22.3450232340001 41.2381041470001,28.6035262380001 44.228434539)",
  },
  {
    id: 24,
    abbreviation: "BHR",
    name: "Bahrain",
    coordinates:
      "BOX(50.448903842 25.7895368510001,50.6456598131816 26.242580471)",
  },
  {
    id: 25,
    abbreviation: "BHS",
    name: "Bahamas",
    coordinates:
      "BOX(-79.5943497389999 20.9123989090001,-72.7461645169999 26.9284121770001)",
  },
  {
    id: 26,
    abbreviation: "BIH",
    name: "Bosnia and Herzegovina",
    coordinates:
      "BOX(15.7160738520001 42.5592121380002,19.618884725 45.2845238250002)",
  },
  {
    id: 27,
    abbreviation: "BLM",
    name: "Saint-Barthelemy",
    coordinates:
      "BOX(-62.8673396479999 17.8819847680001,-62.7916560539999 17.9291445980001)",
  },
  {
    id: 28,
    abbreviation: "BLR",
    name: "Belarus",
    coordinates:
      "BOX(23.165644979 51.2351683560001,32.7195321040001 56.1568059290001)",
  },
  {
    id: 29,
    abbreviation: "BLZ",
    name: "Belize",
    coordinates:
      "BOX(-89.2365122079999 15.8796519990001,-87.7830704419999 18.4907587690001)",
  },
  {
    id: 30,
    abbreviation: "BMU",
    name: "Bermuda",
    coordinates:
      "BOX(-64.8859939889704 32.2480773815958,-64.6476307056406 32.3886579450001)",
  },
  {
    id: 31,
    abbreviation: "BOL",
    name: "Bolivia",
    coordinates:
      "BOX(-69.6664922699999 -22.8972575879999,-57.4656607669999 -9.67982147199997)",
  },
  {
    id: 32,
    abbreviation: "BRA",
    name: "Brazil",
    coordinates:
      "BOX(-74.018474691 -33.742280375,-28.8770645819999 5.26722483300009)",
  },
  {
    id: 33,
    abbreviation: "BRB",
    name: "Barbados",
    coordinates:
      "BOX(-59.6542048819999 13.051174221,-59.4269099599999 13.344549872)",
  },
  {
    id: 34,
    abbreviation: "BRN",
    name: "Brunei Darussalam",
    coordinates:
      "BOX(113.99878991 4.01668101000011,115.360741008 5.05719635600018)",
  },
  {
    id: 35,
    abbreviation: "BTN",
    name: "Bhutan",
    coordinates:
      "BOX(88.7300667720001 26.6961493940002,92.0887764890001 28.3583989307863)",
  },
  {
    id: 36,
    abbreviation: "BWA",
    name: "Botswana",
    coordinates:
      "BOX(19.9783459880001 -26.891794128,29.3500736890001 -17.7818075559999)",
  },
  {
    id: 37,
    abbreviation: "CAF",
    name: "Central African Republic",
    coordinates:
      "BOX(14.3531268490001 2.2128668460001,27.2229631400001 11.100165571)",
  },
  {
    id: 38,
    abbreviation: "CAN",
    name: "Canada",
    coordinates:
      "BOX(-141.001873364 41.6756052120001,-52.6480986819999 83.2212511530001)",
  },
  {
    id: 39,
    abbreviation: "CCK",
    name: "Cocos (Keeling) Islands",
    coordinates:
      "BOX(96.8729781789999 -12.1137062189999,96.9937329930001 -12.0933092169999)",
  },
  {
    id: 40,
    abbreviation: "CHE",
    name: "Switzerland",
    coordinates:
      "BOX(5.95818379600011 45.8182003790001,10.4924244790001 47.8084854620001)",
  },
  {
    id: 41,
    abbreviation: "CHL",
    name: "Chile",
    coordinates:
      "BOX(-75.9491817469999 -56.0520796899999,-66.6344465469999 -17.5149531019999)",
  },
  {
    id: 42,
    abbreviation: "CHN",
    name: "China",
    coordinates:
      "BOX(73.6607981600001 18.1614470910001,135.000496252 53.5582692080001)",
  },
  {
    id: 43,
    abbreviation: "CIV",
    name: "Côte d'Ivoire",
    coordinates:
      "BOX(-2.53841193499993 2.21111519900011, -2.05130517499993 11.0270360530001)",
  },
  {
    id: 44,
    abbreviation: "CMR",
    name: "Cameroon",
    coordinates:
      "BOX(8.24995015399994 -13.4603341359999,16.1979135469999 13.5118986110001)",
  },
  {
    id: 45,
    abbreviation: "COD",
    name: "Democratic Republic of the Congo",
    coordinates:
      "BOX(12.0338487350001 -13.4667311419999,31.3277366750001 5.01396789000008)",
  },
  {
    id: 46,
    abbreviation: "COG",
    name: "Congo",
    coordinates:
      "BOX(12.6428940570001 -5.02626788099994,18.7742745910001 5.69120867100011)",
  },
  {
    id: 47,
    abbreviation: "COK",
    name: "Cook Islands",
    coordinates:
      "BOX(-167.957496569 -22.4838749189999,-157.045918409 -8.90243492500001)",
  },
  {
    id: 48,
    abbreviation: "COL",
    name: "Colombia",
    coordinates:
      "BOX(-79.9996718499999 -4.38853699199997,-66.9999803399999 13.497779793)",
  },
  {
    id: 49,
    abbreviation: "COM",
    name: "Comoros",
    coordinates:
      "BOX(43.165201399 11.6212310270001,44.7693869790001 -12.2351388209999)",
  },
  {
    id: 50,
    abbreviation: "CPV",
    name: "Cabo Verde",
    coordinates:
      "BOX(-25.3280858239999 14.7598239910001,-22.4580694989999 17.1541662970001)",
  },
  {
    id: 51,
    abbreviation: "CRI",
    name: "Costa Rica",
    coordinates:
      "BOX(-87.0751059139999 5.1090255830001,-82.5795570059999 11.2145802770001)",
  },
  {
    id: 52,
    abbreviation: "CUB",
    name: "Cuba",
    coordinates:
      "BOX(-84.1804894739999 19.3178520800001,-74.1302340489999 23.177500719)",
  },
  {
    id: 53,
    abbreviation: "CUW",
    name: "Curaçao",
    coordinates:
      "BOX(-69.1080453559999 12.0144302490001,-68.7918729049999 12.5745032760001)",
  },
  {
    id: 54,
    abbreviation: "CXR",
    name: "Christmas Island",
    coordinates: "BOX(105.4995002 -10.414164013,-105.4555001 -10.37043901)",
  },
  {
    id: 55,
    abbreviation: "CYM",
    name: "Cayman Islands",
    coordinates:
      "BOX(-82.4136366079999 19.2548883460001,-81.2153789199999 19.6908359480001)",
  },
  {
    id: 56,
    abbreviation: "CZE",
    name: "Czech Republic",
    coordinates: "BOX(12.090503728 48.548809967,18.8574361220001 51.057507968)",
  },
  {
    id: 57,
    abbreviation: "DEU",
    name: "Germany",
    coordinates:
      "BOX(5.86634228400012 47.2709999999999,15.0419298600001 55.0580318700001)",
  },
  {
    id: 58,
    abbreviation: "DJI",
    name: "Djibouti",
    coordinates:
      "BOX(41.2529794350001 10.5059926350001,43.3149610370001 12.7562664570001)",
  },
  {
    id: 59,
    abbreviation: "DMA",
    name: "Dominica",
    coordinates:
      "BOX(-61.4932491119999 15.2700601760001,-61.2240989429999 15.5968925740001)",
  },
  {
    id: 60,
    abbreviation: "DNK",
    name: "Denmark",
    coordinates:
      "BOX(8.08847981700011 54.3052410770001,15.0313647850001 58.5854453570001)",
  },
  {
    id: 61,
    abbreviation: "DOM",
    name: "Dominican Republic",
    coordinates:
      "BOX(-72.0053961049999 17.6106484480001,-68.3383014169999 19.8658575000001)",
  },
  {
    id: 62,
    abbreviation: "DZA",
    name: "Algeria",
    coordinates:
      "BOX(-8.66848894099993 19.2467901150001,11.9748858780001 37.093124554)",
  },
  {
    id: 63,
    abbreviation: "ECU",
    name: "Ecuador",
    coordinates:
      "BOX(-81.2442764939999 -5.04411304399994,-75.0011329099999 1.9997330730001)",
  },
  {
    id: 64,
    abbreviation: "EGY",
    name: "Egypt",
    coordinates:
      "BOX(25.7091163690001 22.0380227220001,34.8325881620001 31.250615585)",
  },
  {
    id: 65,
    abbreviation: "ESH",
    name: "Western Sahara",
    coordinates:
      "BOX(-25.9962987079999 20.7501516220001,-8.6829631609999 27.0002328870001)",
  },
  {
    id: 66,
    abbreviation: "ESP",
    name: "Spain",
    coordinates:
      "BOX(-9.5474288909999 35.9441525760001,3.31349645000011 43.9607710270001)",
  },
  {
    id: 67,
    abbreviation: "EST",
    name: "Estonia",
    coordinates: "BOX(21.049134747 57.034052358,28.365682885 59.596112734)",
  },
  {
    id: 68,
    abbreviation: "ETH",
    name: "Ethiopia",
    coordinates:
      "BOX(33.3280791320001 3.40213627000011,48.0002650070001 15.6022955200001)",
  },
  {
    id: 69,
    abbreviation: "FIN",
    name: "Finland",
    coordinates: "BOX(24.300019777 59.952026827,31.683730983 70.098974427)",
  },
  {
    id: 70,
    abbreviation: "FJI",
    name: "Fiji",
    coordinates: "BOX(-180 -17.550975752,-174 -12.8896226500001)",
  },
  {
    id: 71,
    abbreviation: "FRA",
    name: "France",
    coordinates:
      "BOX(-5.14222187400001 41.3031278930001,9.56295712600009 51.1247548790001)",
  },
  {
    id: 72,
    abbreviation: "FRO",
    name: "Faroe Islands",
    coordinates:
      "BOX(-7.50393101399994 61.2268841090001,-6.03717730700011 62.6356876540001)",
  },
  {
    id: 73,
    abbreviation: "FSM",
    name: "Micronesia",
    coordinates:
      "BOX(138.178666747 0.508946708000113,155.461903675 14.3288581750001)",
  },
  {
    id: 74,
    abbreviation: "GAB",
    name: "Gabon",
    coordinates:
      "BOX(8.55288116300011 -13.5327275579999,14.5308456460001 3.82569026500011)",
  },
  {
    id: 75,
    abbreviation: "GBR",
    name: "United Kingdom",
    coordinates:
      "BOX(-14.4999626649999 49.9525028740001,1.7646919890001 61.1400929950001)",
  },
  {
    id: 76,
    abbreviation: "GHA",
    name: "Ghana",
    coordinates:
      "BOX(-3.53784466899993 4.73419215600011,1.2508256930001 11.2154305590001)",
  },
  {
    id: 77,
    abbreviation: "GIB",
    name: "Gibraltar",
    coordinates:
      "BOX(-5.42056386599993 35.2400168850001,-5.34980575299993 35.3329676950001)",
  },
  {
    id: 78,
    abbreviation: "GIN",
    name: "Guinea",
    coordinates:
      "BOX(-15.0026138979999 7.1890927560001,-7.1892421089999 12.6510983460001)",
  },
  {
    id: 79,
    abbreviation: "GMB",
    name: "Gambia",
    coordinates:
      "BOX(-16.8374235869999 13.4650168940001,-13.1992173639999 13.9292996280001)",
  },
  {
    id: 80,
    abbreviation: "GNB",
    name: "Guinea-Bissau",
    coordinates:
      "BOX(-16.4215381469999 10.1612441620001,-13.6658319849999 12.7683555550001)",
  },
  {
    id: 81,
    abbreviation: "GNQ",
    name: "Equatorial Guinea",
    coordinates:
      "BOX(8.55476291900011 1.58410609100011,11.0332094870001 3.73929143400011)",
  },
  {
    id: 82,
    abbreviation: "GRC",
    name: "Greece",
    coordinates:
      "BOX(19.372078098 34.783297837,28.2188669990001 42.3583157320001)",
  },
  {
    id: 83,
    abbreviation: "GRL",
    name: "Greenland",
    coordinates:
      "BOX(-73.9887087779999 59.7780000070001,-18.6735922679999 83.645000008)",
  },
  {
    id: 84,
    abbreviation: "GRD",
    name: "Grenada",
    coordinates:
      "BOX(-62.7229281139999 11.5917652380001,-61.6548674509999 12.265522391)",
  },
  {
    id: 85,
    abbreviation: "GTM",
    name: "Guatemala",
    coordinates:
      "BOX(-92.3348686859999 13.7632043300001,-88.1545805019999 17.7789631140001)",
  },
  {
    id: 86,
    abbreviation: "GUM",
    name: "Guam",
    coordinates:
      "BOX(144.5295521 9.51420977900011,144.9154045 13.4649798680001)",
  },
  {
    id: 87,
    abbreviation: "GUY",
    name: "Guyana",
    coordinates:
      "BOX(-61.2542981289999 -6.39003461899997,-55.9799428749999 13.5838034560001)",
  },
  {
    id: 88,
    abbreviation: "HKG",
    name: "Hong Kong",
    coordinates:
      "BOX(113.759049999999 22.1419299999999,114.591728999999 22.5414099999999)",
  },
  {
    id: 89,
    abbreviation: "HND",
    name: "Honduras",
    coordinates:
      "BOX(-89.3619914409999 12.9953192190001,-83.2125451149999 16.000168771)",
  },
  {
    id: 90,
    abbreviation: "HRV",
    name: "Croatia",
    coordinates:
      "BOX(13.0480371840001 42.4991011940001,19.3935684930001 45.2763009810001)",
  },
  {
    id: 91,
    abbreviation: "HTI",
    name: "Haiti",
    coordinates:
      "BOX(-74.4271466559999 18.3927786680001,-71.2002412069999 20.0523956360001)",
  },
  {
    id: 92,
    abbreviation: "HUN",
    name: "Hungary",
    coordinates:
      "BOX(16.026392872 45.7489739500001,22.8409528670001 48.5877801370001)",
  },
  {
    id: 93,
    abbreviation: "IDN",
    name: "Indonesia",
    coordinates:
      "BOX(95.8205460349999 -11.0750830289999,141.059832399999 6.1008173870001)",
  },
  {
    id: 94,
    abbreviation: "IND",
    name: "India",
    coordinates:
      "BOX(68.1418013700001 6.7462172910001,97.3965972330001 37.0902112420001)",
  },
  {
    id: 95,
    abbreviation: "IRL",
    name: "Ireland",
    coordinates:
      "BOX(-10.4774867859999 51.3482713360001,-5.03434183799993 55.4787489330001)",
  },
  {
    id: 96,
    abbreviation: "IRN",
    name: "Iran",
    coordinates:
      "BOX(44.1155799710001 24.1968173210001,63.2940866880001 39.7831638890001)",
  },
  {
    id: 97,
    abbreviation: "IRQ",
    name: "Iraq",
    coordinates:
      "BOX(40.5668105600001 29.0585687490001,48.9928820480001 37.3949188920001)",
  },
  {
    id: 98,
    abbreviation: "ISL",
    name: "Iceland",
    coordinates:
      "BOX(-24.9631310279999 63.0001660830001,-13.4323831289999 66.5601283860001)",
  },
  {
    id: 99,
    abbreviation: "ISR",
    name: "Israel",
    coordinates: "BOX(34.249304451 29.533912299,35.686225343 33.421360688)",
  },
  {
    id: 100,
    abbreviation: "ITA",
    name: "Italy",
    coordinates:
      "BOX(6.6221036490001 36.6605889900001,18.9730492999999 47.0971607260001)",
  },
  {
    id: 101,
    abbreviation: "JAM",
    name: "Jamaica",
    coordinates:
      "BOX(-78.2438772639999 17.6792258530001,-76.3324992319999 18.1825368350001)",
  },
  {
    id: 102,
    abbreviation: "JEY",
    name: "Jersey",
    coordinates:
      "BOX(-2.06601936599993 49.1415466660001,-1.54021108099993 49.3476373340001)",
  },
  {
    id: 103,
    abbreviation: "JPN",
    name: "Japan",
    coordinates: "BOX(122.932197109 24.3963099999999,153.986672999 45.551483)",
  },
  {
    id: 104,
    abbreviation: "KAZ",
    name: "Kazakhstan",
    coordinates:
      "BOX(46.5332180010001 40.9453680000001,87.3612432440001 55.5041130000001)",
  },
  {
    id: 105,
    abbreviation: "KEN",
    name: "Kenya",
    coordinates:
      "BOX(34.8316901300001 -4.71696816399993,41.8583632510001 5.0178200750001)",
  },
  {
    id: 106,
    abbreviation: "KGZ",
    name: "Kyrgyzstan",
    coordinates:
      "BOX(69.3689092500001 39.9997931780001,80.2006581500001 42.5802720000001)",
  },
  {
    id: 107,
    abbreviation: "KHM",
    name: "Cambodia",
    coordinates:
      "BOX(102.1445721900001 10.4059462790001,107.6347286880001 14.7075005700001)",
  },
  {
    id: 108,
    abbreviation: "KIR",
    name: "Kiribati",
    coordinates: "BOX(-180 -0.0506586849999304,172.444667 4.64781213500011)",
  },
  {
    id: 109,
    abbreviation: "KNA",
    name: "Saint Kitts and Nevis",
    coordinates:
      "BOX(-62.8888963049999 17.0726676600001,-62.5221284749999 17.451773951)",
  },
  {
    id: 110,
    abbreviation: "KOR",
    name: "South Korea",
    coordinates: "BOX(124.119263849 33.041191119,131.036064 38.617241)",
  },
  {
    id: 111,
    abbreviation: "KWT",
    name: "Kuwait",
    coordinates:
      "BOX(46.5982854840001 28.4917040000001,48.0171727220001 30.058042)",
  },
  {
    id: 112,
    abbreviation: "LAO",
    name: "Laos",
    coordinates:
      "BOX(100.095087205 14.1545161000001,107.556739917 23.3140940800001)",
  },
  {
    id: 113,
    abbreviation: "LBN",
    name: "Lebanon",
    coordinates: "BOX(35.0789710000001 33.0499560000001,36.626306 34.378287)",
  },
  {
    id: 114,
    abbreviation: "LBR",
    name: "Liberia",
    coordinates:
      "BOX(-11.4269707639999 4.3715168010001,-7.75130911699993 8.59999903400011)",
  },
  {
    id: 115,
    abbreviation: "LBY",
    name: "Libya",
    coordinates:
      "BOX(9.4400644890001 19.2419987010001,25.0541010980001 33.1661797310001)",
  },
  {
    id: 116,
    abbreviation: "LIE",
    name: "Liechtenstein",
    coordinates: "BOX(8.409514551 47.0772213,9.571982733 47.284654666)",
  },
  {
    id: 117,
    abbreviation: "LTU",
    name: "Lithuania",
    coordinates:
      "BOX(20.9280200490001 53.9032342440001,26.8316873540001 56.2089077070001)",
  },
  {
    id: 118,
    abbreviation: "LUX",
    name: "Luxembourg",
    coordinates: "BOX(5.96327786999999 49.611506,6.537491 50.233763539)",
  },
  {
    id: 119,
    abbreviation: "LVA",
    name: "Latvia",
    coordinates:
      "BOX(20.9724405000001 56.7068490000001,27.0396989999999 58.0803409999999)",
  },
  {
    id: 120,
    abbreviation: "MAR",
    name: "Morocco",
    coordinates:
      "BOX(-17.1284069999999 21.0626450000001,-1.70888136299993 37.2241125800001)",
  },
  {
    id: 121,
    abbreviation: "MCO",
    name: "Monaco",
    coordinates:
      "BOX(7.4390689710001 43.7353510000001,7.48524530000001 43.7701949999999)",
  },
  {
    id: 122,
    abbreviation: "MDA",
    name: "Moldova",
    coordinates:
      "BOX(26.6593777640001 45.3516400000001,30.0828438280001 48.4859990000001)",
  },
  {
    id: 123,
    abbreviation: "MDG",
    name: "Madagascar",
    coordinates:
      "BOX(43.1654996950001 -12.0012643379999,50.4751502680001 -25.0041913500001)",
  },
  {
    id: 124,
    abbreviation: "MEX",
    name: "Mexico",
    coordinates:
      "BOX(-118.202008999999 14.5365510000001,-86.7119340079999 32.7180429990001)",
  },
  {
    id: 125,
    abbreviation: "MHL",
    name: "Marshall Islands",
    coordinates:
      "BOX(160.0249710000001 4.50002250000011,171.029868 14.7047839999999)",
  },
  {
    id: 126,
    abbreviation: "MKD",
    name: "North Macedonia",
    coordinates:
      "BOX(20.3212606610001 40.8481083170001,23.2980565200001 42.3731763180001)",
  },
  {
    id: 127,
    abbreviation: "MLI",
    name: "Mali",
    coordinates:
      "BOX(-13.4660648359999 10.1130640640001,3.00296027000011 25.0012588050001)",
  },
  {
    id: 128,
    abbreviation: "MLT",
    name: "Malta",
    coordinates:
      "BOX(14.3719171500001 35.8230139999999,14.6616795999999 36.1913740000001)",
  },
  {
    id: 129,
    abbreviation: "MUS",
    name: "Mauritius",
    coordinates: "BOX(56.278872 15.8738857000001,63.609691 20.4282092000001)",
  },
  {
    id: 130,
    abbreviation: "MWI",
    name: "Malawi",
    coordinates:
      "BOX(34.2402949240001 -17.039999,36.4361063999999 -10.3738857300001)",
  },
  {
    id: 131,
    abbreviation: "MYS",
    name: "Malaysia",
    coordinates: "BOX(101.433458 0.84812610200011,119.146973 7.38601616400011)",
  },
  {
    id: 132,
    abbreviation: "NAM",
    name: "Namibia",
    coordinates: "BOX(11.730781287 17.073687,25.043857 29.2502970000001)",
  },
  {
    id: 133,
    abbreviation: "NCL",
    name: "New Caledonia",
    coordinates:
      "BOX(165.666000028 -23.498411,168.655999999 -19.7459999999999)",
  },
  {
    id: 134,
    abbreviation: "NER",
    name: "Niger",
    coordinates:
      "BOX(0.153124000000069 11.1484010000001,16.052693 23.5138210000001)",
  },
  {
    id: 135,
    abbreviation: "NGA",
    name: "Nigeria",
    coordinates:
      "BOX(3.8498729840001 4.2772192070001,14.7202579900001 13.8916559990001)",
  },
  {
    id: 136,
    abbreviation: "NIC",
    name: "Nicaragua",
    coordinates:
      "BOX(-87.0247720769999 10.7085933070001,-82.5891588579999 15.0386883650001)",
  },
  {
    id: 137,
    abbreviation: "NLD",
    name: "Netherlands",
    coordinates:
      "BOX(3.35847631799999 50.7520583280001,7.22708679299999 53.8886367400001)",
  },
  {
    id: 138,
    abbreviation: "NOR",
    name: "Norway",
    coordinates:
      "BOX(4.2577969750001 57.8472261640001,31.3068581629999 71.186446722)",
  },
  {
    id: 139,
    abbreviation: "NZL",
    name: "New Zealand",
    coordinates: "BOX(166.491298 34.396061,178.649253 -47.288813)",
  },
  {
    id: 140,
    abbreviation: "OMN",
    name: "Oman",
    coordinates: "BOX(51.078150703 16.6346362660001,59.775335239 26.220069905)",
  },
  {
    id: 141,
    abbreviation: "PAK",
    name: "Pakistan",
    coordinates:
      "BOX(60.8727811400001 23.6345018850001,77.6991590000001 37.0843477430001)",
  },
  {
    id: 142,
    abbreviation: "PAN",
    name: "Panama",
    coordinates:
      "BOX(-83.0387186589999 7.26777913600011,-77.1267932809999 9.6225834360001)",
  },
  {
    id: 143,
    abbreviation: "PNG",
    name: "Papua New Guinea",
    coordinates:
      "BOX(141.408199 2.7343310000001,159.062794999999 10.5021756000001)",
  },
  {
    id: 144,
    abbreviation: "POL",
    name: "Poland",
    coordinates:
      "BOX(14.0778441750001 49.0021702230001,24.2443206000001 54.8392274000001)",
  },
  {
    id: 145,
    abbreviation: "PRT",
    name: "Portugal",
    coordinates:
      "BOX(-9.56017505099993 32.4020817190001,-6.18988400499993 42.2638446930001)",
  },
  {
    id: 146,
    abbreviation: "PRY",
    name: "Paraguay",
    coordinates:
      "BOX(-62.6455073099999 -27.526308, -54.162693 -19.2990777000001)",
  },
  {
    id: 147,
    abbreviation: "QAT",
    name: "Qatar",
    coordinates:
      "BOX(50.7445762720001 24.4364965000001,51.1250454280001 26.0952049990001)",
  },
  {
    id: 148,
    abbreviation: "ROU",
    name: "Romania",
    coordinates:
      "BOX(20.6536100000001 43.6266590000001,28.1973100000001 48.265302)",
  },
  {
    id: 149,
    abbreviation: "RUS",
    name: "Russia",
    coordinates: "BOX(19.6370267280001 41.1583281180001,180 81.860010)",
  },
  {
    id: 150,
    abbreviation: "RWA",
    name: "Rwanda",
    coordinates: "BOX(28.859953 1.053053,30.891751 2.804198)",
  },
  {
    id: 151,
    abbreviation: "SAU",
    name: "Saudi Arabia",
    coordinates:
      "BOX(34.5934856950001 16.6330089999999,55.1910878350001 32.1464886000001)",
  },
  {
    id: 152,
    abbreviation: "SCO",
    name: "Seychelles",
    coordinates: "BOX(55.193962 -5.083774,56.343077 4.000162)",
  },
  {
    id: 153,
    abbreviation: "SEN",
    name: "Senegal",
    coordinates: "BOX(-17.202536 12.321938, -11.355917 16.978282)",
  },
  {
    id: 154,
    abbreviation: "SGP",
    name: "Singapore",
    coordinates: "BOX(103.593473 1.1003800000001,104.056246 1.478688)",
  },
  {
    id: 155,
    abbreviation: "SLE",
    name: "Sierra Leone",
    coordinates: "BOX(-13.383397 7.150224, -11.242137 10.174628)",
  },
  {
    id: 156,
    abbreviation: "SLV",
    name: "El Salvador",
    coordinates:
      "BOX(-90.2637649999999 12.7100203280001,-83.1499989999999 14.4372031810001)",
  },
  {
    id: 157,
    abbreviation: "SOL",
    name: "Solomon Islands",
    coordinates: "BOX(155.682721 6.797321,167.084877 -10.597862)",
  },
  {
    id: 158,
    abbreviation: "SOM",
    name: "Somalia",
    coordinates:
      "BOX(40.0004294469999 -1.51202009099998,51.9993200000001 11.8609700000001)",
  },
  {
    id: 159,
    abbreviation: "SRB",
    name: "Serbia",
    coordinates:
      "BOX(19.0952820000001 40.851499,22.3037930000001 46.1672309999999)",
  },
  {
    id: 160,
    abbreviation: "SUR",
    name: "Suriname",
    coordinates:
      "BOX(-58.2087690000001 1.1153220000001,-54.0001109999999 6.1340869999999)",
  },
  {
    id: 161,
    abbreviation: "SVK",
    name: "Slovakia",
    coordinates:
      "BOX(16.8387880000001 47.734968,22.0086819999999 49.5760449990001)",
  },
  {
    id: 162,
    abbreviation: "SVN",
    name: "Slovenia",
    coordinates: "BOX(13.3004050000001 45.428331,16.5709500000001 46.830503)",
  },
  {
    id: 163,
    abbreviation: "SWE",
    name: "Sweden",
    coordinates: "BOX(11.050233569 55.319388,24.173787 69.106365)",
  },
  {
    id: 164,
    abbreviation: "CHE",
    name: "Switzerland",
    coordinates:
      "BOX(5.9567400000001 45.8186680000001,10.4926462000001 47.808975)",
  },
  {
    id: 165,
    abbreviation: "SYR",
    name: "Syria",
    coordinates: "BOX(35.6823000000001 32.064907,42.4002640000001 37.548346)",
  },
  {
    id: 166,
    abbreviation: "TCD",
    name: "Chad",
    coordinates: "BOX(13.448073 -23.033694,24.2482600000001 23.2259650000001)",
  },
  {
    id: 167,
    abbreviation: "TGO",
    name: "Togo",
    coordinates: "BOX(-0.192966 -11.155827,1.655133 11.186882)",
  },
  {
    id: 168,
    abbreviation: "THA",
    name: "Thailand",
    coordinates:
      "BOX(97.3755640000001 5.613382,105.5719400000001 20.4532860000001)",
  },
  {
    id: 169,
    abbreviation: "TLS",
    name: "Timor-Leste",
    coordinates: "BOX(124.255078 8.03238700000011,126.867670 10.8504019999999)",
  },
  {
    id: 170,
    abbreviation: "TTO",
    name: "Trinidad and Tobago",
    coordinates:
      "BOX(-61.779132 10.023705, -60.0573829999999 11.5874500000001)",
  },
  {
    id: 171,
    abbreviation: "TUN",
    name: "Tunisia",
    coordinates: "BOX(7.2476810000001 30.253681,11.951641 37.5887789999999)",
  },
  {
    id: 172,
    abbreviation: "TUR",
    name: "Turkey",
    coordinates:
      "BOX(25.5010910000001 35.806118,44.8162859999999 42.1062859999999)",
  },
  {
    id: 173,
    abbreviation: "TZA",
    name: "Tanzania",
    coordinates: "BOX(29.130913 -11.690947,40.991774 0.994883)",
  },
  {
    id: 174,
    abbreviation: "UGA",
    name: "Uganda",
    coordinates: "BOX(29.5905700000001 -1.484551,35.0045359999999 4.213158)",
  },
  {
    id: 175,
    abbreviation: "UKR",
    name: "Ukraine",
    coordinates: "BOX(22.130194 44.388177,40.299993 52.381839)",
  },
  {
    id: 176,
    abbreviation: "ARE",
    name: "United Arab Emirates",
    coordinates: "BOX(51.586035 22.0592909999999,56.1020299999999 26.076206)",
  },
  {
    id: 177,
    abbreviation: "GBR",
    name: "United Kingdom",
    coordinates: "BOX(-8.648649 49.882701,1.76961000000001 61.350394)",
  },
  {
    id: 178,
    abbreviation: "USA",
    name: "United States",
    coordinates:
      "BOX(-179.148910999999 18.7763160000001,-64.8509829999999 49.3843589999999)",
  },
  {
    id: 179,
    abbreviation: "URY",
    name: "Uruguay",
    coordinates:
      "BOX(-58.4650129999999 -34.828579, -53.1786579999999 -30.096918)",
  },
  {
    id: 180,
    abbreviation: "UZB",
    name: "Uzbekistan",
    coordinates:
      "BOX(55.993205 37.0244739999999,73.1349609999999 45.1972500000001)",
  },
  {
    id: 181,
    abbreviation: "VUT",
    name: "Vanuatu",
    coordinates: "BOX(166.304771 -20.348099,167.956142 -15.193688)",
  },
  {
    id: 182,
    abbreviation: "VEN",
    name: "Venezuela",
    coordinates: "BOX(-73.237239 0.673328999999999, -59.556028 12.277892)",
  },
  {
    id: 183,
    abbreviation: "VNM",
    name: "Vietnam",
    coordinates: "BOX(102.144104 8.346006,109.446093 23.3928249999999)",
  },
  {
    id: 184,
    abbreviation: "WLF",
    name: "Wallis and Futuna",
    coordinates: "BOX(-178.027800 -14.256200,-176.014800 -13.224800)",
  },
  {
    id: 185,
    abbreviation: "WSM",
    name: "Samoa",
    coordinates: "BOX(-172.106300 -14.070200,-169.706300 -13.174200)",
  },
  {
    id: 186,
    abbreviation: "YEM",
    name: "Yemen",
    coordinates: "BOX(42.892490 12.4453300000001,53.197190 18.4907999999999)",
  },
  {
    id: 187,
    abbreviation: "ZAF",
    name: "South Africa",
    coordinates: "BOX(16.057479 -34.835137,32.147932  -22.126568)",
  },
  {
    id: 188,
    abbreviation: "ZMB",
    name: "Zambia",
    coordinates: "BOX(22.060743 -17.0370409999999,32.908066  -8.335056)",
  },
  {
    id: 189,
    abbreviation: "ZWE",
    name: "Zimbabwe",
    coordinates: "BOX(16.691934 -22.4128409999999,32.646424  -15.608101)",
  },
];

export default datosPaises;
