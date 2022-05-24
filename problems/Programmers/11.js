function solution(x, n) {
    var answer = [];
    var so =0;
    
    for(let i=0;i<n; i++){
        
        so+=x
        answer.push(so)
        
        if(answer.length>=n){
            return answer
        }
    }
    
}
