function solution(numbers) {
    
    
    var answer = 0
    // var array1 = [1,2,3,4,5,6,7,8,9]
    
    // console.log(numbers)
    
    for(let i=0; i<10; i++){
        
        if(!( numbers.includes(i))){
            
            answer+=i
        }
        
    }
   
    return answer;
}
