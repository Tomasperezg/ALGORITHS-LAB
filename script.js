///countwitharray
var array = [15,17,22,33,33,25,22,25,31,33,31,35,37,22];
function count(array)
{
    var c = 0;
    for(var [i] in array)
        if(array[i] !== undefined)
            c++;

return c;
}
console.log(count(array));

/////////////////////countwithmap
var myArray = [15,17,22,33,33,25,22,25,31,33,31];//this is the array
function Array(myArray){//we create a function
  var x = [], y = [], prev;// we store our values in two different Arrays

  myArray.sort();
  for(var i = 0;i < myArray.length; i++){
    if(myArray[i] !== prev){
      x.push(myArray[i]);//this push each item withour repeating and stored in x
      y.push(1);//this array represent the amount of time an item was repeated in the array
    }
    else{
      y[y.length-1]++;
    }
    prev = myArray[i];
  }
  return [x,y];
}
var write = Array(myArray);
console.log('['+ write[0] + ']<br>['+ write[1] +']');
