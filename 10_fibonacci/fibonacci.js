const fibonacci = function(num) {
    let fibo = [0,1];
    let end = 0;
    num = Number(num);
    if(num == 1){
        end = 1;
    }
    if(num < 0){
        return "OOPS";
    }else {
        for(let i = 2; i<=num;i++){
   
   fibo[i] = fibo[i-1] + fibo[i-2];
   end = fibo[i];
}
return end;
    }

};

// Do not edit below this line
module.exports = fibonacci;
