class Vector{
  constructor(array){
    this.a = array;
  }

  length(){
    let sum = 0;
    for (let p of this.a){
      sum += p*p;
    }
    return Math.sqrt(sum);
  }

  neg(){
    let na = [];
    for (let i in this.a){
      na[i] = -this.a[i];
    }
    return new Vector(na);
  }

  add(v){
    let na = [];
    for (let i in this.a){
      na[i] = this.a[i] + v.a[i];
    }
    return new Vector(na);
  }

  sub(v){
    return this.add(v.neg());
  }

  dot(v){
    let sum = 0;
    for (let i in this.a){
      sum += this.a[i] * v.a[i];
    }
    return sum;
  }

  distance(v){
    return this.sub(v).length();
  }

  toString(){
    return this.a.toString();
  }
}

let v1 = new Vector([8, 2, 5]);
let v2 = new Vector([1, 3, 5]);


console.log(v1)
console.log(v1.toString())
console.log(v1+'')
console.log('v1.length()=', v1.length())
console.log('v2.length()=', v2.length())
console.log('v1.sub(v2)=', v1.sub(v2))
console.log('v2.sub(v2)=', v2.sub(v2))
console.log('v1.dot(v2)=', v1.dot(v2))
console.log('v1.sub(v2).length()=', v1.sub(v2).length())
console.log('v1.distance(v2)=', v1.distance(v2))
