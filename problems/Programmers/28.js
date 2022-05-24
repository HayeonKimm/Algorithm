function solution(x) {
    var answer = true;
    var sum = 0;
    
    var hey=String(x)
    hey=hey.split('')
    
    for (let i=0;i<hey.length;i++){
        
        sum+=Number(hey[i])
    }
    
    if (x%sum==0){
        
        return answer
    }else{
        return false
    }
    
    
    return answer;
}