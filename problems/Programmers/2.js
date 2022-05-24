function solution(num) {
    var answer = '';
    
    if(num%2===0){  // num을 2로 나눈 나머지가 0이면 Even 반환
        var answer = "Even";
    } else // 그 이외 경우는 Odd 반환
        var answer = "Odd"; 
    
    
    
    return answer;
}
