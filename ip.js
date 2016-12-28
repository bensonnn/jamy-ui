let string = '7.1.2.3';

function convertToInt(ip) {
  ip = ip.split('.').map((str) => return parseInt )

  let accumulator = 0;
  for(let i = (ip.length - 1); i >= 0; i--) {
    accumulator = accumulator + ip[i] * Math.pow(2, ((ip.length - i - 1) * 8));
  }
  return accumulator;
}


function maskValue(val) {
  let start = 32
  return Math.pow(2, 32 - val)
}

console.log(maskValue(8))
console.log(convertToInt(string));
