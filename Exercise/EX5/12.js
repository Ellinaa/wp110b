class Ratio{
    constructor(r, i){
        this.r = r;
        this.i = i;
    }
    toString(){
        return this.r + "/" + this.i;
    }
    add(o2){
        return this.r * o2.i + o2.r * this.i +"/"+ this.i * o2.i;
    }
    sub(o2){
        return this.r * o2.i - o2.r * this.i +"/"+ this.i * o2.i;
    }
}
var r1 = new Ratio(1,3),r2 = new Ratio(2,4); 
var r3 = r1.add(r2); 
console.log(r3.toString());
