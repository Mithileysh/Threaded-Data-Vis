//adapted from https://blog.poettner.de/2011/06/09/simple-statistics-with-php/
function Median(data) {
  return Math.floor(Quartile_50(data));
}

function Quartile_25(data) {
  return Math.floor(Quartile(data, 0.25));
}

function Quartile_50(data) {
  return Math.floor(Quartile(data, 0.5));
}

function Quartile_75(data) {
  return Math.floor(Quartile(data, 0.75));
}

function Quartile(data, q) {
  data=Array_Sort_Numbers(data);
  var pos = ((data.length) - 1) * q;
  var base = Math.floor(pos);
  var rest = pos - base;
  if( (data[base+1]!==undefined) ) {
    return data[base] + rest * (data[base+1] - data[base]);
  } else {
    return data[base];
  }
}

function Array_Sort_Numbers(inputarray){
  return inputarray.sort(function(a, b) {
    return a - b;
  });
}
