function add(a,b){
  arrays = [];
  for(var i=0;i<a.length;i++){
    array=[];
    for(var j=0;j<a[i].length;j++){
      array.push(a[i][j]+b[i][j]);
    }
    arrays.push(array);
  }
  return arrays;
}
console.log("add([[1,2],[3,4]], [[1,1],[1,1]]) => ",add([[1,2],[3,4]],[[1,1],[1,1]]));
console.log("add([[1,2,3],[3,4,5]],[[1,1,1],[1,1,1]]) => ",add([[1,2,3],[3,4,5]],[[1,1,1],[1,1,1]]));
