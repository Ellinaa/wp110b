function nine (num) {
    for(var i = 1; i <= num; i++){
        var str = '';
         for(var j = 1; j <= num; j++){
            if(i >= j){
                str += j + 'x' + i + '=' + i*j + ' ';
            }
        }
        console.log(str)
    }
}
nine(9)
