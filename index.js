

function produceDrivingRange(blockRange) {
  return function foo(startBlock, endBlock){
    let start = startBlock.slice(0, -2);
    let end = endBlock.slice(0, -2);
    if (Math.abs(start - end) <= blockRange) {
      return `within range by ${blockRange - Math.abs(start - end)}`
    } else {
      return `${Math.abs(start - end) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(percent) {
    return percent * tip
  }
}


function createDriver() {
  driverId = 0;

  return class Driver {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
