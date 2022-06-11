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
    mul(o2)
    {
        return new Ratio(this.r * o2.r, this.i * o2.i);
    }

    div(o2)
    {
        return new Ratio(this.r * o2.i, this.i * o2.r);
    }
}
var r1 = new Ratio(1,3), r2 = new Ratio(2,4); 
var r3 = r1.mul(r2); 
console.log(r3.toString());
