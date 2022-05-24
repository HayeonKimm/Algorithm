
// arr = [4,3,2,1]
arr = [10]

console.log(solution(arr))


function solution(arr) {
    var answer = [];
    
    arr=arr.sort((a,b)=>b-a)
    
    if (arr.length>1){
      arr.pop();
    }else{
        
        return -1;
    }
    
    
    return arr;
}


문제에 알맞은 배열을 반환하기 위해서는 먼저 주어진 정수 배열에서 가장 작은 수를 제거해야 합니다.

 

작은 수를 찾는 가장 쉬운 방법은 Math.min 메서드를 이용하는 방법입니다.

하지만 Math.min 메서드는 (2, 3, 4)와 같은 형식, 즉 배열을 받지를 못하므로 배열을 풀어줘야 합니다.

 

배열을 푸는 가장 쉬운 방법은... (Spread 연산자)를 사용하는 것입니다.