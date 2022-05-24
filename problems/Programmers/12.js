function solution(price, money, count) {
    var answer = 0;
    
    
    for(let i=1; i<=count;i++){
            
        money-=price*i    
        
    }
    
    if (money<0){
            
            return Math.abs(money)
        }else{
            
            return 0
        }
}
