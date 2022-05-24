function solution(a, b) {
    var answer = 0; 
    
    
    // 두 경우로 나눴다.
    // 1. b>=a
    
    if (b>=a){
        for(let i=a; i<=b; i++){
            answer+=i;
        }
    }else{   // 2. 그 나머지 경우. : b<a
        
        for(let i=b; i<=a; i++){   // b가 더 작으니까 위 경우의 반대로 b와 a의 위치를 바꾼다.
            answer+=i;
        }
    }

    return answer;
        
        
}
