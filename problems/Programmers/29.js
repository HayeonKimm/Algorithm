

n=45

console.log(solution(n))

function solution(n) {
    
    
    var answer = 0; //10진 -> 3진수

    let tmp = n.toString(3);
    tmp = tmp.split("").reverse().join("");


    //3진수를 10진수로 변환 parseInt(변수, 현재진수값);

    answer = parseInt(tmp,3);
    
    return answer;

}