for(var i = 1;i<=9;i++){
            var s = ' ';
            for(var j = 1;j<=9;j++){
                s += j + '*' + i +'=' +(i*j)+'\t'
            }
            console.log(s);
        }
