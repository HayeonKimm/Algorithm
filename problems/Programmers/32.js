function solution(numbers) {
    var answer = [];
    
    
    for(let i=0;i<numbers.length;i++){
        
        for(let j=0;j<numbers.length;j++){
            
            if (i!=j && answer.includes(numbers[i]+numbers[j])==false) {
                
                
                answer.push(numbers[i]+numbers[j])
                
            }
        }
    }
    
    
    
    return answer.sort((a,b)=>a-b);
}