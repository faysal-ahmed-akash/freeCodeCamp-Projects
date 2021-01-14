function checkCashRegister(price, cash, cid) {
  var obj = {}, newArr = [];
  var arr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var due = cash - price;
  var y = due;
  var sum = cid.reduce((x, item) => x + item[1], 0);

  for(var i = 0; i < arr.length; i++){
    if(due >= arr[i]){
      var m = parseFloat((cid[cid.length - i - 1][1] / arr[i]).toFixed(10));
      var n = Math.floor(parseFloat((due / arr[i]).toFixed(10)));
      var x = arr[i] * Math.min(m, n);
      due = parseFloat((due - x).toFixed(10));
      newArr.push([cid[cid.length - i - 1][0], x])
    }
  }

  if(due == 0){
    if(sum == y){
      obj.status = 'CLOSED';
      obj.change = cid;
    }else{
      obj.status = 'OPEN';
      obj.change = newArr;
    }
  }else{
    obj.status = 'INSUFFICIENT_FUNDS';
    obj.change = [];
  }
  return obj;
  // var arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // var avail = cid.map((item, index) => parseFloat((item[1] / arr[index]).toFixed(10)));
  // var isClosed = cid.filter(item => due == item[1]);
  // var isInsufficientFund = cid.map((item, index) => due <= item[1] && (due * 100) % (arr[index] * 100) == 0);
  // var need = arr.map((item, index) => (due * 100) % (item * 100) == 0 && due <= avail[index] * item ? item = index : item = -1).filter(item => item != -1);
  // var need = arr.map((item, index) => Number.isInteger(due/item) && (due / item) <= avail[index] ? item = index : item = -1).filter(item => item != -1);
// var newArr = []
//   if(sum > due){
//     // var open = arr.map((x, item, index) => x - (item * Math.min(Math.floor(cid[cid.length - index - 1][1] / item), Math.floor(x / item))),due);
//     var open = arr.reduce((x, item, index) => 
//       newArr.push()
//     , due);
//   }
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));