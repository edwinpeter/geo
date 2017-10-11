var GeoJSON = require('geojson');
var fs = require('fs');

var data = [
  {
    polygon: [
      [             [
              103.77685546875,
              1.3316290644037232
            ],
            [
              103.79264831542969,
              1.3275103005613949
            ],
            [
              103.79127502441406,
              1.336434280186183
            ],
            [
              103.77685546875,
              1.3316290644037232
            ] ]
    ]
  }
];


gg = GeoJSON.parse(data, {'Polygon': 'polygon'})
console.log(JSON.stringify(gg));



fs.appendFileSync('geojson.json', JSON.stringify(gg));