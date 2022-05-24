function solution(seoul) {
    var answer = '';
    
    for(let i = 0; i<seoul.length; i++){
        
       if(seoul[i].includes('Kim')==true){
           
           return "김서방은 "+i+"에 있다"
           
       }
           
           
        
    }
    
    
    
    return answer;
}