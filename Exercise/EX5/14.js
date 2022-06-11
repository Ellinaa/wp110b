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
    mul(o2){
        return new Ratio(this.r * o2.r, this.i * o2.i);
    }

    div(o2){
        return new Ratio(this.r * o2.i, this.i * o2.r);
    }
    reduce(){
        var min;
        if(this.r > this.i) min = this.i;
        else min = this.r;

        for(var j = 2 ; j <= min ; j++){
            if(this.r % j === 0 && this.i % j === 0){
                this.r /= j;
                this.i /=j;
                min /=j;
                j=2;
            }
        }
    }
}
var r1 = new Ratio(6,9); 
r1.reduce();
console.log(r1.toString());
