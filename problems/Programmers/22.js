

n=987
console.log(solution(n))

function solution(n){
    
    
    var answer = 0;
    n=String(n);


    // console.log(n)
    for (let i=0;i<n.length;i++){
        
        answer+=parseInt(n[i]);
        
    }

    return answer;  
}
