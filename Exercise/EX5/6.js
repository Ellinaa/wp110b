function Factor(n){
  sum = n;
  factors=[];
  i=0;
  while(sum>1){
    i++;
    if(sum%i==0&&i!=1){
      sum=sum/i;
      factors.push(i);
      i=0;
    }
  }
  return factors;
}
console.log("factor(45) => ",Factor(45));
