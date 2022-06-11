class Ratio{
    constructor(r, i){
    this.r = r;
    this.i = i;
}
    toString(){
        return this.r + "/" + this.i;
    }
}
var r1 = new Ratio(1,3);
console.log(r1.toString());
