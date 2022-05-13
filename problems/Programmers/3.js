function solution(s) {
    var answer = '';
    
    if ((s.length)%2===1){
        var answer = s[(s.length)/2-0.5];      
    } else
        var answer = s[((s.length)/2)-1]+s[((s.length)/2)];
    
    return answer;
}
