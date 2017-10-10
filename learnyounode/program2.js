var array = null
function leArray(){
  array = process.argv()
};

leArray();
var total = 0;
for (var i = 2; i < array.length; i++){
  total += array[i];
}
console.log(total);