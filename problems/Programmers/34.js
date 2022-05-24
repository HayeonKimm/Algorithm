function solution(answers) {
    var answer = [];

    var p1 = [1, 2, 3, 4, 5];
    var p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var p3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let s1 = answers.filter((a,i)=>a === p1[i%5]).length;
    let s2 = answers.filter((a,i)=>a === p2[i%8]).length;
    let s3 = answers.filter((a,i)=>a === p3[i%10]).length;
    
    let maxmax=Math.max(s1,s2,s3)
    
    if (maxmax == s1) answer.push(1)
    if (maxmax == s2) answer.push(2)
    if (maxmax == s3) answer.push(3)
        
    return answer;
}