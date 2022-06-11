function transpose(a){
  var arrays=[];
  for(var j=0;j<a[0].length;j++){
    var array =[];
    for(var i=0;i<a.length;i++){  
      array.push(a[i][j]);
    }
    arrays.push(array);
  }             
  return arrays;
}
